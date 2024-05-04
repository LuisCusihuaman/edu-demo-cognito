import { S3Client } from '@aws-sdk/client-s3';
import { useEffect, useState } from 'react';

import { useAwsTemporaryCredentials } from '@/api/hooks/use-aws-temporary-credentials';
import type { ImageInfo } from '@/api/s3-get-images';
import { fetchImagesFromS3 } from '@/api/s3-get-images';

const DashboardPage = () => {
  const credentials = useAwsTemporaryCredentials();
  const [images, setImages] = useState<ImageInfo[]>([]);

  useEffect(() => {
    if (!credentials) return;
    // Directly create an S3Client instance here when credentials are available
    const s3Client = new S3Client({
      region: import.meta.env.VITE_AWS_REGION,
      credentials,
    });

    // Use the S3Client to fetch images
    fetchImagesFromS3(s3Client, import.meta.env.VITE_S3_BUCKET_NAME)
      .then(setImages)
      .catch((error) => console.error('Failed to load images:', error));
  }, [credentials]); // Depend only on credentials
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {images.map((image) => (
        <div key={image.key} className="rounded-lg border p-4">
          <img src={image.url} alt="From S3" />
        </div>
      ))}
    </div>
  );
};

export default DashboardPage;
