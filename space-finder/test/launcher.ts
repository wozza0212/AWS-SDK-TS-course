import { handler } from "../src/services/spaces/handler";

process.env.AWS_REGION = "eu-west-1";
process.env.TABLE_NAME = "SpaceStack-06d1a6d078e1";

handler(
  {
    httpMethod: "POST",
    body: JSON.stringify({
      location: "London",
    }),
  } as any,
  {} as any,
);
