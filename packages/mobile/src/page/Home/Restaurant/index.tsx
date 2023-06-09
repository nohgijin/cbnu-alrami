import { Dayjs } from "dayjs";
import ErrorFallbackWithStyle from "src/components/atoms/ErrorFallbackWithStyle";
import SuspenseFallback from "src/components/atoms/SuspenseFallback";
import AsyncBoundary from "src/components/templates/AsyncBoundary";
import getCafeteriaData from "src/utils/getCafeteriaData";

import { HOME_MARGIN_BOTTOM } from "../constants";
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
};

function Restaurant({ today }: Props) {
  const {
    cardType,
    cafeteriaName,
    handleSelectorClick,
    handleSelectorCancel,
    handleCafeteriaSelect,
    handleFinalGuideCancel,
  } = useRestaurant();

  const target = getCafeteriaData(cafeteriaName);

  if (cardType === "none") return null;
  if (cardType === "greeting")
    return <Greeting onClick={handleSelectorClick} className={$.cafeteria} />;
  if (cardType === "selector")
    return (
      <Selector
        cafeteriaName={cafeteriaName}
        onSelectorCancel={handleSelectorCancel}
        onCafeteriaSelect={handleCafeteriaSelect}
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
      suspenseFallback={
        <SuspenseFallback
          height="160px"
          isRoundBox
          style={{ marginBottom: HOME_MARGIN_BOTTOM }}
        />
      }
      errorFallback={ErrorFallbackWithStyle({ height: "159px" })}
      keys={[ cafeteriaName ]}
    >
      <Selected
        {...{ today }}
        cafeteriaData={target.id}
        cafeteriaName={cafeteriaName}
        onClick={handleSelectorClick}
        className={$.cafeteria}
      />
    </AsyncBoundary>
  );
}

export default Restaurant;
