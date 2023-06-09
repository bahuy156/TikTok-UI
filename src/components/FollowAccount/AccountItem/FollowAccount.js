import classNames from "classnames/bind";
import styles from "./FollowAccount.module.scss";
import AccountItem from "./AccountItem";
import { useEffect, useState } from "react";

const cx = classNames.bind(styles);

function FollowAccount({ label }) {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    fetch("https://bahuy156.github.io/db-json/db.json")
      .then((res) => res.json())
      .then((data) => {
        setDatas(data.accountFollow);
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

export default FollowAccount;
