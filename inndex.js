// Import the functions you need from the SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import {
	getFirestore,
	collection,
	addDoc
} from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyDKoE2OAjPWAhukvSMftgi-sycRwXI6WtM",
	authDomain: "hackathon-35798.firebaseapp.com",
	projectId: "hackathon-35798",
	storageBucket: "hackathon-35798.firebasestorage.app",
	messagingSenderId: "56491087163",
	appId: "1:56491087163:web:aa6d85ef79510e45bb931e",
	measurementId: "G-L1JYGKP1CN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// Function to handle form submission
async function handleSubmit(event) {
	event.preventDefault(); // Prevent default form submission
	const name = document.getElementById("name").value;
	const email = document.getElementById("email").value;
	const message = document.getElementById("message").value;
	const contactType = document.querySelector(
		'input[name="contact"]:checked'
	).value;

	try {
		// Add a new document to the "contacts" collection
		await addDoc(collection(db, "contacts"), {
			name,
			email,
			message,
			contactType,
			createdAt: new Date().toISOString()
		});
		alert("Data saved successfully!");
		document.getElementById("contactForm").reset(); // Reset form
	} catch (error) {
		console.error("Error saving data: ", error);
		alert("Failed to save data.");
	}
}

// Attach event listener to the form
document.getElementById("contactForm").addEventListener("submit", handleSubmit);