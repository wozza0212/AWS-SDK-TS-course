import { Stack, StackProps } from "aws-cdk-lib";
import { LambdaIntegration, RestApi } from "aws-cdk-lib/aws-apigateway";
import { Construct } from "constructs";

interface ApiStackProps extends StackProps {
  helloLambdaIntegration: LambdaIntegration
}
export class ApiStack extends Stack {
  constructor(scope: Construct, id: string, props: ApiStackProps) {
    super(scope, id, props);


    const api = new RestApi(this, 'SpacesApi')
    const spacesResources = api.root.addResource('spaces')
    spacesResources.addMethod('GET', props.helloLambdaIntegration)
  }
}

// Make get request to lambda using curl

//  curl https://lbbpkfabx8.execute-api.eu-west-1.amazonaws.com/prod/spaces