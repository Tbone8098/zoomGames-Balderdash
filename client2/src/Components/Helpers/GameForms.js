import React from "react";

export const GameForms = (props) => {
    const onSubmit = (e) => {
        e.preventDefault();
        props.onReturn(e.target);
    };
    return (
        <div>
            <form onSubmit={onSubmit}>
                <section>
                    <label htmlFor="displayName">Display Name:</label>
                    <input type="text" name="displayName" id="displayName" />
                </section>
                {props.gameType === "Join" ? (
                    <section>
                        <label htmlFor="gameCode">Game Code:</label>
                        <input type="text" name="gameCode" id="gameCode" />
                    </section>
                ) : (
                    ""
                )}
                <button>{props.gameType}</button>
            </form>
        </div>
    );
};
