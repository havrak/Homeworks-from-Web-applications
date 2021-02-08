import React from "react";

function Footer() {
  return (

    <footer>
      <p>
        &copy; {new Date().getFullYear()}{" "}
        <a href="mailto:krystof.havranek@student.gyarab.cz">Havránek Kryštof</a>
      </p>
    </footer>
  );
}

export default Footer;
