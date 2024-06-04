import React from "react";
import { MdSettings } from "react-icons/md";
import { BsHouseGearFill } from "react-icons/bs";

import AppMenuitem from '@/layout/AppMenuitem';
import { MenuProvider } from '@/layout/context/menucontext';

const AppMenu = () => {
    // Side bar information
    const sideBar = [
        {
            label: "Dashboard",
            icon: <MdSettings size={16} />,
            class: "without-top-element",
            items: [
                {
                    label: "Dashboard",
                    icon: <BsHouseGearFill size={16} />,
                },
            ]
        },
    ];

    return (
        <MenuProvider>
            <ul className="layout-menu">
                {sideBar.map((item, i) => {
                    return !item.seperator ? <AppMenuitem item={item} root={true} active={item.active} index={i} key={i} /> : <li className="menu-separator"></li>;
                })}
            </ul>
        </MenuProvider>
    );
};

export default AppMenu;
