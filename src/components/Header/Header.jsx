import React from "react";

import "./Header.css";

const Header = ({title, btnTxt}) => {
  return (
    <div className="header">
      <div
        style={{ fontFamily: "monospace", fontSize: "2em", fontWeight: "bold" }}
        className={'item1'}
      >
        {title}
      </div>
      <button className="addUser">{btnTxt}</button>
    </div>
  );
};

export default Header;
