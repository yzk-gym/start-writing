exports.handler = function(event, context, callback) {
  console.log(context.queryStringParameters)
  const EVENT_ID = context.queryStringParameters.path
  callback(null, {
    statusCode: 200,
    body: `<html>
<head>
<meta http-equiv="refresh" content="0; URL='https://yzkamp.netlify.com/events/${EVENT_ID}'" />
</head>
</html>`,
  });
}
