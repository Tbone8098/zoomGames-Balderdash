import React from "react";
import { LogoutBtn } from "./LogoutBtn";
import "../Style/Navbar.css";

export const Navbar = (props) => {
    const { activeUser } = props;
    return (
        <div className="Navbar">
            <section>
                <span className="score">{activeUser.TotalPoints}</span>Points
            </section>
            <section>
                <h1>Balderdash</h1>
                <p>Game Code: {activeUser.GameCode}</p>
            </section>
            <section>
                <LogoutBtn />
            </section>
        </div>
    );
};
