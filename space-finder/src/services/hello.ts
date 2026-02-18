// exports.main = async function (event, context) {
//   return {
//     statusCode: 200,
//     body: JSON.stringify(
//       `Hello from Lambda, I will read from ${process.env.TABLE_NAME}`
//     ),
//   };
// };

import {
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
  Context,
} from "aws-lambda";
import { S3Client, ListBucketsCommand } from "@aws-sdk/client-s3";
import { v4 } from "uuid";

const s3Client = new S3Client({});

const handler = async (event: APIGatewayProxyEvent, context: Context) => {
  const listBuckets = new ListBucketsCommand({});

  const listBucketsResults = (await s3Client.send(listBuckets)).Buckets;
  const response: APIGatewayProxyResult = {
    statusCode: 200,
    body: JSON.stringify(
      `Hello from Lambda, here are your buckets: ${JSON.stringify(listBucketsResults)} this is the id ${v4()}`,
    ),
  };
  console.log(event);
  return response;
};

export { handler };
