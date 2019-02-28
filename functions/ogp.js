exports.handler = function(event, context, callback) {
  callback(null, {
    statusCode: 200,
    body: `<html>
<head>
<meta http-equiv="refresh" content="0; URL='http://new-website.com'" />
</head>
</html>`,
  });
}
