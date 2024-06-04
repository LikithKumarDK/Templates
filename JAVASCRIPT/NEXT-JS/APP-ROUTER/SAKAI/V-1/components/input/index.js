import React, { useEffect, useState } from "react";
import { InputText } from "primereact/inputtext";
import { InputNumber as InputNum } from "primereact/inputnumber";
import { Password as Pwd } from "primereact/password";
import { Dropdown } from "primereact/dropdown";
import { Dropdown as Drp } from "antd";
import { MultiSelect as MulSel } from "primereact/multiselect";
import { Button } from "primereact/button";
import { InputTextarea } from "primereact/inputtextarea";

import { AudioRecorder, NormalLabel, Button as Btn } from "@/components";
const AUTO_COMPLETE = process.env.NEXT_PUBLIC_AUTOCOMPLETE;

export const Input = (props) => {
  const {
    inputParentClassName,
    hasIcon,
    inputParentStyle,
    labelProps,
    requiredButton,
    inputLeftIconProps,
    inputClassName,
    hasError,
    inputRightIconProps,
    labelDownProps,
    isLoading,
    iconProps,
    float,
    floatLabelProps,
    leftIcon,
    rightIcon,
    iconInputParentClassName,
    ...restProps
  } = props && props.inputProps;

  const [localIsRecording, setLocalIsRecording] = useState(false);

  const handleAudioRecorded = (audioBlob) => {
    inputRightIconProps?.onRecordValueChange(audioBlob);
  };

  const handleRecordingStateChangeLocal = (isRecord) => {
    setLocalIsRecording(isRecord);
    inputRightIconProps?.onRecordingStateChange(isRecord);
  };

  useEffect(() => {
    if (!inputRightIconProps?.isRecording) {
      setLocalIsRecording(inputRightIconProps?.isRecording);
    }
  }, [inputRightIconProps?.isRecording]);

  return (
    <>
      {labelProps?.text && inputRightIconProps?.display && (
        <>
          <div
            className={`flex gap-1 align-items-center ${
              labelProps.labelMainClassName || "pb-1"
            }`}
          >
            <NormalLabel
              labelClass={labelProps.inputLabelClassName}
              text={labelProps.text}
              labelStyle={labelProps.parentStyle}
              spanText={labelProps.spanText}
              spanClass={labelProps.inputLabelSpanClassName}
            />
            {requiredButton ? (
              <Btn
                buttonProps={{
                  text: "必須",
                  custom: "custom-button-required",
                  buttonClass: "cursor-auto",
                }}
                parentClassName="required-button "
              />
            ) : (
              <></>
            )}
          </div>
        </>
      )}
      <div
        className={`custom_input ${inputParentClassName} ${
          inputRightIconProps?.audio?.display ? "p-input-icon-right" : ""
        } ${hasIcon ? "p-input-icon-right" : ""} ${
          float ? "p-float-label " : ""
        }`}
        style={inputParentStyle}
      >
        {labelProps?.text && !inputRightIconProps?.display && (
          <div
            className={`flex gap-1 align-items-center ${
              labelProps.labelMainClassName || "pb-1"
            }`}
          >
            <NormalLabel
              labelClass={labelProps.inputLabelClassName}
              text={labelProps.text}
              labelStyle={labelProps.parentStyle}
              spanText={labelProps.spanText}
              spanClass={labelProps.inputLabelSpanClassName}
            />
            {requiredButton ? (
              <Btn
                buttonProps={{
                  text: "必須",
                  custom: "custom-button-required",
                  buttonClass: "cursor-auto",
                }}
                parentClassName="required-button "
              />
            ) : (
              <></>
            )}
          </div>
        )}
        {localIsRecording && (
          <i className="flex justify-content-center w-full">
            <i className="pi pi-spin pi-spinner  pl-0 " />
          </i>
        )}
        {isLoading && (
          <i className="flex justify-content-center w-full">
            <i className="flex justify-content center align-items-end pt-2 pb-2 pi pi-spin pi-spinner" />
          </i>
        )}
        {inputLeftIconProps?.display && (
          <>
            {inputLeftIconProps?.audio?.display ? (
              <div>
                <AudioRecorder
                  onAudioRecorded={handleAudioRecorded}
                  onRecordingStateChange={handleRecordingStateChangeLocal}
                  disabled={
                    inputLeftIconProps?.disabled ||
                    (inputLeftIconProps?.isRecording && !localIsRecording)
                  }
                  isRecording={localIsRecording}
                  customClass={inputLeftIconProps.audioCustomClass}
                  customStyle={inputLeftIconProps.audioCustomStyle}
                />
              </div>
            ) : (
              <span className={inputLeftIconProps.inputLeftIconClassName}>
                {inputLeftIconProps.icon}
              </span>
            )}
          </>
        )}
        <span className={`${leftIcon ? "p-input-icon-left":""} ${rightIcon ? "p-input-icon-right":""} ${iconInputParentClassName}`}>
        {leftIcon && (
           <i className={`${leftIcon.parentClassName}`}>
            {leftIcon.content}
          </i>
        )}
        <InputText
          className={`${inputClassName} ${
            hasError ? "p-invalid bg-red-100" : ""
          }`}
          autoComplete={AUTO_COMPLETE}
          {...restProps}
        />
          {rightIcon && (
           <i className={`${rightIcon.parentClassName}`}>
            {rightIcon.content}
          </i>
        )}
        </span>
        {inputRightIconProps?.display && (
          <>
            {inputRightIconProps?.audio?.display ? (
              <i className="flex">
                {inputRightIconProps?.password?.display && (
                  <i
                    className={inputRightIconProps?.password?.className}
                    onClick={() => {
                      inputRightIconProps?.password?.onClick();
                    }}
                  ></i>
                )}
                <AudioRecorder
                  onAudioRecorded={handleAudioRecorded}
                  onRecordingStateChange={handleRecordingStateChangeLocal}
                  disabled={
                    inputRightIconProps.disabled ||
                    (inputRightIconProps.isRecording && !localIsRecording)
                  }
                  isRecording={localIsRecording}
                  customParentClassName={`${inputRightIconProps.audioCustomParentClass}`}
                  customClass={inputRightIconProps.audioCustomClass}
                  customStyle={inputRightIconProps.audioCustomStyle}
                />
              </i>
            ) : (
              <span className={inputRightIconProps.inputRightIconClassName}>
                {inputRightIconProps.icon}
              </span>
            )}
          </>
        )}
        {labelDownProps?.text && (
          <div
            className={`flex gap-1 align-items-center ${
              labelProps.labelMainClassName || "pb-1"
            }`}
          >
            <NormalLabel
              labelClass={labelDownProps.inputLabelClassName}
              text={labelDownProps.text}
            />
            {requiredButton ? (
              <Btn
                buttonProps={{
                  text: "必須",
                  custom: "custom-button-required",
                  buttonClass: "cursor-auto",
                }}
                parentClassName="required-button "
              />
            ) : (
              <></>
            )}
          </div>
        )}
        {floatLabelProps?.text && (
          <label
            className={`custom-label ${floatLabelProps.inputLabelClassName}`}
            htmlFor={floatLabelProps.id}
          >
            {floatLabelProps.text}
            <span className={floatLabelProps.inputLabelSpanClassName}>
              {floatLabelProps.spanText}
            </span>
          </label>
        )}
      </div>
    </>
  );
};

