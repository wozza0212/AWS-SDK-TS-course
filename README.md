# AWS-SDK-TS-course

https://www.udemy.com/course/aws-typescript-cdk-serverless-react

### Setting up new project

(set up node project)

npm init -y 

(install dependencies)

npm i -D aws-cdk aws-cdk-lib constructs

npm i -D typescript ts-node

npm i -D @types/node

### Deploying Cloud Formation Stack


### Dependency Management

            Application
    App Code            Dependencies() node modules
                    Others                        AWS SDK

### AWS SDK
 - Helps us access other AWS resources from our account

 - Library that assists accessing AWS resources
 - JS SDK in the past : Monolith
        - Install npm i @aws-sdk/client-s3


### Debugging Lambdas
 - Make sure ts-node is installed
 - Select rthe debug button to teh elft hand side of vs code (Little bug with a play button)
 - Create a launch.json file
 