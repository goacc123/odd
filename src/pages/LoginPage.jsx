import background from "../assets/background.png";
import logo from "../assets/logo.png";
import metaLogo from "../assets/metalogo.png";
import FormComponent from "../components/FormComponent";
import ButtonComponent from "../components/ButtonComponent";

function LoginPage() {
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundPosition: "30% 0%",
        backgroundSize: "cover",
        fontFamily: "Roboto, sans-serif",
        display: "flex",
        position: "relative",
        height: "100%",
      }}
    >
      <div
        style={{
          marginLeft: "20px",
          marginRight: "20px",
          alignItems: "center",
          flex: "1",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            alignItems: "center",
            position: "relative",
            flex: 1,
          }}
        >
          <p
            style={{
              marginTop: "20px",
              fontSize: "13px",
              fontWeight: "500",
              color: "#666",
            }}
          >
            English (US)
          </p>

          <img
            src={logo}
            alt="logo"
            style={{
              width: "60px",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />
        </div>

        <FormComponent />
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            flex: 1,
            position: "relative",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              position: "absolute",
              width: "100%",
              bottom: "24px",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            <ButtonComponent
              value="Create New Account"
              style={{
                backgroundColor: "transparent",
                color: "rgb(28,43,51)",
                fontSize: 15,
                fontWeight: 400,
                border: "1px solid #ccc",
                padding: "10px 16px",
              }}
              onClick={() => {
                window.location.href = "https://m.facebook.com/reg/";
              }}
            />
            <img
              src={metaLogo}
              alt="metaLogo"
              style={{
                width: "60px",
                alignSelf: "center",
                marginTop: "16px",
              }}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "16px",
                color: "#666",
                fontSize: "12px",
              }}
            >
              <a
                style={{
                  marginRight: "8px",
                  outline: "none",
                  textDecoration: "none",
                  color: "#666",
                }}
                href="https://about.meta.com/"
              >
                About
              </a>
              <a
                style={{
                  marginRight: "8px",
                  outline: "none",
                  textDecoration: "none",
                  color: "#666",
                }}
                href="https://m.facebook.com/help/?ref=pf"
              >
                Help
              </a>
              <p>More</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
