import { useEffect, useState } from 'react';

import { useS3Client } from '@/api/hooks/use-s3-client';
import type { ImageInfo } from '@/api/s3-get-images';
import { fetchImagesFromS3 } from '@/api/s3-get-images';

const DashboardPage = () => {
  const s3Client = useS3Client();
  const [images, setImages] = useState<ImageInfo[]>([]);

  useEffect(() => {
    if (!s3Client) return;

    fetchImagesFromS3(s3Client, import.meta.env.VITE_S3_BUCKET_NAME)
      .then(setImages)
      .catch((error) => console.error('Failed to load images:', error));
  }, [s3Client]);

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
