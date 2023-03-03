import classNames from "classnames/bind";
import styles from "./Content.module.scss";

import Video from "~/components/Video";

const cx = classNames.bind(styles);

function Content() {
  return (
    <div className={cx("wrapper")}>
      <Video />
    </div>
  );
}

export default Content;
