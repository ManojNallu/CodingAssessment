import React, { useEffect, useRef, useState } from "react"

import logo from "../../assets/icon.png"
import Model_Box from "./model_box"

const MessageInputField: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false)
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false)

  const handleonClick = () => {
    if (isModalVisible) {
      setIsModalVisible(false)
    } else {
      setIsModalVisible(true)
    }
  }

  const closeModal = () => {
    setIsModalVisible(false);
  }

  return (
    <>
      <div
        className="p-20 relative w-[32vw] top-[339px] left-[390px]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}>
        {isHovered && (
          <img
            className="size-9 flex fixed top-[410px] left-[775px] cursor-pointer"
            src={logo}
            alt="Logo"
            onClick={handleonClick}
          />
        )}
      </div>

      {isModalVisible && <Model_Box closeModal={closeModal} isModalVisible={isModalVisible} />}
    </>
  )
}

export default MessageInputField
