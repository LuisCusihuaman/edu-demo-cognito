import type { ListObjectsCommandOutput, S3Client } from '@aws-sdk/client-s3';
import { ListObjectsCommand } from '@aws-sdk/client-s3';

export type ImageInfo = {
  key: string;
  url: string;
};

/**
 * Fetches image URLs from an S3 bucket using an already region-configured S3Client.
 * @param s3Client - An instance of S3Client configured with proper credentials and region.
 * @param bucketName - The name of the bucket from which to fetch images.
 * @returns A promise that resolves to an array of objects containing image keys and URLs.
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
      return data.Contents.map((obj) => ({
        key: obj.Key!,
        url: `https://${bucketName}.s3.${s3Client.config.region}.amazonaws.com/${obj.Key}`,
      }));
    } else {
      console.log('No contents found in the bucket.');
      return [];
    }
  } catch (error) {
    console.error('Error fetching images from S3:', error);
    return [];
  }
}
