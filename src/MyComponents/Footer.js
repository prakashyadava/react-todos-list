import React from "react";

export default function Footer() {
  let footerStyle = {
    position: "reletive",
    top: "92.6vh",
    width: "100%",
  };
  return (
    <footer className="bg-dark text-light py-3" style={footerStyle}>
      <p className="text-center">Copyright &copy; MyTodosList.com</p>
    </footer>
  );
}
