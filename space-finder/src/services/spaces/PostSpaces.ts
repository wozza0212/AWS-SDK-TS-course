import {
  DynamoDBClient,
  PutItem$,
  PutItemCommand,
} from "@aws-sdk/client-dynamodb";
import { marshall } from "@aws-sdk/util-dynamodb";
import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { v4 } from "uuid";
import validateAsSpaceEntry from "../shared/DataValidator";

const postSpaces = async (
  event: APIGatewayProxyEvent,
  ddbClient: DynamoDBClient,
): Promise<APIGatewayProxyResult> => {
  const randomId = v4();
  const item = JSON.parse(event.body);
  item.id = randomId;
  validateAsSpaceEntry(item)

  const result = await ddbClient.send(
    new PutItemCommand({
      TableName: process.env.TABLE_NAME,
      Item: marshall(item),
      // Item: {
      //   id: { S: item.id },
      //   location: { S: item.location },
      // },
    }),
  );
  console.log(result);
  return { statusCode: 201, body: JSON.stringify({ id: randomId }) };
};

export default postSpaces;


// With document client 

// import {
//   DynamoDBClient,
//   PutItem$,
//   PutItemCommand,
// } from "@aws-sdk/client-dynamodb";
// import { DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";
// import { marshall } from "@aws-sdk/util-dynamodb";
// import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
// import { v4 } from "uuid";

// const postSpacesWithDoc = async (
//   event: APIGatewayProxyEvent,
//   ddbClient: DynamoDBClient,
// ): Promise<APIGatewayProxyResult> => {

//   const ddbDocClient = DynamoDBDocumentClient.from(ddbClient)
//   const randomId = v4();
//   const item = JSON.parse(event.body);
//   item.id = randomId;

//   const result = await ddbDocClient.send(
//     new PutItemCommand({
//       TableName: process.env.TABLE_NAME,
//       Item: item
//     }),
//   );
//   console.log(result);
//   return { statusCode: 201, body: JSON.stringify({ id: randomId }) };
// };

// export default postSpacesWithDoc;