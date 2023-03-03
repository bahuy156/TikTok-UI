import className from "classnames/bind";
import config from "~/config";
import styles from "./Sidebar.module.scss";

import MenuBar, { MenuItem } from "./MenuBar";
import {
  HomeIcon,
  HomeActiveIcon,
  UserGroupIcon,
  UserGroupActiveIcon,
  LiveIcon,
  LiveActiveIcon,
} from "~/components/Icons";
import SuggestAccounts from "~/components/SuggestAccounts/AccountItem";

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
      <SuggestAccounts label="Các tài khoản đang follow" />
    </div>
  );
}

export default Sidebar;
