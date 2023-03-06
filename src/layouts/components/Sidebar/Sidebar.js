import className from "classnames/bind";
import config from "~/config";
import MenuBar, { MenuItem } from "./MenuBar";
import {
  HomeIcon,
  HomeActiveIcon,
  UserGroupIcon,
  UserGroupActiveIcon,
  LiveIcon,
  LiveActiveIcon,
} from "~/components/Icons";
import styles from "./Sidebar.module.scss";
import SuggestAccounts from "~/components/SuggestAccounts/AccountItem";
import FollowAccount from "~/components/FollowAccount/AccountItem";

const cx = className.bind(styles);

function Sidebar() {
  return (
    <div className={cx("wrapper")}>
      <MenuBar>
        <MenuItem
          title="Dành cho bạn"
          to={config.routes.home}
          icon={<HomeIcon />}
          activeIcon={<HomeActiveIcon />}
        />
        <MenuItem
          title="Đang Follow"
          to={config.routes.following}
          icon={<UserGroupIcon />}
          activeIcon={<UserGroupActiveIcon />}
        />
        <MenuItem
          title="LIVE"
          to={config.routes.live}
          icon={<LiveIcon />}
          activeIcon={<LiveActiveIcon />}
        />
      </MenuBar>

      <SuggestAccounts label="Tài khoản được đề xuất" />
      <FollowAccount label="Các tài khoản đang follow" />
    </div>
  );
}

export default Sidebar;
