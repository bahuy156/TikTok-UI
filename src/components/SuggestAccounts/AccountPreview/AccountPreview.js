import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames/bind";
import styles from "./AccountPreview.module.scss";

import Button from "~/components/Button";

const cx = classNames.bind(styles);

function AccountPreview({ data }) {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("header")}>
        <img className={cx("avatar")} src={data.avatar} alt="" />
        <Button className={cx("follow-btn")} primary>
          Follow
        </Button>
      </div>

      <div className={cx("body")}>
        <div className={cx("nick-name")}>
          <span>{data.nickName}</span>
          {data.check && (
            <FontAwesomeIcon className={cx("check")} icon={faCheckCircle} />
          )}
        </div>
        <p className={cx("name")}>{data.name}</p>
      </div>

      <div className={cx("analysis")}>
        <strong className={cx("value")}>{data.follow}</strong>
        <span className={cx("label")}>Follower</span>
        <strong className={cx("value")}>{data.like}</strong>
        <span className={cx("label")}>Likes</span>
      </div>
    </div>
  );
}

export default AccountPreview;
