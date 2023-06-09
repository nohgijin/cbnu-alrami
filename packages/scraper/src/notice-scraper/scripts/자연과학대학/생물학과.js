import { boardTree } from "@shared/board-tree/board-tree.generated";

import 물리학과 from "./물리학과";

const script = {
  url: "https://biology.chungbuk.ac.kr/?pg_idx=145",
  site_id: boardTree.전공.자연과학대학.생물학과.공지사항.id,
  site: "생물학과",
  category: "공지사항",
};

export default { ...물리학과, ...script };
