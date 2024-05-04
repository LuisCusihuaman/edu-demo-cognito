import {
  // This command supersedes the ListObjectsCommand and is the recommended way to list objects.
  ListObjectsV2Command,
} from '@aws-sdk/client-s3';

import { updateS3ClientCredentials, s3Client } from '@/api/common/client';

export default async function s3GetImages() {
  await updateS3ClientCredentials();
  const command = new ListObjectsV2Command({
    Bucket: 'ivan-demo-patchesprivatebucket-dnwfrfn345fv',
    // The default and maximum number of keys returned is 1000. This limits it to
    // one for demonstration purposes.
    MaxKeys: 1,
  });

  try {
    let isTruncated = true;

    console.log('Your bucket contains the following objects:\n');
    let contents = '';

    while (isTruncated) {
      const { Contents, IsTruncated, NextContinuationToken } =
        await s3Client?.send(command);
      const contentsList = Contents?.map((c: any) => ` • ${c.Key}`).join('\n');
      contents += contentsList + '\n';
      isTruncated = IsTruncated;
      command.input.ContinuationToken = NextContinuationToken;
    }
    return contents;
  } catch (err) {
    console.error(err);
  }
}
