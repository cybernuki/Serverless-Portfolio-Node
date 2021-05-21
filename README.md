# Serverless-Portfolio-Node

This is an express js API, it is intended to allow crud operation on users portfolios.

## Requisites:
nodejs14.x
linux OS

## Preparation:
once had install node js run the following commands: <br>
```
npm install
npm install -g serverless 
sls config credentials --provider aws --key ${{ your aws key }} --secret ${{ your aws secret }}  // you can find information to get aws credentials here: https://www.serverless.com/framework/docs/providers/aws/guide/credentials/'
sls dynamodb install
```

## Execution:
if you want to check the code <b>locally</b> use the following instruction: <br>
```
sls offline start
```
in the other hand if you want to deploy changes to your AWS Lambda use:
```
sls deploy
```

## Tests:
Actually, you must to start dynamoDb locally in order to execute integration tests, please use these instruction to performe tests:
```
sls dynamodb start
npm test
```

## How to use it:
there are three endpoints:
```
GET api/v1/portfolios/first // Retrive the first portfolio saved on database or empty if it doesn't exist already
POST api/v1/portfolios // Creates a new portfolio into the database
PATCH api/v1/portfolios/firtst // update the first portfolio into the database
```
these are the parameters recieved by the POST and PATCH routes:
```
 * 	id,
 * 	first_names,
 * 	last_names,
 * 	description,
 * 	image_url,
 * 	title,
 * 	experience_summary,
 * 	twitter_user_name,
 * 	twitter_user_id,
```

## Technology Stack:
serverless Framework <br>
node js <br>
aws lambda <br>
DynamoDB <br>

## Total Time:
I started to develop this project on: 19/05/2021 9:00pm <br>
I finish to develop this project on: 21/05/2021 8:19pm <br>
total hours: <b>12 hours</b>

## Pending for develop:
- Implement view that consumes this api
- Implement twitter integration

## Resources:
https://www.serverless.com/blog/serverless-express-rest-api // Basic preparation<br>
https://www.youtube.com/watch?v=lm7fn72eA8c // How to configure express+serverless+aws<br>
https://www.youtube.com/watch?v=wLSlhXsUTUo // Update using dynamodb<br>
https://gist.github.com/maxkostinevich/9672966565aeb749d41e49673be4e7fa // Github Actions + automatic sls deployment
