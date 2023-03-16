import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class ArticleCreateDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ description: "공지사항 제목" })
  title!: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ description: "공지사항 내용" })
  content!: string;

  @IsOptional()
  @IsString()
  @ApiProperty({ description: "공지사항 url" })
  url: string;

  @IsNotEmpty()
  @ApiProperty({ description: "공지사항 등록 날짜 : YYYY-MM-DD" })
  date!: Date;

  @IsArray()
  @ApiProperty({ description: "공지사항에 첨부된 이미지 id 배열" })
  images: number[];
}