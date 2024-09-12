import React from "react";
import "./Message.css";

/** Message commponent that wraps around children. */

function Message({children}) {
  return (
    <div className="Message">
      {children}
    </div>
  )
}

export default Message;
