import classNames from "classnames/bind";

import Button from "../Button";
import Image from "../Image";
import styles from "./AvatarPreview.module.scss";

const cx = classNames.bind(styles);

function AvatarPreview() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("header")}>
        <Image
          className={cx("avatar")}
          src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/5b5b18788ca6f3d618541f8f5b3fcd51~c5_100x100.jpeg?x-expires=1677117600&x-signature=rBSxvdnF78zTyGi7ELqRWHiZqPs%3D"
          alt=""
        />
        <Button className={cx("btn-follow")} outline small>
          Follow
        </Button>
      </div>

      <div className={cx("body")}>
        <p className={cx("nick-name")}>nhatwuyn.02</p>
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
