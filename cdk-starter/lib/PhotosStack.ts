import * as cdk from 'aws-cdk-lib';
import { Bucket, CfnBucket } from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';

export class PhotosStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const PhotosBucket = new Bucket(this, 'PhotosBucket3', {
        bucketName: 'photobucket-bvjhsbxjkabxjkas3'
    });
    // If PhotosBucket is changed, AWS will delete and replace the cloud formation stack
    
    // To rename bucket logial if manually, create a const for bucket 
    (PhotosBucket.node.defaultChild as CfnBucket).overrideLogicalId('PhotosBucketRenamable')
  }
}