import className from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faEllipsisVertical,
  faEarthAsia,
  faCircleQuestion,
  faKeyboard,
  faUser,
  faCoins,
  faGear,
  faVideoCamera,
  faSignOut,
} from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { Link } from "react-router-dom";

import config from "~/config";
import styles from "./Header.module.scss";
import images from "~/assets/images";
import Button from "~/components/Button";
import Menu from "~/components/Popper/Menu";
import { MessageIcon, MailBoxIcon, MoreEffects } from "~/components/Icons";
import Image from "~/components/Image";
import Search from "../Search";

const cx = className.bind(styles);

const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia} />,
    title: "Tiếng Việt",
    children: {
      title: "Ngôn ngữ",
      data: [
        {
          type: "language",
          code: "vi",
          title: "Tiếng Việt",
        },
        {
          type: "language",
          code: "en",
          title: "English",
        },
      ],
    },
  },

  {
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    title: "Phản hồi và trợ giúp",
    to: "/feedback",
  },

  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: "Phím tắt trên bàn phím",
  },
];

const userMenu = [
  {
    icon: <FontAwesomeIcon icon={faUser} />,
    title: "Xem hồ sơ",
    to: "/profile",
  },
  {
    icon: <FontAwesomeIcon icon={faCoins} />,
    title: "Nhận xu",
    to: "/coin",
  },
  {
    icon: <FontAwesomeIcon icon={faVideoCamera} />,
    title: "LIVE Studio",
    to: "/live",
  },
  {
    icon: <FontAwesomeIcon icon={faGear} />,
    title: "Cài đặt",
    to: "/setting",
  },
  ...MENU_ITEMS,
  {
    icon: <FontAwesomeIcon icon={faSignOut} />,
    title: "Đăng xuất",
    to: "/logout",
    separate: true,
  },
];

function Header() {
  const currentUser = true;

  // Handle logic
  const handleChangeMenu = (menuItem) => {
    console.log(menuItem);
  };

  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <Link to={config.routes.home} className={cx("logo")}>
          <img src={images.logo} alt="Tiktok"></img>
        </Link>

        <Search />

        <div className={cx("actions")}>
          {currentUser ? (
            <>
              <Button
                text
                to={config.routes.upload}
                leftIcon={
                  <FontAwesomeIcon className={cx("icon-add")} icon={faPlus} />
                }
              >
                Tải lên
              </Button>
              <Tippy content="Thêm hiệu ứng" delay={[0, 200]}>
                <button className={cx("action-btn")}>
                  <MoreEffects />
                </button>
              </Tippy>
              <Tippy content="Tin nhắn" delay={[0, 200]}>
                <button className={cx("action-btn")}>
                  <MessageIcon />
                </button>
              </Tippy>
              <Tippy content="Hộp thư" delay={[0, 200]}>
                <button className={cx("action-btn")}>
                  <MailBoxIcon />
                  <span className={cx("action-btn-num")}>12</span>
                </button>
              </Tippy>
            </>
          ) : (
            <>
              <Button
                text
                to={config.routes.upload}
                leftIcon={
                  <FontAwesomeIcon className={cx("icon-add")} icon={faPlus} />
                }
              >
                Tải lên
              </Button>

              <Button primary>Đăng nhập</Button>

              <Tippy content="Thêm hiệu ứng" delay={[0, 200]}>
                <button className={cx("action-btn")}>
                  <MoreEffects />
                </button>
              </Tippy>
            </>
          )}

          <Menu
            items={currentUser ? userMenu : MENU_ITEMS}
            onChange={handleChangeMenu}
          >
            {currentUser ? (
              <Image
                className={cx("user-avatar")}
                // src="https://fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png"
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/5b5b18788ca6f3d618541f8f5b3fcd51~c5_100x100.jpeg?x-expires=1677117600&x-signature=rBSxvdnF78zTyGi7ELqRWHiZqPs%3D"
                alt="Hoa"
                fallback="https://fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png"
              />
            ) : (
              <button className={cx("more-button")}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
