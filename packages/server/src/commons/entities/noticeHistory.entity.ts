import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";

import { Article } from "./article.entity";
import { CommonEntity } from "./common.entity";
import { User } from "./user.entity";

@Entity("notice_history")
export class NoticeHistory extends CommonEntity {
  @ManyToOne(
    () => {
      return User;
    },
    (User) => {
      return User.id;
    },
    {
      cascade: true,
      nullable: false,
      onDelete: "CASCADE",
    },
  )
  @JoinColumn()
  user: User;

  @ManyToOne(
    () => {
      return Article;
    },
    (Article) => {
      return Article.id;
    },
    {
      cascade: true,
      nullable: false,
      onDelete: "CASCADE",
    },
  )
  @JoinColumn()
  article: Article;

  @Column({ type: "boolean", default: false })
  isConfirm: boolean;
}