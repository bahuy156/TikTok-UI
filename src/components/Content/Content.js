import classNames from "classnames/bind";
import styles from "./Content.module.scss";

import Video from "~/components/Video";
import { useEffect, useState } from "react";

const cx = classNames.bind(styles);

function Content() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/video")
      .then((res) => res.json())
      .then((listVideo) => {
        setVideos(listVideo);
      });
  }, []);

  return (
    <div className={cx("wrapper")}>
      {videos.map((video) => {
        return <Video key={video.id} data={video} />;
      })}
    </div>
  );
}

export default Content;
