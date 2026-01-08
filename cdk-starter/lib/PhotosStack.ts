import * as cdk from 'aws-cdk-lib';
import { Fn, CfnOutput } from 'aws-cdk-lib';
import { Bucket, CfnBucket } from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';

export class PhotosStack extends cdk.Stack {

    private stackSuffix : string;
    public readonly photosBucketArn: string

    constructor(scope: Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        this.initializeSuffix();

        

        const PhotosBucket = new Bucket(this, 'PhotosBucket', {
            bucketName: `photobucket-${this.stackSuffix}`
        });
        this.photosBucketArn = PhotosBucket.bucketArn
        // If PhotosBucket is changed, AWS will delete and replace the cloud formation stack
        
        // To rename bucket logial if manually, create a const for bucket 
        // (PhotosBucket.node.defaultChild as CfnBucket).overrideLogicalId('PhotosBucketRenamable')

        // new CfnOutput(this, 'photobucket', {
        //   value: PhotosBucket.bucketArn,
        //   exportName: 'photobucket'
        // })

        //  Intrinsic Functions, see initializeSuffix

        //  Why multiple Stacks?
        // sensetive information in some stacks, how to organize? e.g. split for roles
        // seperate stacks for resources with complex initialisation(VPS, DNS)

        // Cross stack References

        
  }

  private initializeSuffix(){
    const shortStackId = Fn.select(2, Fn.split('/', this.stackId))
    this.stackSuffix=  Fn.select(4, Fn.split('-', shortStackId))
  }
}