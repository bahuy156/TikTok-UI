import className from "classnames/bind";
import styles from "./Upload.module.scss";

const cx = className.bind(styles);

function Upload() {
  return (
    <div className={cx("wrapper")}>
      <h2>Upload page</h2>
    </div>
  );
}

export default Upload;
