exports.handler = function(event, context, callback) {
  console.log('Hello Netlify Functions.');
  console.log("ログ");
  console.log(event)
  console.log(context);
  callback(null, {
    statusCode: 200,
    body: "テスト",
  });
}
