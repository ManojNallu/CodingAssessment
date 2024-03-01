import cssText from "data-text:~style.css"
import type { PlasmoCSConfig } from "plasmo"

import { CountButton } from "~features/count-button"
import MessageInputFeild from "~features/message-inp-feild"


export const config: PlasmoCSConfig = {
  matches: ["https://*.linkedin.com/*"]
}

export const getStyle = () => {
  const style = document.createElement("style")
  style.textContent = cssText
  return style
}

const PlasmoOverlay = () => {
  return (
    <>
      <div className="z-50 flex fixed top-32 right-8">
        <CountButton />
      </div>
      <MessageInputFeild />
    </>
  )
}

export default PlasmoOverlay
