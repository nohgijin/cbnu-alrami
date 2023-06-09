import { useState } from "react";
import { useLocation } from "react-router-dom";

import { FillHeart, Heart, LeftArrow } from "@components/atoms/icon";
import SwiperImage from "@components/molecules/SwiperImage";
import ImageModal from "@components/shared/ImageModal";
import FullPageModalTemplate from "@components/templates/FullPageModalTemplate";
import {
  useArticleQuery,
  useDeleteLikeArticleMutation,
  usePostLikeArticleMutation,
} from "@hooks/api/article";
import useModal from "@hooks/useModal";
import classnames from "classnames";
import dayjs from "dayjs";
import { EMPTY_TITLE_GUIDE_MESSAGE } from "src/consts";
import ArticleFooter from "src/page/Article/components/Footer";
import { isDevOrWebview } from "src/utils/webview";

import $ from "./style.module.scss";

function ArticleDetail() {
  const { pathname } = useLocation();
  const articleId = Number(pathname.split("/").at(-1));
  const [ isLikeClick, setIsLikeClick ] = useState(false);
  const [ order, setOrder ] = useState(1);
  const { data: articleData, isLoading } = useArticleQuery({
    id: articleId,
  });
  const postLikeArticle = usePostLikeArticleMutation({ id: articleId });
  const deleteLikeArticle = useDeleteLikeArticleMutation({ id: articleId });
  const { isOpen, handleModalClose, handleModalOpen } = useModal();

  if (isLoading) return <></>;
  if (!articleData) return <>데이터가 없습니다.</>;

  const {
    board: { name },
    title,
    viewCount,
    dateTime,
    content,
    isBookmark,
    isLike,
    likeCount,
    images,
    url,
  } = articleData;

  const handleToggleLikeClick = (articleId: number) => {
    if (isLike) {
      setIsLikeClick(false);
      deleteLikeArticle.mutate({ id: articleId });
      return;
    }
    setIsLikeClick(true);
    postLikeArticle.mutate({ id: articleId });
  };
  return (
    <div className={$["article-detail"]}>
      <FullPageModalTemplate
        left={<LeftArrow stroke="#5e5e5e" size={16} />}
        title={name}
        style={{ borderBottom: "1px solid #eeeded" }}
      >
        <div className={$.children}>
          <div className={$.title}>{title || EMPTY_TITLE_GUIDE_MESSAGE}</div>
          <div className={$.info}>
            <span>{dayjs(dateTime).format("YYYY-MM-DD")}</span>
            &nbsp;/&nbsp;
            <span>조회수&nbsp;{viewCount}</span>
            &nbsp;/&nbsp;<span>좋아요&nbsp;{likeCount}</span>
          </div>
          {!!images?.length && (
            <SwiperImage
              imageDatas={images.map((image) => {
                return image.url;
              })}
              onOpen={handleModalOpen}
              {...{ order, setOrder }}
            />
          )}
          <div
            className={$.content}
            dangerouslySetInnerHTML={{ __html: content }}
          />
          <div className={$.heart}>
            <button
              type="button"
              className={$["heart-button"]}
              onClick={() => {
                return handleToggleLikeClick(articleId);
              }}
            >
              {isLike ? (
                <div className={classnames(isLikeClick && $.active)}>
                  <FillHeart size={20} fill="#D66D6E" />
                </div>
              ) : (
                <div>
                  <Heart size={20} stroke="#AAAAAA" />
                </div>
              )}
              {likeCount}
            </button>
          </div>
        </div>
        <ArticleFooter {...{ articleId, isBookmark, url }} />
      </FullPageModalTemplate>
      {isOpen && images?.length && isDevOrWebview && (
        <ImageModal
          {...{ order, setOrder, images }}
          onClose={handleModalClose}
        />
      )}
    </div>
  );
}

export default ArticleDetail;
