import className from "classnames/bind";
import styles from "./Search.module.scss";

const cx = className.bind(styles);

function Search() {
  return (
    <div className={cx("wrapper")}>
      <h2>Search page</h2>
    </div>
  );
}

export default Search;
