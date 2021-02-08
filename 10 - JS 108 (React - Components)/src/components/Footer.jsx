import React from "react";

function Footer() {
  return (
    <footer>
      <p>
        &copy; {new Date().getFullYear()}{" "}
        <a href="mailto:vaclav.strnad@gyarab.cz">Václav Strnad</a>
      </p>
    </footer>
  );
}

export default Footer;
