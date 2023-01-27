import clsx from "clsx";
import "./StageLoader.scss";

const StageLoader = ({ currentIndex = 0, stages = [] }) => {
  return (
    <div className="stage-loader-container">
      <span
        className={clsx("stage-line", stages.length === 0 ? "hidden" : "block")}
      ></span>
      {stages.map((stage, i) => (
        <div key={stage + i} className="stage-container">
          <span
            className={clsx(
              "stage-index",
              currentIndex === i || currentIndex > i
                ? " bg-[#336CFB]"
                : "bg-[#808080]"
            )}
          >
            {i + 1}
          </span>
          <span
            className={clsx(
              "text-sm",
              currentIndex === i || currentIndex > i
                ? " text-[#336CFB]"
                : "text-[#808080]"
            )}
          >
            {stage}
          </span>
        </div>
      ))}
    </div>
  );
};

export default StageLoader;
