import className from "classnames/bind";
import styles from "./Following.module.scss";

const cx = className.bind(styles);

function Following() {
  return (
    <div className={cx("wrapper")}>
      <h2>Following page</h2>
    </div>
  );
}

export default Following;
