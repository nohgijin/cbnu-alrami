import { Internet, Star } from "@components/atoms/icon";
import {
  useDeleteBookmarkArticleMutation,
  usePostBookmarkArticleMutation,
} from "@hooks/api/article";
import ShareButton from "src/components/atoms/ShareButton";
import { isDesktop, isDevOrWebview, isFromApp } from "src/utils/webview";

import $ from "./style.module.scss";

type Props = {
  articleId: number;
  isBookmark: boolean;
  url?: string;
};

function ArticleFooter({ articleId, isBookmark, url }: Props) {
  const postBookmark = usePostBookmarkArticleMutation({ id: articleId });
  const deleteBookmark = useDeleteBookmarkArticleMutation({
    id: articleId,
  });
  const toggleBookmark = () => {
    if (isBookmark) {
      deleteBookmark.mutate({ id: articleId });
      return;
    }
    postBookmark.mutate({ id: articleId });
  };

  const handleUrlClick = () => {
    if (isFromApp) {
      baseApp.postMessage(JSON.stringify({ action: "navigate", url }));
    } else {
      window.open(url);
    }
  };

  return (
    <div className={$["article-footer"]}>
      <ShareButton
        className={$.button}
        size={24}
        stroke="#5e5e5e"
        successMsg={
          isDesktop
            ? "공지사항 링크가 복사되었습니다."
            : "공지사항 링크가 클립보드에 복사되었습니다."
        }
      />
      {isDevOrWebview && (
        <button className={$.button} type="button" onClick={toggleBookmark}>
          <Star
            size={24}
            stroke={isBookmark ? "#D66D6E" : "#5e5e5e"}
            fill={isBookmark ? "#D66D6E" : ""}
          />
        </button>
      )}
      {url && (
        <button className={$.button} type="button" onClick={handleUrlClick}>
          <Internet size={24} stroke="#5e5e5e" />
        </button>
      )}
    </div>
  );
}

export default ArticleFooter;
