import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import { BiArrowToLeft } from "react-icons/bi";

import { menuItem } from './ConstMenuData';

import "./Sidebar.css";

export function Sidebar({ children }) {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className="container">
            <div className="sidebar" style={{ width: isOpen ? "18vw" : "4vw" }}>
                <img
                    className="longshot_logo"
                    src="https://uploads-ssl.webflow.com/62a1d5337c2a860b919132f8/62baeb2e2cd714a19a955183_longshot%20logo.svg"
                    alt="Longshot Logo"
                />
                {menuItem.map((item, index) => (
                    <NavLink to={item.path} key={index} className="link">
                        <div className="icon">{item.icon}</div>
                        <div
                            className="icon_link_text"
                            style={{ display: isOpen ? "inline" : "none" }}
                        >
                            {item.name}
                        </div>
                    </NavLink>
                ))}
                <div className="bottom_section">
                    <div onClick={toggle}>
                        <span className="icon">
                            <BiArrowToLeft />
                        </span>
                        <span
                            style={{ display: isOpen ? "inline" : "none" }}
                            className="collapse"
                        >
                            Collapse
                        </span>
                    </div>
                </div>
            </div>
            <main>{children}</main>
        </div>
    );
}