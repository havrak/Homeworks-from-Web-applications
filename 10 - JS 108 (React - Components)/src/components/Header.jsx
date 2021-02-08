import React from "react";
import welcomeMessage from "../lib/WelcomeMessage";

function Header() {
  return <header>{welcomeMessage()}</header>;
}

export default Header;
