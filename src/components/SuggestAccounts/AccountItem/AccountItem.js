import Tippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import styles from "./SuggestAccounts.module.scss";

import { Wrapper as PopperWrapper } from "~/components/Popper";
import AccountPreview from "../AccountPreview";

const cx = classNames.bind(styles);

function AccountItem() {
  const renderPreview = (props) => (
    <div tabIndex="-1" {...props}>
      <PopperWrapper>
        <AccountPreview />
      </PopperWrapper>
    </div>
  );

  return (
    <div>
      <Tippy
        interactive
        delay={[800, 0]}
        offset={[-20, 0]}
        placement="bottom"
        render={renderPreview}
      >
        <div className={cx("account-item")}>
          <img
            className={cx("avatar")}
            src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1677733200&x-signature=jn93rFpaqHcMYTYZ2CEqeaIa4OE%3D"
            // src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/cba7b4acc3c922ada104e90cfdab6b40~c5_100x100.jpeg?x-expires=1677121200&x-signature=7Fs3dB0z3Uc6VHOYOVOVFSLiQCI%3D"
            alt=""
          />
          <div className={cx("info")}>
            <div className={cx("nick-name")}>
              <span>theanh28entertainment</span>
              <FontAwesomeIcon className={cx("check")} icon={faCheckCircle} />
            </div>
            <p className={cx("name")}>Theanh28 Entertainment</p>
          </div>
        </div>
      </Tippy>
    </div>
  );
}

export default AccountItem;
