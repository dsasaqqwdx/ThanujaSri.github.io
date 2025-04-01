// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDAdKf9i10F28iCywsxoITpowjxViOuy68",
    authDomain: "kuppam-8e1d6.firebaseapp.com",
    projectId: "kuppam-8e1d6",
    storageBucket: "kuppam-8e1d6.appspot.com",
    messagingSenderId: "876968969852",
    appId: "1:876968969852:web:7ae3db1c542a45c5606bf9",
    measurementId: "G-918T7M1M59"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  
  // Handle Form Submission
  document.addEventListener("DOMContentLoaded", function () {
      const contactForm = document.getElementById("contactForm");
  
      contactForm.addEventListener("submit", async function (e) {
          e.preventDefault();
  
          // Get form values
          const name = document.getElementById("name").value;
          const email = document.getElementById("email").value;
          const subject = document.getElementById("subject").value;
          const message = document.getElementById("message").value;
  
          try {
              await db.collection("messages").add({
                  name: name,
                  email: email,
                  subject: subject,
                  message: message,
                  timestamp: firebase.firestore.FieldValue.serverTimestamp(),
              });
  
              alert("Message sent successfully!");
              contactForm.reset(); // Reset the form
  
          } catch (error) {
              console.error("Error sending message:", error);
              alert("Error sending message. Please try again.");
          }
      });
  });
  