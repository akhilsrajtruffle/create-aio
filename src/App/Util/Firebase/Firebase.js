import firebase from "firebase";
import {config} from './config'
import "firebase/analytics";
import "firebase/auth";
import "firebase/database";
import "firebase/firestore";
import "firebase/messaging/";
import "firebase/storage";

export default class Firebase {
  constructor() {
    try {
      if (!firebase.apps.length) {
        firebase.initializeApp(config);
      } else {
        firebase.app();
      }
      this.auth = firebase.auth();
      this.ref = firebase.firestore();
      this.ana = firebase.analytics();
      console.log("Firebase Started");
    } catch (error) {
      console.log(error);
    }
  }
  isSignedIn = setIsSignedIn => {
    var user = this.auth.onAuthStateChanged(user => user);
    if (user) {
      setIsSignedIn(true);
      return true;
    } else {
      setIsSignedIn(false);
      return false;
    }
  };
  doCreateUserWithEmailAndPassword = (email, password) => {
    this.auth.createUserWithEmailAndPassword(email, password);
  };
  signIn = () => {
    this.auth.signInWithPopup();
  };

  doSignInWithEmailAndPassword = (email, password) => {
    this.auth.signInWithEmailAndPassword(email, password);
  };
  doSignOut = () => {
    this.auth.signOut();
  };
  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
  doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);
}