export const TextArea = (props) => {
  const {
    textAreaParentClassName,
    textAreaParentStyle,
    labelProps,
    requiredButton,
    textAreaClass,
    hasError,
    float,
    floatLabelProps,
    ...restProps
  } = props && props.textAreaProps;

  return (
    <div
      className={`${textAreaParentClassName} ${float ? "p-float-label" : ""}`}
      style={textAreaParentStyle}
    >
      {labelProps?.text && (
        <div
          className={`flex gap-1 align-items-center ${
            labelProps.labelMainClassName || "pb-1"
          }`}
        >
          <NormalLabel
            labelClass={labelProps.textAreaLabelClassName}
            text={labelProps.text}
            id={labelProps.id}
            labelStyle={labelProps.parentStyle}
            spanText={labelProps.spanText}
            spanClass={labelProps.textAreaLabelSpanClassName}
          />
          {requiredButton ? (
            <Btn
              buttonProps={{
                text: "必須",
                custom: "custom-button-required",
                buttonClass: "cursor-auto",
              }}
              parentClassName="required-button "
            />
          ) : (
            <></>
          )}
        </div>
      )}
      <InputTextarea
        className={`custom-textArea ${textAreaClass} ${
          hasError ? "p-invalid bg-red-100" : ""
        }`}
        autoComplete={AUTO_COMPLETE}
        {...restProps}
      />
      {floatLabelProps?.text && (
        <label
          className={`custom-label ${floatLabelProps.textAreaLabelClassName}`}
          htmlFor={floatLabelProps.id}
        >
          {floatLabelProps.text}
          <span className={floatLabelProps.textAreaLabelSpanClassName}>
            {floatLabelProps.spanText}
          </span>
        </label>
      )}
    </div>
  );
};

