import React, { useState } from "react";
import { Dialog } from "primereact/dialog";
import { Formik } from "formik";
import * as Yup from "yup";
import { useTranslation } from "react-i18next";

import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { ValidationError } from "@/components/error";

export default function MapModal(props) {
  const { t } = useTranslation("translation");

  const { open, close, mapHeader } = props && props;

  const schema = Yup.object().shape({
    unit: Yup.number().required("単位を入力してください "),
  });

  const [initialValues, setInitialValues] = useState({
    unit: "",
  });

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(values, actions) => {
          console.log(values);
          close();
          actions.resetForm({ values: initialValues });
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          resetForm,
        }) => (
          <div>
            <Dialog
              className="new-custom-modal"
              visible={open}
              draggable={false}
              blockScroll={true}
              onHide={() => close()}
            >
              <div className={`modal-content`} style={{ padding: "0 0" }}>
                <div className="flex flex-column justify-center">
                  <div className="modal-field-bottom-space text-center flex justify-content-center">
                    <span>
                      <i className="pi pi-map-marker text-primary text-lg pr-2"></i>
                    </span>
                    <div className="text-lg font-medium">{mapHeader}</div>
                  </div>
                  <div
                    className="text-base modal-field-bottom-space"
                    style={{ fontWeight: "350" }}
                  >
                    {t("please_enter_300_2000_copies")}
                    <br />
                    {t("can_be_specified_in_units")}
                  </div>
                  <div className="flex justify-content-center modal-field-bottom-space">
                    <Input
                      inputProps={{
                        inputParentClassName: `${
                          errors.unit && touched.unit && "p-invalid pb-1"
                        }`,
                        labelProps: {
                          inputLabelClassName: "block",
                          spanText: "*",
                          inputLabelSpanClassName: "p-error",
                          labelMainClassName: "modal-label-field-space",
                        },
                        inputClassName: "w-full",
                        hasError: errors.unit && touched.unit && errors.unit,
                        name: "unit",
                        inputMode: "numeric",
                        value: values && values.unit,
                        onChange: handleChange,
                        onBlur: handleBlur,
                      }}
                    />
                    <div className="flex pl-1 align-items-center">部</div>
                  </div>
                  <div className="text-center">
                    <ValidationError
                      errorBlock={errors.unit && touched.unit && errors.unit}
                    />
                  </div>
                  <div className="mt-4 flex gap-2">
                    <div className="w-full">
                      <Button
                        buttonProps={{
                          buttonClass: "w-12 back-button",
                          text: t("no"),
                          onClick: () => {
                            close();
                            resetForm();
                          },
                        }}
                        parentClassName="back-button"
                      />
                    </div>
                    <div className=" w-full">
                      <Button
                        buttonProps={{
                          buttonClass: "w-12",
                          type: "submit",
                          text: t("yes"),
                          onClick: () => {
                            handleSubmit();
                          },
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Dialog>
          </div>
        )}
      </Formik>
    </>
  );
}
