import React, { useEffect, useRef, useState } from "react"

interface Message {
  text: string
  type: string
}

interface ModelBoxprops {
  closeModal: () => void
  isModalVisible : boolean;
}

const Model_Box: React.FC<ModelBoxprops> = ({ closeModal, isModalVisible }) => {
  const [chatMessages, setChatMessages] = useState<Message[]>([])
  const [userInput, setUserInput] = useState("")
  const [receivedMessages, setReceivedMessages] = useState<string[]>([])
  const inputRef = useRef<HTMLInputElement>(null)

  const handleGenerateClick = () => {
    if (userInput) {
      setChatMessages((prevMessages) => [
        ...prevMessages,
        { text: userInput, type: "user" },
        {
          text: "Thank you for the opportunity! If you have any more questions or if there's anything else I can help you with, feel free to ask.",
          type: "system"
        }
      ])
      setUserInput("") // Clear user input
    }
  }

  const handleInsertClick = () => {
    const replyText =
      "Thank you for the opportunity! If you have any more questions or if there's anything else I can help you with, feel free to ask."
    setReceivedMessages((prevReceived) => [...prevReceived, replyText])
  }

  const shouldRenderInsertButton = chatMessages.some(
    (message) => message.type === "user"
  )

//   I have tried this but not working/////////////////////////////////////////////////////////////////////////////////
//   useEffect(() => {
//     const handleDocumentClick = (event: MouseEvent) => {
//       const modal = document.querySelector(".modal-box");
  
//       if (modal && !modal.contains(event.target as Node)) {
//         closeModal(); // Close the modal
//       }
//     };
  
//     document.addEventListener("click", handleDocumentClick);
  
//     // Clean up the event listener when the component unmounts
//     return () => {
//       document.removeEventListener("click", handleDocumentClick);
//     };
//   }, [isModalVisible, closeModal]);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  

  return (
    <>
      <div className="modal-box">
        {receivedMessages.length === 0 && (
          <div className="border fixed flex items-center justify-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white  shadow-lg m-[-25px] w-[35vw] h-auto">
            <div className="p-5 rounded-lg shadow-lg text-center w-full flex flex-col">
              <div className="flex flex-col mb-4">
                {chatMessages.map((message, index) => (
                  <div
                    key={index}
                    className={`text-white p-2 mb-2 rounded ${
                      message.type === "user"
                        ? "bg-blue-500 self-end"
                        : "bg-gray-500 self-start"
                    }`}
                    style={
                      message.type === "system"
                        ? { width: "75%", textAlign: "start" }
                        : undefined
                    }>
                    {message.text}
                  </div>
                ))}
              </div>
              <div className="flex mb-2">
                <input
                  ref={inputRef}
                  type="text"
                  className="border p-2 w-full"
                  placeholder="Enter your message"
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                />
              </div>
              <div className="flex  justify-end">
                {shouldRenderInsertButton && (
                  <button
                    className="bg-green-500 text-white p-2 rounded"
                    onClick={handleInsertClick}>
                    Insert
                  </button>
                )}
                <button
                  className="bg-blue-500 text-white p-2 rounded ml-2"
                  onClick={handleGenerateClick}>
                  Generate
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <div
        style={{
          backgroundColor: "#f2f1ee",
          position: "absolute",
          width: "95%",
          top: "352px",
          left: "403px",
          fontSize: "14px"
        }}>
        {receivedMessages.map((message, index) => (
          <p key={index}>{message}</p>
        ))}
      </div>
    </>
  )
}

export default Model_Box