export const InputNumber = (props) => {
  const {
    inputNumberParentClassName,
    hasIcon,
    inputNumberParentStyle,
    labelProps,
    requiredButton,
    inputLeftIconProps,
    inputNumberClassName,
    hasError,
    inputRightIconProps,
    labelDownProps,
    isLoading,
    iconProps,
    float,
    floatLabelProps,
    ...restProps
  } = props && props.inputNumberProps;

  const [localIsRecording, setLocalIsRecording] = useState(false);

  const handleAudioRecorded = (audioBlob) => {
    inputRightIconProps?.onRecordValueChange(audioBlob);
  };

  const handleRecordingStateChangeLocal = (isRecord) => {
    setLocalIsRecording(isRecord);
    inputRightIconProps?.onRecordingStateChange(isRecord);
  };

  useEffect(() => {
    if (!inputRightIconProps?.isRecording) {
      setLocalIsRecording(inputRightIconProps?.isRecording);
    }
  }, [inputRightIconProps?.isRecording]);
  return (
    <>
      {labelProps?.text && inputRightIconProps?.display && (
        <>
          <div
            className={`flex gap-1 align-items-center ${
              labelProps.labelMainClassName || "pb-1"
            }`}
          >
            <NormalLabel
              labelClass={labelProps.inputNumberLabelClassName}
              text={labelProps.text}
              labelStyle={labelProps.parentStyle}
              spanText={labelProps.spanText}
              spanClass={labelProps.inputNumberLabelSpanClassName}
            />
            {requiredButton ? (
              <Btn
                buttonProps={{
                  text: "必須",
                  custom: "custom-button-required",
                  buttonClass: "cursor-auto",
                }}
                parentClassName="required-button "
              />
            ) : (
              <></>
            )}
          </div>
        </>
      )}
      <div
        className={`${inputNumberParentClassName} ${
          inputRightIconProps?.audio?.display ? "p-input-icon-right" : ""
        } ${hasIcon ? "p-input-icon-right" : ""}  ${
          float ? "p-float-label" : ""
        }`}
        style={inputNumberParentStyle}
      >
        {labelProps?.text && !inputRightIconProps?.display && (
          <div
            className={`flex align-items-center gap-1 ${
              labelProps.labelMainClassName || "pb-1"
            }`}
          >
            <NormalLabel
              labelClass={labelProps.inputNumberLabelClassName}
              text={labelProps.text}
              labelStyle={labelProps.parentStyle}
              spanText={labelProps.spanText}
              spanClass={labelProps.inputNumberLabelSpanClassName}
            />
            {requiredButton ? (
              <Btn
                buttonProps={{
                  text: "必須",
                  custom: "custom-button-required",
                  buttonClass: "cursor-auto",
                }}
                parentClassName="required-button "
              />
            ) : (
              <></>
            )}
          </div>
        )}
        {localIsRecording && (
          <i className="flex justify-content-center w-full">
            <i className="pi pi-spin pi-spinner  pl-0 " />
          </i>
        )}
        {isLoading && (
          <i className="flex justify-content-center w-full">
            <i className="flex justify-content center align-items-end pt-2 pb-2 pi pi-spin pi-spinner" />
          </i>
        )}
        {inputLeftIconProps?.display && (
          <>
            {inputLeftIconProps?.audio?.display ? (
              <div>
                <AudioRecorder
                  onAudioRecorded={handleAudioRecorded}
                  onRecordingStateChange={handleRecordingStateChangeLocal}
                  disabled={
                    inputLeftIconProps?.disabled ||
                    (inputLeftIconProps?.isRecording && !localIsRecording)
                  }
                  isRecording={localIsRecording}
                  customClass={inputLeftIconProps.audioCustomClass}
                />
              </div>
            ) : (
              <span className={inputLeftIconProps.inputLeftIconClassName}>
                {inputLeftIconProps.icon}
              </span>
            )}
          </>
        )}
        <InputNum
          className={`custom_input ${inputNumberClassName} ${
            hasError ? "p-invalid bg-red-100" : ""
          }`}
          {...restProps}
        />
        {inputRightIconProps?.display && (
          <>
            {inputRightIconProps?.audio?.display ? (
              <AudioRecorder
                onAudioRecorded={handleAudioRecorded}
                onRecordingStateChange={handleRecordingStateChangeLocal}
                disabled={
                  inputRightIconProps.disabled ||
                  (inputRightIconProps.isRecording && !localIsRecording)
                }
                isRecording={localIsRecording}
                customClass={inputRightIconProps.audioCustomClass}
              />
            ) : (
              <span className={inputRightIconProps.inputRightIconClassName}>
                {inputRightIconProps.icon}
              </span>
            )}
          </>
        )}
        {labelDownProps?.text && (
          <div
            className={`flex gap-1 align-items-center${
              labelProps.labelMainClassName || "pb-1"
            }`}
          >
            <NormalLabel
              labelClass={labelDownProps.inputLabelClassName}
              text={labelDownProps.text}
            />
            {requiredButton ? (
              <Btn
                buttonProps={{
                  text: "必須",
                  custom: "custom-button-required",
                  buttonClass: "cursor-auto",
                }}
                parentClassName="required-button "
              />
            ) : (
              <></>
            )}
          </div>
        )}
        {floatLabelProps?.text && (
          <label
            className={`custom-label ${floatLabelProps.inputNumberLabelClassName}`}
            htmlFor={floatLabelProps.id}
          >
            {floatLabelProps.text}
            <span className={floatLabelProps.inputNumberLabelSpanClassName}>
              {floatLabelProps.spanText}
            </span>
          </label>
        )}
      </div>
    </>
  );
};

