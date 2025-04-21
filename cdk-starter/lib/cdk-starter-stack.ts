import * as cdk from 'aws-cdk-lib';
import { Bucket, CfnBucket } from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';


// L3 construct
// class L3Bucket extends Construct {
//   constructor(scope: Construct, id: string, expiration: number) {
//     super(scope, id)

//     new Bucket(this, 'MyL3Bucket', {
//       lifecycleRules: [{expiration: cdk.Duration.days(expiration)}]
//     })
//   }
// }

export class CdkStarterStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    

    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'CdkStarterQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });

    // L1 construct
    // Only find errors at last point of development

    // const L1Bucket = new CfnBucket(this, 'MyL1Bucket', {
    //   lifecycleConfiguration:{
    //     rules:[{
    //       expirationInDays: 1,
    //       status: 'Enabled'
    //     }]
    //   }
    // })

    // console.log('bucket 1 name:', L1Bucket)

    // Parameters
    const duration = new cdk.CfnParameter(this, 'duration', {
      default: 6,
      minValue: 1,
      maxValue: 10,
      type: 'Number'
    })

    // L2 Construct
    const L2Bucket = new Bucket(this, 'MyL2Bucket', {
      lifecycleRules: [{expiration: cdk.Duration.days(duration.valueAsNumber)}]
    })
    console.log('bucket 2 name:', L2Bucket)


    // L3 construct
    // const L3ConstructedBucket = new L3Bucket(this, 'MyL3Bucket', 2)
    // console.log('bucket 3 name:', L3ConstructedBucket)

    // new cdk.CfnOutput(this, 'MyL2BucketName', {
    //   value: L2Bucket.bucketName
    // })



  }
}
