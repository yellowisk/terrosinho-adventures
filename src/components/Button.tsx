import React from "react";

type ButtonProps = {
  onClick: () => void;
  text: string;
  variant?: "primary" | "secondary" | "tertiary";
};

const Button: React.FC<ButtonProps> = ({ onClick, text, variant }) => {
  const variantStyle = {
    ["primary"]:
      "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-2 rounded",
    ["secondary"]:
      "bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 mr-2 rounded",
    ["tertiary"]:
      "bg-yellow-500 hover:bg-yellow-700 texxt-white font-bold py-2 px-4 rounded",
    ["default"]: "",
  };

  return (
    <button className={variantStyle[variant ?? "default"]} onClick={onClick}>
      {text}
    </button>
  );
};
export default Button;