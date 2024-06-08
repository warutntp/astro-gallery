import React from "react";

const Footer = (props) => {
  const { handleToggleModal, nasData } = props;
  return (
    <footer>
      <div className="bgGradient"></div>
      <div>
        <h1>Astronomy Picture of the Day</h1>
        <h2>{nasData?.title}</h2>
      </div>
      <button onClick={() => handleToggleModal()}>
        <i className="fa-solid fa-info"></i>
      </button>
    </footer>
  );
};

export default Footer;
