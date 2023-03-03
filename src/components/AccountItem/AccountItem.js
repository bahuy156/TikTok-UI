import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import className from "classnames/bind";
import styles from "./AccountItem.module.scss";
import Image from "../Image";

const cx = className.bind(styles);

function AccountItem({ data }) {
  return (
    <Link to={`/@/${data.nickname}`} className={cx("wrapper")}>
      <Image
        className={cx("image")}
        src={data.avatar}
        alt={data.full_name}
      ></Image>

      <div className={cx("info")}>
        <p className={cx("user-name")}>
          <span>{data.nickname}</span>
          {data.tick && (
            <FontAwesomeIcon className={cx("check")} icon={faCheckCircle} />
          )}
        </p>

        <h4 className={cx("name")}>{data.full_name}</h4>
      </div>
    </Link>
  );
}

AccountItem.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AccountItem;
