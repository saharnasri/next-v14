import React from "react";

function Card({
  children,
  cls = "",
}: Readonly<{ children: React.ReactNode; cls: string }>) {
  return (
    <div className={`bg-yellow-500 rounded-md p-4 ${cls}`}>{children}</div>
  );
}

export default Card;
