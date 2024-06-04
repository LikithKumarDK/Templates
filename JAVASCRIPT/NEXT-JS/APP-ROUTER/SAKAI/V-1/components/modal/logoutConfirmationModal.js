import React from "react";
import { Dialog } from "primereact/dialog";
import { useTranslation } from "next-i18next";

import { Button } from "@/components/button";

export default function LogoutConfirmationModal(props) {
  const { t } = useTranslation("translation");
  const { open, close } = props && props;

  return (
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
            <div className="modal-field-bottom-space text-center">
              <span>
                <i className="pi pi-sign-out text-primary text-5xl	"></i>
              </span>
            </div>
            <div className="font-bold text-lg text-center">
              {t("logout_confirmation_text")}
            </div>
            <div className="mt-4 flex gap-2">
              <div className="w-full">
                <Button
                  buttonProps={{
                    buttonClass: "w-12 back-button",
                    text: t("no"),
                    onClick: () => close(),
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
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
