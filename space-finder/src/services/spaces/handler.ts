import {
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
  Context,
} from "aws-lambda";
const handler = async (
  event: APIGatewayProxyEvent,
  context: Context,
): Promise<APIGatewayProxyResult> => {
  let message: string;

  switch (event.httpMethod) {
    case "GET":
      message = "Hello from Get";
      break;
    case "POST":
      message = "Hello from Post";
      break;
    default:
      break;
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
