import Axios from "axios";
import React from "react";
import { GameForms } from "../Helpers/GameForms";

export const LandingPage = () => {
    const joinGame = (e) => {
        console.log(e);
        // console.log("joinGame");
    };

    const createNewGame = (e) => {
        // create a game code
        let gameCode = Math.random().toString(36).substring(7);

        // create game
        Axios.post("http://localhost:8000/game/new", {
            GameCode: gameCode,
        });

        // create player with game code
        Axios.post("http://localhost:8000/player/new", {
            DisplayName: e.displayName.value,
            GameCode: gameCode,
        }).then((resp) => {
            console.log(resp);
            localStorage.setItem("activeUserId", resp.data.data._id);
            localStorage.setItem("gameCode", resp.data.data.GameCode);
        });

        // update game with added player's id
        Axios.post(
            "http://localhost:8000/game/update/player/" +
                localStorage.getItem("gameCode"),
            {
                id: localStorage.getItem("activeUserId"),
            }
        );
    };
    return (
        <div>
            <h1>LandingPage</h1>
            <section>
                <h3>Create New Game</h3>
                <GameForms gameType={"Create"} onReturn={createNewGame} />
            </section>
            <section>
                <h3>Join a Game</h3>
                <GameForms gameType={"Join"} onReturn={joinGame} />
            </section>
        </div>
    );
};
