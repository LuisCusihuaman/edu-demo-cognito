# DEMO COGNITO

DEMO COGNITO is a front-end interface designed for a Cognito demo. This project is built using React, TypeScript, and Vite, ensuring rapid development and a scalable architecture.

## 🌟 Features

- **Role-Based Access Control**: 🔐 Implements access control to manage user permissions effectively using AWS Cognito User Pools.
- **Security**: 🛡️ Integrates with modern security protocols and AWS services to ensure data protection.
- **AWS Cognito Integration**: 🛂 Utilizes AWS Cognito User Pools and Identity Pools for robust authentication and identity management using OIDC (OpenID Connect).
- **S3 Content Protection**: 🗄️ Uses AWS S3 bucket policies to protect static website content, ensuring that only authenticated users can access private resources.
- **Temporary AWS Credentials**: 🔑 Generates temporary security credentials for users via AWS Security Token Service (STS), enabling secure access to private S3 bucket images based on their Cognito identity.
- **Public Web Hosting**: 🌐 Deployed on AWS S3 and distributed via AWS CloudFront to provide a fast, globally available front-end interface.

![DEMO COGNITO](public/security.webp)

## 🛠️ Installation

To get started with DEMO COGNITO, follow these steps:

1. Clone the repository

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Start the development server:

   ```bash
   pnpm run dev
   ```

## ⚙️ Configuration

Configure the following environment variables in the `.env` file:

- `VITE_API_URL`: URL to the backend API.
- `VITE_AWS_REGION`: AWS region for services like S3.
- `VITE_IDENTITY_POOL_ID`: AWS Cognito Identity Pool ID.
- `VITE_USER_POOL_ID`: AWS Cognito User Pool ID.
- `VITE_S3_BUCKET_NAME`: AWS S3 bucket name for file storage.
- `VITE_OWNER_DEMO_NAME`: Name of the demo's owner to personalize the interface.

## 🤝 Contributors

This project has been possible thanks to the collaboration of the following contributors:

| Contributor                                                          | Profile                                                 |
| -------------------------------------------------------------------- | ------------------------------------------------------- |
| ![Eduardo Cusihuaman](https://github.com/LuisCusihuaman.png?size=50) | [Eduardo Cusihuaman](https://github.com/LuisCusihuaman) |
| ![ivanovic99](https://github.com/ivanovic99.png?size=50)             | [ivanovic99](https://github.com/ivanovic99)             |

We appreciate your dedication and effort in carrying out this project!
