import classNames from "classnames/bind";
import Image from "~/components/Image";
import styles from "./FollowAccount.module.scss";

const cx = classNames.bind(styles);

function AccountItem({ data }) {
  return (
    <div className={cx("account-item")}>
      <Image className={cx("avatar")} src={data.avatar} alt="" />

      <div className={cx("info")}>
        <div className={cx("nick-name")}>
          <span>{data.nickName}</span>
        </div>
        <p className={cx("name")}>{data.name}</p>
      </div>
    </div>
  );
}

export default AccountItem;
