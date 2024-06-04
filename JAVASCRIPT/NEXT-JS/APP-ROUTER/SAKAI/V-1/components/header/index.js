import React from "react";
import { StatusButton } from "@/components";

export const CustomHeader = ({
  header,
  headerClass,
  customParentClassName,
  requiredSymbol = false,
}) => {
  return (
    <div
      className={`flex gap-2 align-items-center mb-2 ${customParentClassName}`}
    >
      <div className="hitachi_header_container">
        <div className="hitachi_header_bg"></div>
        <div className={`ml-2 ${headerClass}`}>
          {header}{" "}
          <span className={requiredSymbol ? "p-error" : ""}>
            {requiredSymbol ? "*" : ""}
          </span>
        </div>
      </div>
    </div>
  );
};

export const ContentHeader = ({
  headerText,
  contentText,
  buttonText,

  buttonSymbol,
  parentClassName,
  customHeaderColor,
  status,
  customContentHeaderStatusButton,
}) => {
  return (
    <div className={`${parentClassName}`}>
      <div className="flex justify-between">
        <div className="">
          <span className={`${customHeaderColor || "headerColor"}`}>
            {headerText} :{" "}
          </span>
          <span>{contentText}</span>
        </div>
        <div>
          {buttonSymbol && (
            <span className="">
              <StatusButton
                parentClassName="header-button"
                statusButtonProps={{
                  text: buttonText,
                  status: status,
                  custom: `${
                    customContentHeaderStatusButton ||
                    "defaultContentHeaderStatusButton"
                  }`,
                }}
              />
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
