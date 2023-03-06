import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames/bind";
import styles from "./AccountPreview.module.scss";

import Button from "~/components/Button";

const cx = classNames.bind(styles);

function AccountPreview() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("header")}>
        <img
          className={cx("avatar")}
          src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/29e13f3454228f6825e79ecea2314137~c5_100x100.jpeg?x-expires=1678179600&x-signature=evtfgw9mgWVvprgRB1utrd1aIgc%3D"
          alt=""
        />
        <Button className={cx("follow-btn")} primary>
          Follow
        </Button>
      </div>

      <div className={cx("body")}>
        <div className={cx("nick-name")}>
          <span>nhatwuyn.02</span>
          <FontAwesomeIcon className={cx("check")} icon={faCheckCircle} />
        </div>
        <p className={cx("name")}>Lê Thị Nhật Quyên</p>
      </div>

      <div className={cx("analysis")}>
        <strong className={cx("value")}>8.2M</strong>
        <span className={cx("label")}>Follower</span>
        <strong className={cx("value")}>8.2M</strong>
        <span className={cx("label")}>Likes</span>
      </div>
    </div>
  );
}

export default AccountPreview;
