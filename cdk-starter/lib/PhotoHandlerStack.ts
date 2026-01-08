import { Construct } from "constructs";
import * as cdk from "aws-cdk-lib";
import { Fn } from "aws-cdk-lib";
import {
  Function as LambdaFunction,
  Runtime,
  Code,
} from "aws-cdk-lib/aws-lambda";

interface PhotoHandlerStackProps extends cdk.StackProps {
    targetBucketArn: string
}

export class PhotoHandlerStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: PhotoHandlerStackProps) {
    super(scope, id, props);

    // const targetBucket = Fn.importValue("photobucket");

    new LambdaFunction(this, "PhotosHandler", {
      runtime: Runtime.NODEJS_20_X,
      handler: "index.handler",
      code: Code.fromInline(`
            exports.handler = async (event) => {
              console.log("hello!zxzxc: " + process.env.TARGET_BUCKET)
            };
          `),
      environment: {
        TARGET_BUCKET: props.targetBucketArn,
      },
    });
  }
}
