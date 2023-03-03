import PropTypes from "prop-types";
import classNames from "classnames/bind";
import styles from "./SuggestAccounts.module.scss";
import AccountItem from "./AccountItem";

const cx = classNames.bind(styles);

function SuggestAccounts({ label }) {
  return (
    <div className={cx("wrapper")}>
      <h4 className={cx("title")}>{label}</h4>

      <AccountItem />
      <AccountItem />
      <AccountItem />

      <button className={cx("more-btn")}>
        <p className={cx("see-more")}>Xem tất cả</p>
      </button>
    </div>
  );
}

SuggestAccounts.propTypes = {
  label: PropTypes.string.isRequired,
};

export default SuggestAccounts;
