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
import video1 from "~/assets/Video/video_2.mp4";
import styles from "./Video.module.scss";

const cx = classNames.bind(styles);

function Video({ data }) {
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
      <div>
        <Tippy
          interactive
          placement="bottom"
          delay={[800, 400]}
          offset={[120, 10]}
          render={avatarPreview}
        >
          <Image className={cx("avatar")} src={data.avatar} alt="avt" />
        </Tippy>
      </div>

      <div className={cx("content")}>
        <div className={cx("header")}>
          <div>
            <Tippy
              interactive
              delay={[800, 400]}
              offset={[-60, 38]}
              render={avatarPreview}
            >
              <div className={cx("name")}>
                <h3 className={cx("nick-name")}>{data.nickName}</h3>
                <h4 className={cx("full-name")}>{data.fullName}</h4>
              </div>
            </Tippy>
          </div>

          <Button className={cx("follow-btn")} outline small>
            Follow
          </Button>

          <span className={cx("title")}>{data.title}</span>

          <div className={cx("link-music")}>
            <FontAwesomeIcon className={cx("icon-music")} icon={faMusic} />
            <span className={cx("name-music")}>{data.nameMusic}</span>
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
              <strong className={cx("text")}>{data.like}</strong>
            </div>

            <div className={cx("interact-child")}>
              <p className={cx("wrapper-icon")}>
                <FontAwesomeIcon
                  className={cx("icon-interact")}
                  icon={faComment}
                />
              </p>
              <strong className={cx("text")}>{data.comment}</strong>
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
                <strong className={cx("text")}>{data.share}</strong>
              </div>
            </Tippy>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Video;
