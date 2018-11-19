const functions = require('firebase-functions');


// ## to deploy a function only
// * firebase deploy --only functions
// ## output:
// * +  Deploy complete!
// * to test cloud function go to https://us-central1-react-redux-firebase-6fe44.cloudfunctions.net/helloWorld
// * also check the functions tab in firebase console

exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello w00t!");
});
