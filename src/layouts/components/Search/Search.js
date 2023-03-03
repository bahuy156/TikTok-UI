import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import className from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faSpinner,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import HeadlessTippy from "@tippyjs/react/headless";

import config from "~/config";
import * as searchServices from "~/services/searchService";
import { useDebounce } from "~/hooks";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import AccountItem from "~/components/AccountItem";
import styles from "./Search.module.scss";

const cx = className.bind(styles);

function Search() {
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [showResult, setShowResult] = useState(true);
  const [loading, setLoading] = useState(false);

  const inputRef = useRef();

  const deBounce = useDebounce(searchValue, 500);

  useEffect(() => {
    if (!deBounce.trim()) {
      setSearchResult([]);
      return;
    }

    // Call API bằng thư viện axios với cú pháp async / await
    const fetchApi = async () => {
      setLoading(true);

      const result = await searchServices.search(deBounce);
      setSearchResult(result);

      setLoading(false);
    };

    fetchApi();
  }, [deBounce]);

  // Function handler
  const handleClear = () => {
    setSearchValue("");
    setSearchResult([]);

    inputRef.current.focus();
  };

  const handleHideResult = () => {
    setShowResult(false);
  };

  const handleChangeValue = (e) => {
    const value = e.target.value;

    if (!value.startsWith(" ")) {
      setSearchValue(value);
    }
  };

  return (
    // Using a wrapper <div> or <span> tag around the reference element solves this by creating a new parentNode context.
    <div>
      <HeadlessTippy
        // cho phép select
        interactive
        // cho phép ẩn / hiện
        visible={showResult && searchResult.length > 0}
        // cho phép custom
        render={(attrs) => (
          <div className={cx("search-result")} tabIndex="-1" {...attrs}>
            <PopperWrapper>
              <label className={cx("search-account")}>Tài khoản</label>
              {searchResult.map((result) => (
                <AccountItem key={result.id} data={result} />
              ))}
            </PopperWrapper>
          </div>
        )}
        onClickOutside={handleHideResult}
      >
        <div className={cx("search")}>
          <input
            ref={inputRef}
            value={searchValue}
            placeholder="Tìm kiếm tài khoản và video"
            spellCheck={false}
            onChange={handleChangeValue}
            onFocus={() => setShowResult(true)}
          />

          {!!searchValue && !loading && (
            <button className={cx("close")}>
              <FontAwesomeIcon icon={faCircleXmark} onClick={handleClear} />
            </button>
          )}

          {loading && (
            <FontAwesomeIcon className={cx("loading")} icon={faSpinner} />
          )}

          <Link
            to={config.routes.search}
            className={cx("search-btn")}
            onMouseDown={(e) => e.preventDefault()}
          >
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </Link>
        </div>
      </HeadlessTippy>
    </div>
  );
}

export default Search;
