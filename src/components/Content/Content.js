import classNames from "classnames/bind";
import styles from "./Content.module.scss";

import Image from "../Image";
import Button from "../Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function Content() {
  return (
    <div className={cx("wrapper")}>
      <Image
        className={cx("avatar")}
        src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/5aed4249cfdcc46aa8dc90658374c6c1~c5_100x100.jpeg?x-expires=1677826800&x-signature=LFyyF15ZI50mlUrtsvWP2TBXuFE%3D"
        alt="avt"
      />

      <div className={cx("content")}>
        <div className={cx("header")}>
          <div className={cx("name")}>
            <h3 className={cx("nick-name")}>haiichieu</h3>
            <h4 className={cx("full-name")}>Đặng Nam Hải Triều</h4>
          </div>
          <Button outline>Follow</Button>
          <span className={cx("title")}>Mai có tick xanh</span>
          <div className={cx("link-music")}>
            <FontAwesomeIcon icon={faMusic} />
            <span>Nhạc nền - My Heart Will Go On</span>
          </div>
        </div>

        <div className={cx("main")}>
          <video src="video_1.mp4" type="video/mp4" controls></video>
        </div>
      </div>
    </div>
  );
}

export default Content;
