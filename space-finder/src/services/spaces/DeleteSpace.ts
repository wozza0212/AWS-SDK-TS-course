import { DeleteItemCommand, DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { unmarshall } from "@aws-sdk/util-dynamodb";
import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";

const deleteSpace = async (
  event: APIGatewayProxyEvent,
  ddbClient: DynamoDBClient,
): Promise<APIGatewayProxyResult> => {
  if (event.queryStringParameters && "id" in event.queryStringParameters) {
    const spaceID = event.queryStringParameters["id"];

    await ddbClient.send(
      new DeleteItemCommand({
        TableName: process.env.TABLE_NAME,
        Key: {
          id: { S: spaceID },
        },
      }),
    );
    return {
      statusCode: 200,
      body: JSON.stringify(`Deleted space with id: ${spaceID}`),
    };
  }

  return {
    statusCode: 400,
    body: JSON.stringify("Please provide correct id"),
  };
};

export default deleteSpace;
