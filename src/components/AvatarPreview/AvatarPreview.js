import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
// import { useEffect, useState } from "react";
import Button from "../Button";
import Image from "../Image";
import styles from "./AvatarPreview.module.scss";

const cx = classNames.bind(styles);

function AvatarPreview({ data }) {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("header")}>
        <Image className={cx("avatar")} src={data.avatar} alt="" />
        <Button className={cx("btn-follow")} outline small>
          Follow
        </Button>
      </div>

      <div className={cx("body")}>
        <span className={cx("nick-name")}>{data.nickName}</span>
        {data.tick && (
          <FontAwesomeIcon className={cx("check")} icon={faCheckCircle} />
        )}
        <p className={cx("name")}>{data.namePreview}</p>

        <p className={cx("interact")}>
          <span className={cx("follow")}>{data.followPreview}</span>
          <span className={cx("title")}>Follower</span>
          <span className={cx("follow")}>{data.likePreview}</span>
          <span className={cx("title")}>Thích</span>
        </p>

        <p className={cx("desc")}>Follow for more thanks</p>
      </div>
    </div>
  );
}

export default AvatarPreview;
