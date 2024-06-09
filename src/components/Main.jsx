import PropTypes from "prop-types";

const Main = ({ nasData }) => {
  return (
    <div className="imgContainer">
      <img
        src={nasData?.hdurl}
        alt={nasData?.title || "dataImg"}
        className="bgImage"
      />
    </div>
  );
};

Main.propTypes = {
  nasData: PropTypes.shape({
    hdurl: PropTypes.string,
    title: PropTypes.string,
  }),
};

Main.defaultProps = {
  nasData: {
    hdurl: "",
    title: "No title available",
  },
};

export default Main;
