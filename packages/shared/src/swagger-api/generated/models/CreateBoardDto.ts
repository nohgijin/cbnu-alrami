/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CreateBoardDto = {
    /**
     * 게시판 제목
     */
    name: string;
    /**
     * 게시판 URL
     */
    url?: string;
    /**
     * 게시판 ID
     */
    id: number;
    /**
     * 상위 게시판 ID
     */
    parentBoardId: number | null;
};

