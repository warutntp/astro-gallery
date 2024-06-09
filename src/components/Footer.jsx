import PropTypes from "prop-types";

const Footer = ({ handleToggleModal, nasData }) => {
  return (
    <footer>
      <div className="bgGradient"></div>
      <div>
        <h1>Astronomy Picture of the Day</h1>
        <h2>{nasData?.title || "No title available"}</h2>
      </div>
      <button onClick={handleToggleModal}>
        <i className="fa-solid fa-info"></i>
      </button>
    </footer>
  );
};

Footer.propTypes = {
  handleToggleModal: PropTypes.func.isRequired,
  nasData: PropTypes.shape({
    title: PropTypes.string,
  }),
};

Footer.defaultProps = {
  nasData: {
    title: "No title available",
  },
};

export default Footer;
