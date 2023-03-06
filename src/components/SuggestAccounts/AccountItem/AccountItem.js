import Tippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import styles from "./SuggestAccounts.module.scss";

import { Wrapper as PopperWrapper } from "~/components/Popper";
import AccountPreview from "../AccountPreview";

const cx = classNames.bind(styles);

function AccountItem({ data }) {
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
          <img className={cx("avatar")} src={data.avatar} alt="" />
          <div className={cx("info")}>
            <div className={cx("nick-name")}>
              <span>{data.nickName}</span>

              {data.check && (
                <FontAwesomeIcon className={cx("check")} icon={faCheckCircle} />
              )}
            </div>
            <p className={cx("name")}>{data.name}</p>
          </div>
        </div>
      </Tippy>
    </div>
  );
}

export default AccountItem;
