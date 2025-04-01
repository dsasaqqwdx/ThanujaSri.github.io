// Firebase Configuration
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
const auth = firebase.auth();

// Tab Switching
function switchTab(tab) {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.form').forEach(f => f.classList.remove('active'));

    document.querySelector(`[onclick="switchTab('${tab}')"]`).classList.add('active');
    document.getElementById(`${tab}Form`).classList.add('active');
}

// Login Event
document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    auth.signInWithEmailAndPassword(email, password)
        .then(() => {
            alert("Login successful!");
            window.location.href = "index.html";
        })
        .catch(error => alert(error.message));
});

// Signup Event
document.getElementById("signupForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("signupName").value;
    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    auth.createUserWithEmailAndPassword(email, password)
        .then(() => {
            alert("Signup successful!");
            window.location.href = "index.html";
        })
        .catch(error => alert(error.message));
});
