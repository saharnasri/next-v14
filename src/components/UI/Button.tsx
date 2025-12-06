import React from "react";
// interface IBtn extends React.ButtonHTMLAttributes<HTMLButtonElement> {}
function Button({
  children,
  className,
}: Readonly<React.ButtonHTMLAttributes<HTMLButtonElement>>) {
  return (
    <button className={`bg-green-500 rounded-md min-w-20 min-h-8 ${className}`}>
      {children}
    </button>
  );
}

export default Button;
