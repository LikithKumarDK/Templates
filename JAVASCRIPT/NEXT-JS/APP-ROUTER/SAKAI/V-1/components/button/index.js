import { Button as PrimeReactButton } from "primereact/button";
import { BsDot } from "react-icons/bs";
import { SelectButton as SelButton } from "primereact/selectbutton";

export const Button = (props) => {
  const { parentClassName, parentStyle, buttonProps = {} } = props;
  const {
    hoverBg,
    custom,
    buttonClass,
    text,
    icon,
    bg,
    isLoading,
    forward: isForward,
    ...restProps
  } = buttonProps;
  let updatedIcon = icon;
  if (isForward) {
    updatedIcon = "pi pi-angle-right";
  }

  return (
    <div className={`${parentClassName}`} style={parentStyle}>
      <PrimeReactButton
        className={`${bg || ""} ${hoverBg || ""} ${
          custom || "custom-button"
        }  ${buttonClass} font-medium border-noround`}
        label={text}
        icon={isLoading ? "pi pi-spin pi-spinner" : icon || updatedIcon}
        disabled={isLoading ? isLoading : false}
        {...restProps}
      />
    </div>
  );
};

export const ButtonRounded = (props) => {
  const { parentClass, parentStyle, buttonProps = {} } = props;
  const { hoverBg, custom, buttonClass, text, icon, bg, ...restProps } =
    buttonProps;

  return (
    <div className={`${parentClass}`} style={parentStyle}>
      <PrimeReactButton
        className={`${bg} ${hoverBg} ${icon && "custom-icon-button"} ${
          custom || "custom-button"
        } ${buttonClass} font-medium border-round-3xl`}
        label={text}
        icon={icon}
        {...restProps}
      />
    </div>
  );
};
export const StatusButton = (props) => {
  const { parentClassName, parentStyle, statusButtonProps = {} } = props;
  const {
    hoverBg,
    custom,
    buttonClass,
    text,
    icon,
    bg,
    isLoading,
    status,
    ...restProps
  } = statusButtonProps;

  let statusClass = "";
  let iconElement = (
    <>
      <BsDot />
    </>
  );

  switch (status) {
    case "blueStatus":
      statusClass = "blueStatus";
      break;
    case "orangeStatus":
      statusClass = "orangeStatus";
      break;
    case "goldStatus":
      statusClass = "goldStatus";
      break;
    case "aquaStatus":
      statusClass = "aquaStatus";
      break;
    case "warningStatus":
      statusClass = "warningStatus";
      iconElement = "pi pi-exclamation-circle";
      break;
    default:
      statusClass = "";
      iconElement = "";
  }

  return (
    <div className={`${statusClass} ${parentClassName} `} style={parentStyle}>
      <PrimeReactButton
        className={`${bg} ${hoverBg} ${
          custom || "custom-button"
        } font-medium border-noround ${buttonClass} `}
        label={text}
        icon={iconElement}
        disabled={isLoading ? isLoading : false}
        {...restProps}
      />
    </div>
  );
};

export const SelectButton = (props) => {
  const { parentClassName, parentStyle, selectButtonProps = {} } = props;
  const { selectButtonClassName, value, onChange, options, ...restProps } =
    selectButtonProps;

  return (
    <div
      className={`defaultSelectButton ${parentClassName}`}
      style={parentStyle}
    >
      <SelButton
        className={` ${selectButtonClassName}`}
        value={value}
        onChange={onChange}
        options={options}
        {...restProps}
      />
    </div>
  );
};
