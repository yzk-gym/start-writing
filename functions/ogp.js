exports.handler = function(event, context, callback) {
  console.log('Hello Netlify Functions.');
  console.log("ログ");
  console.log(event)
  console.log(context);
  console.log("テスト")
  console.log(event.queryStringParameters);
  callback(null, {
    statusCode: 200,
    body: `<a herf="https://yzkamp.netlify.com">`,
  });
}
