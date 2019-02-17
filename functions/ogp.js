exports.handler = function(event, context, callback) {
  console.log('Hello Netlify Functions.')
  console.log(context);
  callback(null, {
    statusCode: 200,
    body: 'Hello, World',
  });
}
