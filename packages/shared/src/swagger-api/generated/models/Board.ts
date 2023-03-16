/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ChildBoard } from './ChildBoard';

export type Board = {
    /**
     * 아이디
     */
    id: number;
    /**
     * 생성 시간
     */
    createdDateTime: string;
    /**
     * 수정 시간
     */
    updatedDateTime: string;
    /**
     * 게시판 제목
     */
    name: string;
    /**
     * 게시판 URL
     */
    url?: string;
    /**
     * 부모 게시판
     */
    parent?: Board;
    /**
     * 자식 게시판
     */
    children?: Array<ChildBoard>;
};
