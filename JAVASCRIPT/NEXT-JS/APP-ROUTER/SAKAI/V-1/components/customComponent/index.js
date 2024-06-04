import React from "react";
import { ContentHeader } from "../header";
import { Button } from "../button";
import { RadioBtn } from "../radioButton";

const CustomComponent = (props) => {
  const { parentClassName, content } = props;

  return (
    <div className={`${parentClassName}`}>
      {content.map((item, index) => (
        <div key={index} className="mt-2">
          <ContentHeader
            headerText={item.headerText}
            text={item.text}
            parentClassName="header_class"
          />
          <div className="card border-dotted-left border-1 border-500">
            <div className="card-text">
              <div className="grid">
                {item.titles?.map((title, idx) => (
                  <div className="flex" key={idx}>
                    <div className=" lg:col-1 md:col-2 sm:col-3 xs:col-4 titleClass">
                      <span className="flex justify-end card-title ">
                        {title}
                      </span>
                    </div>
                    <div className=" lg:col-11 md:col-10 sm:col-9 xs:col-8 card-description ">
                      <span>{item.description[idx]}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {item.radioBtnProps && (
              <div className="flex items-center mt-2">
                <RadioBtn {...item.radioBtnProps} />
              </div>
            )}
            {item.customRadioBtn && (
              <div className="flex items-center mt-2">
                {item.customRadioBtn}
              </div>
            )}
            <div className="flex justify-end mt-2">
              {item.buttonProps && (
                <Button
                  buttonProps={item.buttonProps}
                  parentClassName={"custom-details-button"}
                />
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CustomComponent;