export const Password = (props) => {
  const {
    passwordParentClassName,
    passwordParentStyle,
    labelProps,
    requiredButton,
    passwordClassName,
    hasError,
    float,
    floatLabelProps,
    ...restProps
  } = props && props.passwordProps;

  return (
    <div
      className={`custom_input_password ${passwordParentClassName}  ${
        float ? "p-float-label" : ""
      }`}
    >
      {labelProps?.text && (
        <div
          className={`flex gap-1 align-items-center ${
            labelProps.labelMainClassName || "pb-1"
          }`}
        >
          <NormalLabel
            labelClass={labelProps.passwordLabelClassName}
            text={labelProps.text}
            labelStyle={labelProps.parentStyle}
            spanText={labelProps.spanText}
            spanClass={labelProps.passwordLabelSpanClassName}
          />
          {requiredButton ? (
            <Btn
              buttonProps={{
                text: "必須",
                custom: "custom-button-required",
                buttonClass: "cursor-auto",
              }}
              parentClassName="required-button "
            />
          ) : (
            <></>
          )}
        </div>
      )}
      <Pwd
        className={`passwordM ${passwordClassName} ${
          hasError ? "p-invalid bg-red-100" : ""
        }`}
        toggleMask
        feedback={false}
        autoComplete={process.env.NEXT_PUBLIC_AUTOCOMPLETE_PASSWORD}
        {...restProps}
      />
      {floatLabelProps?.text && (
        <label
          className={`custom-label ${floatLabelProps.passwordLabelClassName}`}
          htmlFor={floatLabelProps.id}
        >
          {floatLabelProps.text}
          <span className={floatLabelProps.passwordLabelSpanClassName}>
            {floatLabelProps.spanText}
          </span>
        </label>
      )}
    </div>
  );
};

export const InputGroup = (props) => {
  const {
    inputGroupParentClassName,
    inputGroupParentStyle,
    labelProps,
    requiredButton,
    inputGroupClassName,
    hasError,
    leftIcon,
    rightIcon,
    float,
    floatLabelProps,
    ...restProps
  } = props && props.inputGroupProps;

  return (
    <>
      {labelProps?.text && (
        <div
          className={`flex gap-1 align-items-center ${
            labelProps.labelMainClassName || "pb-1"
          }`}
        >
          <NormalLabel
            labelClass={labelProps.inputGroupLabelClassName}
            text={labelProps.text}
            spanText={labelProps.spanText}
            spanClass={labelProps.inputGroupLabelSpanClassName}
            labelStyle={labelProps.parentStyle}
          />
          {requiredButton ? (
            <Btn
              buttonProps={{
                text: "必須",
                custom: "custom-button-required",
                buttonClass: "cursor-auto",
              }}
              parentClassName="required-button "
            />
          ) : (
            <></>
          )}
        </div>
      )}
      <div
        className={`p-inputgroup ${inputGroupParentClassName}  ${
          float ? "p-float-label" : ""
        }`}
        style={inputGroupParentStyle || { height: "40px" }}
      >
        {leftIcon && (
          <span
            className={`p-inputgroup-addon ${leftIcon.leftClassName} `}
            style={leftIcon.leftStyleName}
          >
            <i className={`${leftIcon.icon} `}>{leftIcon.antLeftIcon}</i>
          </span>
        )}
        <InputText
          className={`custom_input ${inputGroupClassName} ${
            hasError ? "p-invalid bg-red-100" : ""
          }`}
          autoComplete={AUTO_COMPLETE}
          {...restProps}
        />
        {floatLabelProps?.text && (
          <label
            className={`custom-label ${floatLabelProps.inputGroupLabelClassName}`}
            htmlFor={floatLabelProps.id}
          >
            {floatLabelProps.text}
            <span className={floatLabelProps.inputGroupLabelSpanClassName}>
              {floatLabelProps.spanText}
            </span>
          </label>
        )}
        {rightIcon && (
          <span
            className={`p-inputgroup-addon ${rightIcon.rightClassName}`}
            style={rightIcon.rightStyle}
          >
            <i className={`${rightIcon.icon} `}>{rightIcon.antRightIcon}</i>
          </span>
        )}
      </div>
    </>
  );
};

