import className from "classnames/bind";
import styles from "./Live.module.scss";

const cx = className.bind(styles);

function Live() {
  return (
    <div className={cx("wrapper")}>
      <h2>Live page</h2>
    </div>
  );
}

export default Live;
