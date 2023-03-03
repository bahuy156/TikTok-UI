import PropTypes from "prop-types";

function MenuBar({ children }) {
  return <nav style={{ marginBottom: 8 }}>{children}</nav>;
}

MenuBar.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MenuBar;
