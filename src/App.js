// src/App.js
import React, { useEffect, useState } from 'react';
import { requestForToken, onMessageListener } from './firebase';

function App() {
  const [isTokenFound, setTokenFound] = useState(false);

  useEffect(() => {
    // Yêu cầu quyền và lấy token từ Firebase
    requestForToken(setTokenFound);
  }, []);

  useEffect(() => {
    // Lắng nghe thông báo khi ứng dụng đang hoạt động
    onMessageListener()
      .then(payload => {
        console.log('Thông báo đã nhận được: ', payload);
        // Xử lý thông báo hoặc hiển thị trên UI
      })
      .catch(err => console.log('Lỗi khi nhận thông báo: ', err));
  }, []);

  return (
    <div className="App">
      <h1>React Firebase Cloud Messaging</h1>
      {isTokenFound ? (
        <p>Đã tìm thấy token, sẵn sàng nhận thông báo.</p>
      ) : (
        <p>Chưa tìm thấy token.</p>
      )}
    </div>
  );
}

export default App;
