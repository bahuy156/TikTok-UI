import className from "classnames/bind";
import styles from "./Home.module.scss";

import Content from "~/components/Content";

const cx = className.bind(styles);

function Home() {
  return (
    <div className={cx("wrapper")}>
      <Content />
    </div>
  );
}

export default Home;
