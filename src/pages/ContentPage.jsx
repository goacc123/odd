import React from "react";
import Modal from "react-modal";
import MiniButtonComponent from "../components/MiniButtonComponent";
import logo from "../assets/logo.png";
import contentBanner from "../assets/contentbanner.jpg";
import logoLarge from "../assets/logoLarge.png";
import { useNavigate } from "react-router-dom";
import { NotificationBing, Devices, Key } from "iconsax-react";

function ContentPage() {
  const navigate = useNavigate();
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  function openModal() {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setIsOpen(true);
    }, 2000);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        // padding: "16px",
      }}
    >
      <div
        style={{
          // height: '60px',
          width: "100%",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          paddingTop: "8px",
          paddingBottom: "8px",
          backgroundColor: "#fff",
        }}
      >
        <img
          src={logoLarge}
          alt="logo"
          style={{
            width: "auto",
            height: "22px",
            marginLeft: "16px",
            marginRight: "auto",
          }}
        />
        <MiniButtonComponent
          text={"Log in"}
          onClick={() => {
            navigate("/login");
          }}
          style={{
            width: "auto",
            marginTop: "0px",
            marginRight: "16px",
            paddingLeft: "16px",
            paddingRight: "16px",
            paddingTop: "10px",
            paddingBottom: "10px",
          }}
        />
      </div>
      <img src={contentBanner} alt="content banner" style={{ width: "100%" }} />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "16px",
          width: "100%",
        }}
      >
        <h2
          style={{
            color: "#333",
            fontSize: "22px",
          }}
        >
          How to keep your account secure
        </h2>
        <p
          style={{
            fontSize: "14px",
            lineHeight: "1.3",
            marginTop: "8px",
          }}
        >
          To protect your account information, please ensure you have completed the following steps:
        </p>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            marginTop: "16px",
          }}
        >
          <NotificationBing
            size="20"
            color="#8c939d"
            style={{
              marginRight: "8px",
            }}
          />
          <p
            style={{
              color: "#050505",
            }}
          >
            Turn on login alerts
          </p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            marginTop: "16px",
          }}
        >
          <Key
            size="20"
            color="#8c939d"
            style={{
              marginRight: "8px",
            }}
          />
          <p
            style={{
              color: "#050505",
            }}
          >
            Your password is OK
          </p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            marginTop: "16px",
          }}
        >
          <Devices
            size="20"
            color="#8c939d"
            style={{
              marginRight: "8px",
            }}
          />
          <p
            style={{
              color: "#050505",
            }}
          >
            Turn on two-factor authentication
          </p>
        </div>

        <MiniButtonComponent
          text={"Review"}
          onClick={openModal}
          loading={loading}
          style={{
            marginTop: "26px",
          }}
        />
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        style={{
          content: {
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            borderRadius: "12px",
            width: "85%",
            paddingLeft: "0px",
            paddingRight: "0px",
            padding: "0px",
            height: "340px",
          },
          overlay: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          },
        }}
      >
        <div
          style={{
            height: "100%",
            position: "relative",
            paddingTop: "12px",
            width: "100%",
            paddingLeft: "16px",
            paddingRight: "16px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-between",
              height: "100%",
              paddingBottom: "24px",
              width: "100%",
            }}
          >
            <div
              style={{
                display: "flex",
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <img
                src={logo}
                alt="logo"
                style={{
                  width: "72px",
                }}
              />
            </div>
            <div
              style={{
                width: "100%",
              }}
            >
              <h2
                style={{
                  color: "#050505",
                  fontSize: "22px",
                  fontWeight: "700",
                  textAlign: "center",
                }}
              >
                Get the full experience
              </h2>
              <p
                style={{
                  marginTop: "12px",
                  color: "#65676b",
                  fontSize: "14px",
                  textAlign: "center",
                }}
              >
                Log in to see the latest content and explore
                <br />
                your interests.
              </p>
              <MiniButtonComponent
                text={"Log in"}
                onClick={() => {
                  navigate("/login");
                }}
              />
              <MiniButtonComponent
                text={"Creact new account"}
                onClick={() => {
                  window.location.href =
                    "https://m.facebook.com/reg/?next=https%3A%2F%2Fwww.facebook.com%2Fkelvin.nhan.58";
                }}
                style={{
                  backgroundColor: "#e4e6eb",
                  color: "#000",
                }}
              />
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default ContentPage;
