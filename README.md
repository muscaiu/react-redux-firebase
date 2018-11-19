## created with create-react-app

## fb rules:
```
service cloud.firestore {
	match /databases/{database}/documents {
		match /projects/{project}{
			allow read, write: if request.auth.uid !=  null
		}
		match /users/{userId}{
			allow create
			allow read: if request.auth.uid !=  null
			allow write: if request.auth.uid == userId
		}
	}
}
```

## for firebase cloud functions
* npm i -g firebase-tools
* firebase login (will show a browser window for login)
* firebase init
	- select functions anf hosting
	- select the db project
	- for public directory type 'dist'
* firebase deploy

## to deploy a function only
* firebase deploy --only functions

## output:
* +  Deploy complete!
* to test cloud function go to https://us-central1-react-redux-firebase-6fe44.cloudfunctions.net/helloWorld
* also check the functions tab in firebase console