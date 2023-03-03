import classNames from "classnames/bind";
import { useRef, useState } from "react";
import Tippy from "@tippyjs/react/headless";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComment,
  faHeart,
  faMusic,
  faShare,
} from "@fortawesome/free-solid-svg-icons";

import AvatarPreview from "~/components/AvatarPreview";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import Image from "~/components/Image";
import Button from "~/components/Button";
import MenuShare from "~/components/MenuShare";
import video1 from "~/assets/Video/video_1.mp4";
import styles from "./Video.module.scss";

const cx = classNames.bind(styles);

function Video() {
  const [playing, setPlaying] = useState(true);
  const videoRef = useRef();

  const handleVideo = () => {
    if (playing) {
      videoRef.current.play();
      setPlaying(false);
    } else {
      videoRef.current.pause();
      setPlaying(true);
    }
  };

  const avatarPreview = (props) => (
    <div tabIndex="-1" {...props}>
      <PopperWrapper>
        <AvatarPreview />
      </PopperWrapper>
    </div>
  );

  const munuShare = (props) => (
    <div tabIndex="-1" {...props}>
      <PopperWrapper>
        <MenuShare />
      </PopperWrapper>
    </div>
  );

  return (
    <div className={cx("wrapper")}>
      <Tippy
        interactive
        placement="bottom"
        delay={[800, 400]}
        offset={[120, 10]}
        render={avatarPreview}
      >
        <Image
          className={cx("avatar")}
          src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/5b5b18788ca6f3d618541f8f5b3fcd51~c5_100x100.jpeg?x-expires=1677117600&x-signature=rBSxvdnF78zTyGi7ELqRWHiZqPs%3D"
          alt="avt"
        />
      </Tippy>

      <div className={cx("content")}>
        <div className={cx("header")}>
          <Tippy
            interactive
            delay={[800, 400]}
            offset={[-60, 38]}
            render={avatarPreview}
          >
            <div className={cx("name")}>
              <h3 className={cx("nick-name")}>nhatwuyn.02</h3>
              <h4 className={cx("full-name")}>Nhật Quyên</h4>
            </div>
          </Tippy>
          <Button className={cx("follow-btn")} outline small>
            Follow
          </Button>
          <span className={cx("title")}>@Nhatquyenne</span>
          <div className={cx("link-music")}>
            <FontAwesomeIcon className={cx("icon-music")} icon={faMusic} />
            <span className={cx("name-music")}>
              Nhạc nền - My Heart Will Go On
            </span>
          </div>
        </div>

        <div className={cx("main")}>
          <video
            ref={videoRef}
            className={cx("video")}
            src={video1}
            loop
            onClick={handleVideo}
          />
          <div className={cx("interact")}>
            <div className={cx("interact-child")}>
              <p className={cx("wrapper-icon")}>
                <FontAwesomeIcon
                  className={cx("icon-interact")}
                  icon={faHeart}
                />
              </p>
              <strong className={cx("text")}>222.5k</strong>
            </div>
            <div className={cx("interact-child")}>
              <p className={cx("wrapper-icon")}>
                <FontAwesomeIcon
                  className={cx("icon-interact")}
                  icon={faComment}
                />
              </p>
              <strong className={cx("text")}>3220</strong>
            </div>
            <Tippy
              interactive
              offset={[89, 5]}
              delay={[0, 400]}
              render={munuShare}
            >
              <div className={cx("interact-child")}>
                <p className={cx("wrapper-icon")}>
                  <FontAwesomeIcon
                    className={cx("icon-interact")}
                    icon={faShare}
                  />
                </p>
                <strong className={cx("text")}>1506</strong>
              </div>
            </Tippy>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Video;
