import React, {
    forwardRef,
    useContext,
    useImperativeHandle,
    useRef,
} from "react";
import { useRouter } from "next/navigation";
import _ from "lodash";

import { LayoutContext } from "@/layout/context/layoutcontext";
import { ImageComponent, DateTimeDisplay } from "@/components";

const AppTopbar = forwardRef((props, ref) => {
    const {
        layoutConfig,
        onMenuToggle,
    } = useContext(LayoutContext);
    const router = useRouter();

    const menubuttonRef = useRef(null);
    const topbarmenuRef = useRef(null);
    const topbarmenubuttonRef = useRef(null);

    useImperativeHandle(ref, () => ({
        menubutton: menubuttonRef.current,
        topbarmenu: topbarmenuRef.current,
        topbarmenubutton: topbarmenubuttonRef.current,
    }));

    /**
     * App top bar right view
     */
    const topBarRight = (
        <div ref={topbarmenuRef} className="header-details-second">
            <div className='header-details-second-date-time-picker mr-3'>
                <DateTimeDisplay />
            </div>
        </div>
    );

    return (
        <React.Fragment>
            <div className="layout-topbar">
                {layoutConfig.menuMode === "static" && (
                    <div className="logo-details">
                        <div className="logo-view cursor-pointer">
                            <div className="hamburger px-2">
                                <button
                                    ref={menubuttonRef}
                                    type="button"
                                    className="p-link layout-topbar-button"
                                    onClick={onMenuToggle}
                                >
                                    <i className="pi pi-bars" />
                                </button>
                            </div>
                            <ImageComponent
                                imageProps={{
                                    src: ``,
                                    width: 220,
                                    height: 45,
                                    alt: "logo",
                                    text: "テレネット",
                                    onClick: () => {
                                        router.push("/");
                                    },
                                }}
                            />
                        </div>
                    </div>
                )}
                <div
                    className="header-details"
                >
                    {layoutConfig.menuMode === "static" && (
                        <div className="hamburger">
                            <button
                                ref={menubuttonRef}
                                type="button"
                                className="p-link layout-topbar-button"
                                onClick={onMenuToggle}
                            >
                                <i className="pi pi-bars" />
                            </button>
                        </div>
                    )}
                    <div
                        className={`header-details-first-view`}
                    >
                        <div
                            title={"Header"}
                            className="header-details-first flex flex-column"
                        >
                            <div
                                className={`text-base white-space-nowrap overflow-hidden text-overflow-ellipsis cursor-pointer`}
                            >
                                Header
                            </div>
                        </div>
                        {topBarRight}
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
});

AppTopbar.displayName = "AppTopbar";
export default AppTopbar;