export const InputDropdown = (props) => {
  const {
    inputDropdownParentClassName,
    inputDropdownParentStyle,
    labelProps,
    requiredButton,
    inputDropdownClassName,
    inputPanelDropdownClassName,
    customPanelDropdownClassName,
    float,
    floatLabelProps,
    ...restProps
  } = props && props.inputDropdownProps;

  return (
    <div
      className={`custom-select ${inputDropdownParentClassName} ${
        float ? "p-float-label" : ""
      }`}
      style={inputDropdownParentStyle}
    >
      {labelProps?.text && (
        <div
          className={`flex gap-1 align-items-center ${
            labelProps.labelMainClassName || "pb-1"
          }`}
        >
          <NormalLabel
            labelClass={labelProps.inputDropdownLabelClassName}
            text={labelProps.text}
            spanText={labelProps.spanText}
            spanClass={labelProps.inputDropdownLabelSpanClassName}
            labelStyle={labelProps.parentStyle}
          />
          {requiredButton ? (
            <Btn
              buttonProps={{
                text: "必須",
                custom: "custom-button-required",
                buttonClass: "cursor-auto",
              }}
              parentClassName="required-button "
            />
          ) : (
            <></>
          )}
        </div>
      )}
      <Dropdown
        className={`${inputDropdownClassName}`}
        panelClassName={`custom_dropdownPanel ${inputPanelDropdownClassName} ${customPanelDropdownClassName}`}
        {...restProps}
      />
      {floatLabelProps?.text && (
        <label
          className={`custom-label ${floatLabelProps.inputDropdownLabelClassName}`}
          htmlFor={floatLabelProps.id}
        >
          {floatLabelProps.text}
          <span className={floatLabelProps.inputDropdownLabelSpanClassName}>
            {floatLabelProps.spanText}
          </span>
        </label>
      )}
    </div>
  );
};

export const MultiSelect = (props) => {
  const {
    multiSelectParentClassName,
    multiSelectParentStyle,
    labelProps,
    requiredButton,
    multiSelectClassName,
    float,
    floatLabelProps,
    ...restProps
  } = props && props.multiSelectProps;

  return (
    <div
      className={`custom-select ${multiSelectParentClassName} ${
        float ? "p-float-label" : ""
      }`}
      style={multiSelectParentStyle}
    >
      {labelProps?.text && (
        <div
          className={`flex gap-1 align-items-center ${
            labelProps.labelMainClassName || "pb-1"
          }`}
        >
          <NormalLabel
            labelClass={labelProps.inputMultiSelectLabelClassName}
            text={labelProps.text}
            spanText={labelProps.spanText}
            labelStyle={labelProps.parentStyle}
            spanClass={labelProps.inputMultiSelectLabelSpanClassName}
          />
          {requiredButton ? (
            <Btn
              buttonProps={{
                text: "必須",
                custom: "custom-button-required",
                buttonClass: "cursor-auto",
              }}
              parentClassName="required-button "
            />
          ) : (
            <></>
          )}
        </div>
      )}
      <MulSel className={`${multiSelectClassName}`} {...restProps} />
      {floatLabelProps?.text && (
        <label
          className={`custom-label ${floatLabelProps.inputMultiSelectLabelClassName}`}
          htmlFor={floatLabelProps.id}
        >
          {floatLabelProps.text}
          <span className={floatLabelProps.inputMultiSelectLabelSpanClassName}>
            {floatLabelProps.spanText}
          </span>
        </label>
      )}
    </div>
  );
};

