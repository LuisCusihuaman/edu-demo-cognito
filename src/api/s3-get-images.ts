import type { ListObjectsCommandOutput, S3Client } from '@aws-sdk/client-s3';
import {
  GetObjectCommand,
  ListObjectsCommand,
} from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

export type ImageInfo = {
  key: string;
  url: string;
};

/**
 * Fetches image URLs from an S3 bucket using an already region-configured S3Client.
 * @param s3Client - An instance of S3Client configured with proper credentials and region.
 * @param bucketName - The name of the bucket from which to fetch images.
 * @returns A promise that resolves to an array of objects containing image keys and signed URLs.
 */
export async function fetchImagesFromS3(
  s3Client: S3Client,
  bucketName: string,
): Promise<ImageInfo[]> {
  try {
    const data: ListObjectsCommandOutput = await s3Client.send(
      new ListObjectsCommand({ Bucket: bucketName }),
    );
    if (data.Contents && data.Contents.length > 0) {
      const images = await Promise.all(
        data.Contents.map(async (photo) => {
          const photoKey = photo.Key;
          const url = await getSignedUrl(
            s3Client,
            new GetObjectCommand({
              Bucket: bucketName,
              Key: photoKey,
            }),
            { expiresIn: 3600 },
          ); // Expires in 1 hour
          return { key: photoKey, url };
        }),
      );
      return images.filter((image) => image.key !== undefined) as ImageInfo[];
    } else {
      console.log('No contents found in the bucket.');
      return [];
    }
  } catch (error) {
    console.error('Error fetching images from S3:', error);
    return [];
  }
}