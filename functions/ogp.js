const firebase =  require('firebase');

exports.handler = function(event, context, callback) {

  var config = {
    apiKey: "AIzaSyD1yGsxATyeJ-LlwgtAgFZSk3juieScJys",
    authDomain: "first-write.firebaseapp.com",
    databaseURL: "https://first-write.firebaseio.com",
    projectId: "first-write",
    storageBucket: "first-write.appspot.com",
    messagingSenderId: "1090385959667"
  };
  firebase.initializeApp(config);
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
