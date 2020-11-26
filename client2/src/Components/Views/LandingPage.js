import { navigate } from "@reach/router";
import Axios from "axios";
import React, { useState } from "react";
import { GameForms } from "../Helpers/GameForms";

export const LandingPage = () => {
    const [createGameErr, setCreateGameErr] = useState("");
    const [joinGameErr, setJoinGameErr] = useState("");

    const joinGame = async (e) => {
        if (e.displayName.value === "" && e.gameCode.value === "") {
            setJoinGameErr("You need a Display Name and a Game Code");
        } else if (e.displayName.value === "") {
            setJoinGameErr("You need a Display Name");
        } else if (e.gameCode.value === "") {
            setJoinGameErr("You need a Game Code");
        }
        // create player
        await Axios.post("http://localhost:8000/player/new", {
            DisplayName: e.displayName.value,
            GameCode: e.gameCode.value,
        })
            .then((resp) => {
                localStorage.setItem("activeUserId", resp.data.data._id);
                localStorage.setItem("gameCode", resp.data.data.GameCode);
            })
            .catch((err) => console.log(err));

        // update game with added player's id
        await Axios.post(
            "http://localhost:8000/game/update/addPlayer/" +
                localStorage.getItem("gameCode"),
            {
                id: localStorage.getItem("activeUserId"),
            }
        )
            .then((resp) => {
                console.log(resp);
                localStorage.setItem("gameId", resp.data.data._id);
                navigate("/dashboard");
            })
            .catch((err) => console.log(err));
    };

    const createNewGame = async (e) => {
        // create a game code
        if (e.displayName.value === "") {
            console.log("error");
            setCreateGameErr("You need a Display Name");
            return;
        }
        let gameCode = Math.random().toString(36).substring(7);

        // create game
        await Axios.post("http://localhost:8000/game/new", {
            GameCode: gameCode,
        }).then((resp) => {
            // console.log(resp);
            localStorage.setItem("gameId", resp.data.data._id);
        });

        // create player with game code
        await Axios.post("http://localhost:8000/player/new", {
            DisplayName: e.displayName.value,
            GameCode: gameCode,
        }).then((resp) => {
            // console.log(resp);
            localStorage.setItem("activeUserId", resp.data.data._id);
            localStorage.setItem("gameCode", resp.data.data.GameCode);
        });

        // update game with added player's id
        await Axios.post(
            "http://localhost:8000/game/update/addPlayer/" +
                localStorage.getItem("gameCode"),
            {
                id: localStorage.getItem("activeUserId"),
            }
        ).then((resp) => {
            // console.log(resp);
            navigate("/dashboard");
        });
    };
    return (
        <div>
            <h1>LandingPage</h1>
            <section>
                <h3>Create New Game</h3>
                {createGameErr !== "" ? (
                    <span className="errorMsg">{createGameErr}</span>
                ) : (
                    ""
                )}
                <GameForms gameType={"Create"} onReturn={createNewGame} />
            </section>
            <section>
                <h3>Join a Game</h3>
                {joinGameErr !== "" ? (
                    <span className="errorMsg">{joinGameErr}</span>
                ) : (
                    ""
                )}
                <GameForms gameType={"Join"} onReturn={joinGame} />
            </section>
        </div>
    );
};
