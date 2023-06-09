import {useState} from "react";

import {Close, LongArrow} from "@components/atoms/icon";
import classNames from "classnames";
import {isWebView} from "src/utils/webview";

import $ from "./style.module.scss";

// TODO(chloe): 링크 추가 필요
function DeepLink() {
  const [ isHidden, setIsHidden ] = useState(false);
  if (isWebView) return <></>;

  return (
    <div className={classNames($.deeplink, { [$.isHidden]: isHidden })}>
      <button type="button" className={$.left}>
        충림이 앱으로 보기 <LongArrow size={6} stroke="#fff" />
      </button>
      <button
        type="button"
        onClick={() => {
          return setIsHidden(true);
        }}
        className={$.right}
      >
        <Close size={12} stroke="#fff" />
      </button>
    </div>
  );
}

export default DeepLink;
