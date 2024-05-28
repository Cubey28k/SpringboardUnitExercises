import React, { useState } from "react";
import "./EightBall.css";
import defaultAnswers from "./answers.json";
import { choice } from "./random";

/** EightBall: shows random answer and, on click, changes answer,
 *
 * Props:
 * - answers: array of {msg, color} objects
 *
 * State:
 * - answer: {msg, color} of current answer
 */

function EightBall({ answers = defaultAnswers }) {
    const initialAnswer = {
        msg: "Think of a question and click.",
        color: "black",
    };

    const [answer, setAnswer] = useState(initialAnswer);

    function handleClick() {
        setAnswer(choice(answers));
    }

    function handleRestart() {
        setAnswer(initialAnswer);
    }

    return (
        <div>
            <div
                className="EightBall"
                onClick={handleClick}
                style={{ backgroundColor: answer.color }}    
            >
                <b>{answer.msg}</b>
            </div>
            <button className="RestartButton" onClick={handleRestart}>Restart</button>
        </div>
    );
}

export default EightBall;