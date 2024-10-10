// // public/firebase-messaging-sw.js
// importScripts('https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js');
// importScripts('https://www.gstatic.com/firebasejs/9.10.0/firebase-messaging.js');


// const firebaseConfig = {
//     apiKey: "AIzaSyCVG9aPY9VOUA0cVViZRXVNrfwItStwUMs",
//     authDomain: "notify-c6dec.firebaseapp.com",
//     projectId: "notify-c6dec",
//     storageBucket: "notify-c6dec.appspot.com",
//     messagingSenderId: "105945826988",
//     appId: "1:105945826988:web:7e559237023c52e99d4109"
// };

// firebase.initializeApp(firebaseConfig);

// const messaging = firebase.messaging();

// messaging.onBackgroundMessage((payload) => {
//   console.log('Nhận thông báo khi ứng dụng ở chế độ nền: ', payload);
//   const notificationTitle = payload.notification.title;
//   const notificationOptions = {
//     body: payload.notification.body,
//     icon: '/firebase-logo.png' // Bạn có thể thay bằng logo của ứng dụng
//   };

//   self.registration.showNotification(notificationTitle, notificationOptions);
// });

// v8/namespaced style service worker
importScripts('https://www.gstatic.com/firebasejs/10.1.0/firebase-app-compat.js')
importScripts('https://www.gstatic.com/firebasejs/10.1.0/firebase-messaging-compat.js')

const firebase_config = {
    apiKey: "AIzaSyCVG9aPY9VOUA0cVViZRXVNrfwItStwUMs",
    authDomain: "notify-c6dec.firebaseapp.com",
    projectId: "notify-c6dec",
    storageBucket: "notify-c6dec.appspot.com",
    messagingSenderId: "105945826988",
    appId: "1:105945826988:web:7e559237023c52e99d4109"
}
firebase.initializeApp(firebase_config)
firebase.messaging()
