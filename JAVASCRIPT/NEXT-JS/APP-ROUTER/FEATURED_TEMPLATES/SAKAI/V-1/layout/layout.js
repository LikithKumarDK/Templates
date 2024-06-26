'use client';

import React, { useContext, useEffect, useRef } from 'react';
import Router from 'next/router';
import { useEventListener, useMountEffect, useUnmountEffect } from 'primereact/hooks';
import { classNames, DomHandler } from 'primereact/utils';
import PrimeReact from 'primereact/api';
import { ProgressSpinner } from 'primereact/progressspinner';

import AppFooter from '@/layout/AppFooter';
import AppSidebar from '@/layout/AppSidebar';
import AppTopbar from '@/layout/AppTopbar';
import { LayoutContext } from '@/layout/context/layoutcontext';

const Layout = (props) => {
    const { layoutConfig, layoutState, setLayoutState, loader } = useContext(LayoutContext);
    const topbarRef = useRef(null);
    const sidebarRef = useRef(null);

    const [bindMenuOutsideClickListener, unbindMenuOutsideClickListener] = useEventListener({
        type: 'click',
        listener: (event) => {
            const isOutsideClicked = !(sidebarRef.current.isSameNode(event.target) || sidebarRef.current.contains(event.target) || topbarRef.current.menubutton.isSameNode(event.target) || topbarRef.current.menubutton.contains(event.target));
            if (isOutsideClicked) {
                hideMenu();
            }
        }
    });

    const [bindProfileMenuOutsideClickListener, unbindProfileMenuOutsideClickListener] = useEventListener({
        type: 'click',
        listener: (event) => {
            const isOutsideClicked = !(
                topbarRef.current.topbarmenu.isSameNode(event.target) ||
                topbarRef.current.topbarmenu.contains(event.target) ||
                topbarRef.current.topbarmenubutton.isSameNode(event.target) ||
                topbarRef.current.topbarmenubutton.contains(event.target)
            );

            if (isOutsideClicked) {
                hideProfileMenu();
            }
        }
    });

    const hideMenu = () => {
        setLayoutState((prevLayoutState) => ({ ...prevLayoutState, overlayMenuActive: false, staticMenuMobileActive: false, menuHoverActive: false }));
        unbindMenuOutsideClickListener();
        unblockBodyScroll();
    };

    const hideProfileMenu = () => {
        setLayoutState((prevLayoutState) => ({ ...prevLayoutState, profileSidebarVisible: false }));
        unbindProfileMenuOutsideClickListener();
    };

    const blockBodyScroll = () => {
        DomHandler.addClass('blocked-scroll');
    };

    const unblockBodyScroll = () => {
        DomHandler.removeClass('blocked-scroll');
    };

    useMountEffect(() => {
        PrimeReact.ripple = true;
    })

    useEffect(() => {
        if (layoutState.overlayMenuActive || layoutState.staticMenuMobileActive) {
            bindMenuOutsideClickListener();
        }

        layoutState.staticMenuMobileActive && blockBodyScroll();
    }, [layoutState.overlayMenuActive, layoutState.staticMenuMobileActive]);

    useEffect(() => {
        if (layoutState.profileSidebarVisible) {
            bindProfileMenuOutsideClickListener();
        }
    }, [layoutState.profileSidebarVisible]);

    useEffect(() => {
        const handleRouteChangeComplete = (url) => {
            hideMenu();
            hideProfileMenu();
        };

        Router.events.on('routeChangeComplete', handleRouteChangeComplete);

        return () => {
            Router.events.off('routeChangeComplete', handleRouteChangeComplete);
        };
    }, []);

    useUnmountEffect(() => {
        unbindMenuOutsideClickListener();
        unbindProfileMenuOutsideClickListener();
    });

    const containerClass = classNames('layout-wrapper', {
        'layout-overlay': layoutConfig.menuMode === 'overlay',
        'layout-static': layoutConfig.menuMode === 'static',
        'layout-static-inactive': layoutState.staticMenuDesktopInactive && layoutConfig.menuMode === 'static',
        'layout-overlay-active': layoutState.overlayMenuActive,
        'layout-mobile-active': layoutState.staticMenuMobileActive,
        'p-input-filled': layoutConfig.inputStyle === 'filled',
        'p-ripple-disabled': !layoutConfig.ripple
    });

    return (
        <React.Fragment>
            <div className={containerClass}>
                <AppTopbar ref={topbarRef} />
                <div className="layout-sidebar">
                    <div ref={sidebarRef} className='layout_sidebar_scroll'>
                        <AppSidebar ref={topbarRef}/>
                    </div>
                </div>
                <div className="layout-main-container">
                    <div className="layout-main">
                        {props.children}
                    </div>
                    <AppFooter />
                </div>
                {loader && (
                    <div className="layout-mask-loader">
                        <ProgressSpinner className='progress-spinner' strokeWidth="8" fill="transparent" animationDuration=".5s" />
                    </div>
                )}
            </div>
        </React.Fragment >
    );
};

export default Layout;