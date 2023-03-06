import PropTypes from "prop-types";
import classNames from "classnames/bind";
import styles from "./MenuBar.module.scss";

const cx = classNames.bind(styles);

function MenuBar({ children }) {
  return (
    <div className={cx("nav-bar")}>
      <nav>{children}</nav>
    </div>
  );
}

MenuBar.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MenuBar;
