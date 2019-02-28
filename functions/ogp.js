exports.handler = function(event, context, callback) {
  console.log("テスト")
  console.log(context)
  console.log(event)
  callback(null, {
    statusCode: 200,
    body: `<html>
<head>
<meta http-equiv="refresh" content="0; URL='https://yzkamp.netlify.com/events/1'" />
</head>
</html>`,
  });
}
