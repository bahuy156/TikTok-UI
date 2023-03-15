import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import { ScrollTopIcon } from "~/components/Icons";
import styles from "./ScrollToTop.module.scss";

const cx = classNames.bind(styles);

function ScrollToTop() {
  const [showIconUp, setShowIconUp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShowIconUp(true);
      } else {
        setShowIconUp(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={cx("scroll-top")}>
      <button
        className={cx("btn-scroll-top", {
          "btn-scroll-top-show": showIconUp,
        })}
        onClick={handleScrollToTop}
      >
        <ScrollTopIcon className={cx("icon-scroll-top")} />
      </button>
    </div>
  );
}

export default ScrollToTop;
