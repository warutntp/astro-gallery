import PropTypes from "prop-types";

const SideBar = ({ handleToggleModal, nasData }) => {
  return (
    <div className="sidebar">
      <div onClick={handleToggleModal} className="bgOverlay"></div>
      <div className="sidebarContainer">
        <h2>{nasData?.title || "No title available"}</h2>
        <div className="descriptionContainer">
          <p className="descriptionTitle">Description</p>
          <p>{nasData?.explanation || "No description available"}</p>
        </div>
        <button onClick={handleToggleModal}>
          <i className="fa-solid fa-right-from-bracket"></i>
        </button>
      </div>
    </div>
  );
};

SideBar.propTypes = {
  handleToggleModal: PropTypes.func.isRequired,
  nasData: PropTypes.shape({
    title: PropTypes.string,
    explanation: PropTypes.string,
  }),
};

SideBar.defaultProps = {
  nasData: {
    title: "No title available",
    explanation: "No description available",
  },
};

export default SideBar;
