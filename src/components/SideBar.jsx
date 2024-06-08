import React from "react";

const SideBar = (props) => {
  const { handleToggleModal, nasData } = props;
  return (
    <div className="sidebar">
      <div onClick={() => handleToggleModal()} className="bgOverlay"></div>
      <div className="sidebarContainer">
        <h2>{nasData?.title}</h2>
        <div className="descriptionContainer">
          <p className="descriptionTitle">Description</p>

          <p>{nasData?.explanation}</p>
        </div>
        <button onClick={() => handleToggleModal()}>
          <i className="fa-solid fa-right-from-bracket"></i>
        </button>
      </div>
    </div>
  );
};

export default SideBar;
