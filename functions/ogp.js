exports.handler = function(event, context, callback) {
  const firebase = require('js/firebase')
  console.log(firebase)
  const EVENT_ID = event.queryStringParameters.path
  callback(null, {
    statusCode: 200,
    body: `<html>
<head>
<meta http-equiv="refresh" content="0; URL='https://yzkamp.netlify.com/events/${EVENT_ID}'" />
</head>
</html>`,
  });
}
