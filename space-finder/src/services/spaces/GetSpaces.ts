import {
  DynamoDBClient,
  GetItemCommand,
  ScanCommand,
} from "@aws-sdk/client-dynamodb";
import { unmarshall } from "@aws-sdk/util-dynamodb";
import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";

const getSpaces = async (
  event: APIGatewayProxyEvent,
  ddbClient: DynamoDBClient,
): Promise<APIGatewayProxyResult> => {
  if (event.queryStringParameters) {
    if ("id" in event.queryStringParameters) {
      const spaceID = event.queryStringParameters["id"];
      const getItemResponse = await ddbClient.send(
        new GetItemCommand({
          TableName: process.env.TABLE_NAME,
          Key: {
            id: { S: spaceID },
          },
        }),
      );
      if (getItemResponse.Item) {
        const unmarshalledItem = unmarshall(getItemResponse.Item);
        return {
          statusCode: 200,
          body: JSON.stringify(unmarshalledItem),
        };
      } else {
        return {
          statusCode: 401,
          body: JSON.stringify(`Item with spaceId ${spaceID} not Found`),
        };
      }
    } else {
      const result = await ddbClient.send(
        new ScanCommand({
          TableName: process.env.TABLE_NAME,
        }),
      );
      const unmarshalledItems = result.Items.map((item) => unmarshall(item));
      console.log(unmarshalledItems);
      return { statusCode: 201, body: JSON.stringify(unmarshalledItems) };
    }
  }
};

export default getSpaces;
