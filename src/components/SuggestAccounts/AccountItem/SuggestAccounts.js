import PropTypes from "prop-types";
import classNames from "classnames/bind";
import styles from "./SuggestAccounts.module.scss";
import AccountItem from "./AccountItem";
import { useEffect, useState } from "react";

const cx = classNames.bind(styles);

function SuggestAccounts({ label }) {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    fetch("https://bahuy156.github.io/db-json/db.json")
      .then((res) => res.json())
      .then((data) => {
        setDatas(data.accountSuggest);
      });
  }, []);

  return (
    <div className={cx("wrapper")}>
      <h4 className={cx("title")}>{label}</h4>

      {datas.map((data) => {
        return <AccountItem key={data.id} data={data} />;
      })}

      <button className={cx("more-btn")}>
        <p className={cx("see-more")}>Xem tất cả</p>
      </button>
    </div>
  );
}

SuggestAccounts.propTypes = {
  label: PropTypes.string.isRequired,
};

export default SuggestAccounts;
