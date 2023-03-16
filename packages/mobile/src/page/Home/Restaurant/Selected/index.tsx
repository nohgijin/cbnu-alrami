import { CafeteriaMenu } from "@shared/swagger-api/generated";
import classNames from "classnames";
import { Dayjs } from "dayjs";
import BorderBox from "src/components/atoms/BorderBox";
import { Write } from "src/components/atoms/icon";
import Line from "src/components/atoms/Line";
import { useCafeteriaQuery } from "src/hooks/api/cafeteria";
import { getCafeteriaTime } from "src/page/Cafeteria/constants";
import { Restaurant } from "src/type";

import EmptyCafeteria from "../EmptyCafeteria";
import $ from "./style.module.scss";

type Props = {
  today: Dayjs;
  cafeteriaData: CafeteriaMenu.name;
  cafeteriaName: Omit<Restaurant, "표시 안함">;
  isHoliday: boolean;
  onClick: () => void;
  className?: string;
};

const getMealTime = (hour: number) => {
  if (hour >= 0 && hour < 10) return CafeteriaMenu.time.BREAKFAST;
  if (hour >= 10 && hour < 13) return CafeteriaMenu.time.LUNCH;
  return CafeteriaMenu.time.DINNER;
};

function Selected(props: Props) {
  const { today, cafeteriaData, cafeteriaName, isHoliday, onClick, className } =
    props;
  const { data } = useCafeteriaQuery(
    cafeteriaData || CafeteriaMenu.name.BONGWAN,
    today.format("YYYY-MM-DD"),
  );
  const menuData = data?.find(({ time }) => {
    return time === getMealTime(today.hour());
  });

  if (!menuData)
    return (
      <EmptyCafeteria
        className={$["empty-box"]}
        {...{ cafeteriaName, onClick }}
      />
    );

  const [ mealType, mealPeriod ] = getCafeteriaTime(
    isHoliday,
    cafeteriaData,
    menuData.time,
  );

  return (
    <BorderBox height="auto" className={classNames($["menu-box"], className)}>
      <div className={$.header}>
        <div className={$["title-box"]}>
          <span className={$.title}>{`${cafeteriaName} ${mealType}`}</span>
          <button
            type="button"
            aria-label="대표 식당 변경하기"
            onClick={onClick}
          >
            <Write stroke="#aaa" size={12} />
          </button>
        </div>
        <span className={$.time}>{mealPeriod}</span>
      </div>
      <Line />
      <div className={$["food-box"]}>
        {menuData.menu ? (
          <p className={$["cafeteria-content"]}>{menuData.menu}</p>
        ) : (
          <span className={$["empty-menu"]}>지금은 식단이 없어요</span>
        )}
      </div>
    </BorderBox>
  );
}

export default Selected;