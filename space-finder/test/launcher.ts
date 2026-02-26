import { handler } from "../src/services/spaces/handler";

process.env.AWS_REGION = "eu-west-1";
process.env.TABLE_NAME = "SpaceStack-06d1a6d078e1";

handler(
  {
    httpMethod: "GET",
    queryStringParameters: {
      id: "86c981dc-a67b-41ad-a3ba-996d83680257"
    },
  } as any,
  {} as any,
);

// handler(
//   {
//     httpMethod: "GET",
//     queryStringParameters: {
//     },
//   } as any,
//   {} as any,
// );

//  ts-node test/launcher.ts
