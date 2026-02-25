import { handler } from "../src/services/spaces/handler";

process.env.AWS_REGION = "eu-west-1";
process.env.TABLE_NAME = "SpaceStack-06d1a6d078e1";

handler(
  {
    httpMethod: "GET",
    queryStringParameters: {
      id: "45644af3-63a5-49ef-b35c-875b719ea87d",
    },
  } as any,
  {} as any,
);


//  ts-node test/launcher.ts