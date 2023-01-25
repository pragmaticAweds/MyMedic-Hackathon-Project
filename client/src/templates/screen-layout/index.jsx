import Button from "../../components/atoms/button";
import DashboardLayout from "../dashboard-layout";
import "./ScreenLayoutStyles.scss";
import FilterIcon from "../../components/atoms/vectors/FilterIcon";

import AddIcon from "../../components/atoms/vectors/AddIcon";
import Input from "../../components/atoms/Input";

const ScreenLayout = ({
  children,
  title,
  onClick,
  btnLabel,
  btnIcon,
  inputName,
}) => {
  return (
    <DashboardLayout>
      <div className="screen-layout-container">
        <div className="screen-layout-options">
          {title ? <h3>{title}</h3> : null}
          <div className="screen-layout-options">
            {inputName ? (
              <div className="screen-layout-filter-options">
                <Input name={inputName} />
                <div className="filter-container">
                  <FilterIcon />
                  <span className="text-lg">Filter</span>
                </div>
              </div>
            ) : null}

            {btnLabel ? (
              <Button
                label={btnLabel}
                prefix={btnIcon ? btnIcon : <AddIcon />}
                mxWt="max-w-[11.25rem]"
                ht="h-[3rem]"
                onClick={onClick}
              />
            ) : null}
          </div>
        </div>
        <div className="mt-5 overflow-hidden flex-1">{children}</div>
      </div>
    </DashboardLayout>
  );
};

export default ScreenLayout;
