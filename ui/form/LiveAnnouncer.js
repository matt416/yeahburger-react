import React, { useState } from 'react'
let liveArea = React.createRef();

// Simplified version of react-aria LiveAnnouncer
// https://www.npmjs.com/package/@react-aria/live-announcer

export const announce = (message, mode) => {
  liveArea.current.announce(message, mode)
}

export default function LiveAnnouncer(){

  let [assertiveMessage, setAssertiveMessage] = useState("");
  let [politeMessage, setPoliteMessage] = useState("");

  const announce = (message, mode = "polite") => {
    setTimeout(() => {
      if (mode === 'assertive'){
        setAssertiveMessage(message)
      } else {
        setPoliteMessage(message)
      }
    }, 100) // Timeout ensures that the component is available
  }

  React.useImperativeHandle(liveArea, () => ({ announce }))

  return <div ref={ liveArea } className="sr-only">
    <div aria-live="assertive" role="log" aria-relevant="additions text">{ assertiveMessage }</div>
    <div aria-live="polite" role="log" aria-relevant="additions text">{ politeMessage }</div>
  </div>
}


