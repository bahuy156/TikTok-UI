import classNames from "classnames/bind";
import {
  EmbedIcon,
  MessIcon,
  FacebookIcon,
  CallIcon,
  LinkIcon,
  DownIcon,
} from "~/components/Icons";
import styles from "./MenuShare.module.scss";

const cx = classNames.bind(styles);

function MenuShare() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("menu-child")}>
        <EmbedIcon className={cx("icon")} />
        <span className={cx("text")}>Nhúng</span>
      </div>
      <div className={cx("menu-child")}>
        <MessIcon className={cx("icon")} />
        <span className={cx("text")}>Gửi đến bạn bè</span>
      </div>
      <div className={cx("menu-child")}>
        <FacebookIcon className={cx("icon")} />
        <span className={cx("text")}>Share to Facebook</span>
      </div>
      <div className={cx("menu-child")}>
        <CallIcon className={cx("icon")} />
        <span className={cx("text")}>Share to WhatsApp</span>
      </div>
      <div className={cx("menu-child")}>
        <LinkIcon className={cx("icon")} />
        <span className={cx("text")}>Sao chép liên kết</span>
      </div>
      <div className={cx("down")}>
        <DownIcon className={cx("icon-down")} />
      </div>
    </div>
  );
}

export default MenuShare;
