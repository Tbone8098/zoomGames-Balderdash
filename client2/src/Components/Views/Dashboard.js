import { navigate } from "@reach/router";
import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Navbar } from "../Parts/Navbar";

export const Dashboard = () => {
    const [activeUser, setActiveUser] = useState({});
    const [gameInfo, setGameInfo] = useState({});
    useEffect(() => {
        // Check to see if User is logged in
        if (localStorage.getItem("activeUserId") === null) {
            navigate("/");
        }
        // get activeUser Info
        Axios.get(
            "http://localhost:8000/player/" +
                localStorage.getItem("activeUserId")
        ).then((resp) => {
            console.log(resp);
            setActiveUser(resp.data.data);
        });
        // get Current Game Info
        Axios.get(
            "http://localhost:8000/game/" + localStorage.getItem("gameId")
        ).then((resp) => {
            setGameInfo(resp.data.data);
        });
    }, []);
    return (
        <div>
            <Navbar activeUser={activeUser} />
        </div>
    );
};
