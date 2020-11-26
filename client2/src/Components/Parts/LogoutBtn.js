import Axios from "axios";
import React from "react";
import { navigate } from "@reach/router";

export const LogoutBtn = () => {
    const onLogout = async (e) => {
        e.preventDefault();

        // remove player from game
        const removePlayer = await Axios.post(
            "http://localhost:8000/game/update/removePlayer/" +
                localStorage.getItem("gameId"),
            {
                playerId: localStorage.getItem("activeUserId"),
            }
        );
        // find player and delete
        await Axios.post(
            "http://localhost:8000/player/delete/" +
                localStorage.getItem("activeUserId")
        ).then((resp) => {
            console.log(resp);
        });

        // if last player then delete game
        if (removePlayer.data.data.Participants === undefined) {
            Axios.post(
                "http://localhost:8000/game/delete/" +
                    localStorage.getItem("gameId")
            ).then((resp) => {
                console.log(resp);
            });
        }

        // clear local storage
        localStorage.removeItem("activeUserId");
        localStorage.removeItem("gameCode");
        localStorage.removeItem("gameId");
        // navigate to join page
        navigate("/");
    };
    return (
        <div>
            <button onClick={onLogout}>Leave Game</button>
        </div>
    );
};
