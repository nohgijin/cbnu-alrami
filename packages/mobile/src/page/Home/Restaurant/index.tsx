import { Dayjs } from "dayjs";
import ErrorFallback from "src/components/atoms/ErrorFallback";
import SuspenseFallback from "src/components/atoms/SuspenseFallback";
import AsyncBoundary from "src/components/templates/AsyncBoundary";
import { CAFETERIA_LIST } from "src/constants";

import EmptyCafeteria from "./EmptyCafeteria";
import FinalGuide from "./FinalGuide";
import Greeting from "./Greeting";
import { useRestaurant } from "./hooks";
import Selected from "./Selected";
import $select from "./Selected/style.module.scss";
import Selector from "./Selector";
import $ from "./style.module.scss";

type Props = {
  today: Dayjs;
  isHoliday: boolean;
};

function Restaurant({ today, isHoliday }: Props) {
  const {
    cardType,
    cafeteriaName,
    handleSelectorClick,
    handleSelectorCancel,
    handleCafeteriaSelect,
    handleFinalGuideCancel,
  } = useRestaurant();

  const target = CAFETERIA_LIST.find((cafeteria) => {
    return cafeteria.name === cafeteriaName;
  });

  if (cardType === "none") return null;
  if (cardType === "greeting")
    return <Greeting onClick={handleSelectorClick} className={$.cafeteria} />;
  if (cardType === "selector")
    return (
      <Selector
        cafeteriaName={cafeteriaName}
        onSelectorCancel={handleSelectorCancel}
        onCafeteriaSelect={handleCafeteriaSelect}
        className={$.cafeteria}
      />
    );
  if (cardType === "finalGuide")
    return (
      <FinalGuide onClick={handleFinalGuideCancel} className={$.cafeteria} />
    );
  if (!target)
    return (
      <EmptyCafeteria
        className={$select["empty-box"]}
        onClick={handleSelectorClick}
        {...{ cafeteriaName }}
      />
    );

  return (
    <AsyncBoundary
      suspenseFallback={<SuspenseFallback height="160px" />}
      errorFallback={ErrorFallback}
      fallBackHeight="160px"
      keys={[ cafeteriaName ]}
    >
      <Selected
        {...{ isHoliday, today }}
        cafeteriaData={target.id}
        cafeteriaName={cafeteriaName}
        onClick={handleSelectorClick}
        className={$.cafeteria}
      />
    </AsyncBoundary>
  );
}

export default Restaurant;