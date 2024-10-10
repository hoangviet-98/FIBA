// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';

const firebaseConfig = {
    apiKey: "AIzaSyCVG9aPY9VOUA0cVViZRXVNrfwItStwUMs",
    authDomain: "notify-c6dec.firebaseapp.com",
    projectId: "notify-c6dec",
    storageBucket: "notify-c6dec.appspot.com",
    messagingSenderId: "105945826988",
    appId: "1:105945826988:web:7e559237023c52e99d4109"
};

const firebaseApp = initializeApp(firebaseConfig);
const messaging = getMessaging(firebaseApp);

// Hàm yêu cầu token FCM
export const requestForToken = async (setTokenFound) => {
    return getToken(messaging, { vapidKey: 'BOMh9hCfGD3F-Tl5gM8-02mrvpN8s0uLatcF3cvcgWZVjkvAlG7kKdxese7htGtc6Nrs3S_d1p2gzezS2c8WJdI' })
      .then((currentToken) => {
        if (currentToken) {
          console.log('Token của client:', currentToken);
          setTokenFound(true); // Token đã được tìm thấy
          // Lưu token vào server nếu cần thiết
        } else {
          console.log('Không có token khả dụng. Vui lòng yêu cầu quyền nhận thông báo.');
          setTokenFound(false);
        }
      })
      .catch((err) => {
        console.error('Lỗi khi lấy token:', err);
        setTokenFound(false);
      });
  };

// Lắng nghe thông báo khi ứng dụng đang mở
export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
  });
