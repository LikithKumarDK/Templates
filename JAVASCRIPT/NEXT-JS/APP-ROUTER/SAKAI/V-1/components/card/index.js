import Image from "next/image";
import { Card } from "primereact/card";

import { ContentHeader, CustomHeader } from "@/components/header";
import { Button } from "@/components/button";

export const StepsCard = (props) => {
  const { parentClassName, parentStyle, stepsCardProps = {} } = props;
  const {
    stepCardClassName,
    stepCardStyle,
    logo,
    topHeaderProps,
    imageProps,
    content,
    bottomHeaderProps,
  } = stepsCardProps;

  return (
    <div className={`${parentClassName}`} style={parentStyle}>
      <Card
        className={`flex justify-content-center align-items-center border-dashed border-3	border-primary ${stepCardClassName}`}
        style={stepCardStyle}
      >
        {logo ? logo : <></>}
        {topHeaderProps?.text && (
          <>
            <CustomHeader
              customParentClassName="justify-content-center"
              header={topHeaderProps.text}
              headerClass={`text-xl font-bold ${topHeaderProps.className}`}
            />
          </>
        )}
        {imageProps?.src && (
          <div className="flex justify-content-center">
            <Image
              src={imageProps.src}
              width={imageProps.width}
              height={imageProps.height}
              alt={imageProps.alt}
            />
          </div>
        )}
        {content ? content : <></>}
        {bottomHeaderProps?.text && (
          <>
            <CustomHeader
              header={bottomHeaderProps.text}
              headerClass={`text-xl font-bold ${bottomHeaderProps.className}`}
            />
          </>
        )}
      </Card>
    </div>
  );
};

export const ContentCard = (props) => {
  const { parentClassName, content } = props;

  return (
    <div className={`${parentClassName}`}>
      <div className="card border-dotted-left border-1 border-500">
        {content?.map((item, index) => (
          <div className="card-text" key={index}>
            <div className="grid">
              <div className="flex">
                <div className="col-1">
                  <span className="flex justify-end card-title">
                    {item.title}
                  </span>
                </div>
                <div className="col-11 card-description ">
                  <span>{item.description}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="link-style flex justify-end">
          <Button
            buttonProps={{
              text: "詳細を見る",
              link: true,
              custom: "",
            }}
            parentClassName={"custom-details-button"}
          />
        </div>
      </div>
    </div>
  );
};
export default ContentCard;

export const ContentCardDynamic = (props) => {
  const { parentClassName, content } = props;
  return (
    <div className={`${parentClassName}`}>
      {content.map((item, index) => (
        <div key={index} className="mt-2">
          <ContentHeader
            headerText={item.headerText}
            contentText={item.contentText}
            buttonText={item.buttonText}
            buttonSymbol
            status={item.status}
            parentClassName="header_class"
          />
          <div className="card border-dotted-left border-1 border-500">
            <div className="card-text">
              <div className="grid">
                {item.titles?.map((title, idx) => (
                  <div className="flex" key={idx}>
                    <div className="xl:col-1 md:col-2 sm:col-3  xs:col-4">
                      <span className="flex justify-end card-title ">
                        {title}
                      </span>
                    </div>
                    <div className="xl:col-11 md:col-10 sm:col-9 xs:col-8 card-description">
                      <span>{item.description[idx]}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="link-style flex justify-end">
              <Button
                buttonProps={{
                  text: "詳細を見る",
                  link: true,
                  custom: "",
                  onClick: item.linkClick,
                }}
                parentClassName={"custom-details-button"}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