export const DropdownSelect = (props) => {
  const {
    dropDownSelectParentClassName,
    dropDownSelectParentStyle,
    items,
    icon,
    text,
  } = props;

  return (
    <div
      className={`custom-select ${dropDownSelectParentClassName}`}
      style={dropDownSelectParentStyle}
    >
      <Drp overlay={items}>
        <button type="button" className="p-link layout-topbar-button">
          {text && <div className="header-dropdown-name">{text}</div>}
          {icon}
        </button>
      </Drp>
    </div>
  );
};

export const InputGroups = (props) => {
  const { custom, parentClass, parentStyle, inputGroupProps = {} } = props;
  const {
    leftClass,
    leftStyle,
    leftIcon,
    onLeftClick,
    type,
    inputClass,
    value,
    id,
    name,
    style,
    keyfilter,
    placeholder,
    onChange,
    onBlur,
    ref,
    required,
    readOnly,
    disabled,
    rightClass,
    rightStyle,
    rightIcon,
    onRightClick,
    leftDisabled,
    rightDisabled,
    maxLength,
    minLength,
    ...restProps
  } = inputGroupProps;

  return (
    <div
      className={`p-inputgroup flex-1${
        custom || "custom_input"
      } ${parentClass} `}
      style={parentStyle}
    >
      <Button
        type="button"
        icon={`${leftIcon}`}
        className={`${leftClass}`}
        style={leftStyle}
        onClick={onLeftClick}
        disabled={leftDisabled}
      />
      {props.supplies && (
        <Button
          type="button"
          icon={`${rightIcon}`}
          className={`${rightClass}`}
          style={rightStyle}
          onClick={onRightClick}
          disabled={rightDisabled}
        />
      )}
      <InputText
        type={type || "text"}
        className={`${inputClass}`}
        value={value}
        id={id}
        name={name}
        style={style}
        keyfilter={keyfilter}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        autoComplete={AUTO_COMPLETE}
        ref={ref}
        required={required}
        readOnly={readOnly}
        disabled={disabled}
        maxLength={maxLength}
        minLength={minLength}
        {...restProps}
      />
      {props.register && (
        <Button
          type="button"
          icon={`${rightIcon}`}
          className={`${rightClass}`}
          style={rightStyle}
          onClick={onRightClick}
          disabled={rightDisabled}
        />
      )}
    </div>
  );
};

export const OTPInput = (props) => {
  const { parentClassName, parentStyle, otpInputProps = {} } = props;
  const { length, otpClassName, otpStyle, ...restProps } = otpInputProps;

  const [otp, setOtp] = useState(new Array(length).fill(""));

  const handleChange = (element, index) => {
    const value = element.value;
    let newOtp = [...otp];

    // If a digit is added
    if (/^[0-9]$/.test(value)) {
      newOtp[index] = value;
      setOtp(newOtp);

      // Automatically focus the next input if a digit is entered
      if (index < length - 1) {
        document.getElementById(`otp-input-${index + 1}`).focus();
      }
    }
    // If a digit is removed
    else if (value === "") {
      newOtp.splice(index, 1);
      newOtp.push("");
      setOtp(newOtp);

      // Move focus back to the previous input if backspace is pressed and the current input is empty
      if (index > 0) {
        document.getElementById(`otp-input-${index - 1}`).focus();
      }
    }
  };

  // function ensures that focus moves back to the previous input when the Backspace key is pressed and the current input is empty.
  const handleKeyDown = (event, index) => {
    if (event.key === "Backspace" && otp[index] === "") {
      if (index > 0) {
        document.getElementById(`otp-input-${index - 1}`).focus();
      }
    }
  };

  return (
    <div className={`${parentClassName}`} style={parentStyle}>
      {otp.map((data, index) => (
        <InputText
          key={index}
          id={`otp-input-${index}`}
          type="text"
          maxLength="1"
          value={data}
          autoComplete={AUTO_COMPLETE}
          inputMode="numeric"
          onChange={(e) => handleChange(e.target, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          className={`${otpClassName}`}
          style={
            {
              width: "40px",
              height: "40px",
              marginRight: "10px",
              textAlign: "center",
            } || otpStyle
          }
          {...restProps}
        />
      ))}
    </div>
  );
};
