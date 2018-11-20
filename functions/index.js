const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase)

// ## to deploy a function only
// * firebase deploy --only functions
// ## output:
// * +  Deploy complete!
// * to test cloud function go to https://us-central1-react-redux-firebase-6fe44.cloudfunctions.net/helloWorld
// * also check the functions tab in firebase console

exports.helloWorld = functions.https
  .onRequest((request, response) => {
    response.send("Hello w00t!");
  });

const createNotificaation = notification => {
  return admin.firestore().collection('notifications')
    .add(notification)
    .then(doc => console.log('notification added', doc))
}

exports.projectCreated = functions.firestore.document('projects/{projectId}')
  .onCreate(doc => {
    const project = doc.data();
    const notifiacation = {
      content: 'Added a new project',
      user: `${project.authorFirstName} ${project.authorLastName}`,
      time: admin.firestore.FieldValue.serverTimestamp()
    }

    return createNotificaation(notifiacation);
  })