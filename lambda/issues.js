const AWS = require('aws-sdk');

AWS.config.update({ dynamodb: { region: 'ap-southeast-1' }});
const dynamoDB = new AWS.DynamoDB.DocumentClient();

const getIssues = async () => {
  try {
    const params = {
      TableName: `smartcase-issues`
     };
    const result = await dynamoDB.scan(params).promise();
     return result.Items;
  } catch (err) {
    console.log(err)
  }
  return [];
}

exports.handler = async (event) => {
  const issues = await getIssues();
    const response = {
        statusCode: 200,
        body: JSON.stringify(issues),
        headers: { 'Access-Control-Allow-Origin': '*' },
    };
    return response;
};
