import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithRedirect, getRedirectResult } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDW8dztrdDOgDGzVfYf-V86oJwQ_hqPKcE",
  authDomain: "storage-video-26982.firebaseapp.com",
  projectId: "storage-video-26982",
  storageBucket: "storage-video-26982.appspot.com",
  messagingSenderId: "745302805245",
  appId: "1:745302805245:web:e01bf7c49c3852d8b84c94"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
auth.languageCode = 'en';
const provider = new GoogleAuthProvider();

const googleLogin = document.querySelectorAll('#google-service');
for (let i = 0; i < googleLogin.length; i++) {
  googleLogin[i].addEventListener("click", function() {
    signInWithRedirect(auth, provider);
  });
}

// Handle the redirect result
getRedirectResult(auth)
  .then((result) => {
    if (result) {
      const user = result.user;
      console.log(user);
      //updateUserProfile(user)
      window.location.href = 'Trends.html';
    }
  })
  .catch((error) => {
    console.error(error.message);
  });
