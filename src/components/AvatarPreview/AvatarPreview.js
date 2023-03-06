import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
// import { useEffect, useState } from "react";
import Button from "../Button";
import Image from "../Image";
import styles from "./AvatarPreview.module.scss";

const cx = classNames.bind(styles);

function AvatarPreview() {
  // const [datas, setDatas] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:3001/avatarPreview")
  //     .then((res) => res.json())
  //     .then((info) => {
  //       setDatas(info);
  //     });
  // }, []);

  return (
    <div className={cx("wrapper")}>
      <div className={cx("header")}>
        <Image
          className={cx("avatar")}
          src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/29e13f3454228f6825e79ecea2314137~c5_100x100.jpeg?x-expires=1678179600&x-signature=evtfgw9mgWVvprgRB1utrd1aIgc%3D"
          alt=""
        />
        <Button className={cx("btn-follow")} outline small>
          Follow
        </Button>
      </div>

      <div className={cx("body")}>
        <span className={cx("nick-name")}>nhatwuyn.02</span>
        <FontAwesomeIcon className={cx("check")} icon={faCheckCircle} />
        <p className={cx("name")}>Lê Thị Nhật Quyên</p>

        <p className={cx("interact")}>
          <span className={cx("follow")}>155.2k</span>
          <span className={cx("title")}>Follower</span>
          <span className={cx("follow")}>3.9M</span>
          <span className={cx("title")}>Thích</span>
        </p>

        <p className={cx("desc")}>Follow for more thanks</p>
      </div>
    </div>
  );
}

export default AvatarPreview;
