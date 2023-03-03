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
          src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1677733200&x-signature=jn93rFpaqHcMYTYZ2CEqeaIa4OE%3D"
          // src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/cba7b4acc3c922ada104e90cfdab6b40~c5_100x100.jpeg?x-expires=1677121200&x-signature=7Fs3dB0z3Uc6VHOYOVOVFSLiQCI%3D"
          alt=""
        />
        <Button className={cx("follow-btn")} primary>
          Follow
        </Button>
      </div>

      <div className={cx("body")}>
        <div className={cx("nick-name")}>
          <span>theanh28entertainment</span>
          <FontAwesomeIcon className={cx("check")} icon={faCheckCircle} />
        </div>
        <p className={cx("name")}>Theanh28 Entertainment</p>
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
