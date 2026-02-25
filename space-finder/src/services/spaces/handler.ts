import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import {
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
  Context,
} from "aws-lambda";
import postSpaces from "./PostSpaces";
import getSpaces from "./GetSpaces";

const ddbClient = new DynamoDBClient({});
const handler = async (
  event: APIGatewayProxyEvent,
  context: Context,
): Promise<APIGatewayProxyResult> => {
  let message: string;

  try {
    switch (event.httpMethod) {
      case "GET":
        const getResponse = await getSpaces(event, ddbClient)
        console.log(getResponse)
        return getResponse
        break;
      case "POST":
        const postResponse = await postSpaces(event, ddbClient);
        return postResponse;
      default:
        break;
    }
  } catch (error) {
    console.log(error);
    return { statusCode: 500, body: JSON.stringify(error.mesage) };
  }

  const response: APIGatewayProxyResult = {
    statusCode: 200,
    body: JSON.stringify(message),
  };
  return response;
};

export { handler };

// curl post: curl -X POST https://qv9ibpncel.execute-api.eu-west-1.amazonaws.com/prod/spaces
//curl get: curl https://qv9ibpncel.execute-api.eu-west-1.amazonaws.com/prod/spaces
