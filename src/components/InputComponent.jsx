import React from "react";
import "./styles.css";
import { Eye, EyeSlash } from "iconsax-react";

function InputComponent({ type, placeholder, value, onChange , style}) {
  
  const [focus, setFocus] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <div
      style={{
        padding: "10px 16px",
        fontSize: "16px",
        border: "1px solid rgb(203, 210, 217)",
        width: "100%",
        borderRadius: "12px",
        backgroundColor: "#fff",
        position: "relative",
        height: "62px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        ...style
      }}
      onFocus={() => {
        setFocus(true);
        document.querySelector(`.containerInputContainer${type}`).style.border =
          "1px solid rgb(28, 43, 51)";
      }}
        onBlur={() => {
          setFocus(false);
            document.querySelector(`.containerInputContainer${type}`).style.border =
            "1px solid rgb(203, 210, 217)";
        }}
      className= {`containerInputContainer${type}`}
    >
      {type === "password" && (
        showPassword ? (
          <Eye size={20} style={{ position: "absolute", right: "16px" }} 
            onClick={() => setShowPassword(false)}
          />
        ) : (
          <EyeSlash size={20} style={{ position: "absolute", right: "16px" }} 
          onClick={() => setShowPassword(true)} />
        )
      )}
      <p
        style={{
          display: focus || value ? "block" : "none",
          color: "rgb(28, 43, 51)",
          opacity: 0.9,
          fontFamily: "Poppins",
          lineHeight: 1.3,
          fontSize: "12px",
        }}
      >{placeholder}</p>
      <p
      onClick={() => {
        setFocus(true);
        document.querySelector('.inputComponent').focus();
      }}
        style={{
          color: "rgb(70, 90, 105)",
          opacity: 0.9,
          fontFamily: "Poppins",
          lineHeight: 1.3,
          fontSize: "12",
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
          display: focus || value ? "none" : "block",
        }}
      >
        {placeholder}
      </p>
      <input
        style={{
          width: "100%",
          height: "32px",
          border: "none",
          lineHeight: 1.3,
          fontSize: "16px",
          fontWeight: 500,
          color: "#000"
        }}
        className="inputComponent"
        type={type === "password" && showPassword ? "text" : type}
        security={type === "password" && showPassword ? "false" : "true"}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default InputComponent;
