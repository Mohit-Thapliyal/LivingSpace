import React from "react";

const Button = ({ children, filled, className, onClick = () => {} }) => {
  return (
    <button
      onClick={onClick}
      className={`text-sm font-semibold rounded-md ${className} ${
        filled
          ? "bg-violet-600 text-white hover:bg-violet-700"
          : "border-2 text-violet-600 hover:bg-violet-100 border-violet-200"
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
