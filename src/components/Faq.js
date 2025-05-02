import ChatBot from "react-simple-chatbot"
import { useEffect, useState } from "react"

import ModelCard from "./ModelCard"
import getSteps from "./Steps"
import config from "./Chatbot-Theme"
import "./faq.css"

const Faq = () => {
  const employeeModel = { rotation: [0.1, -0.8, 0], position: [-0.5, -15, -15], scale: 12, url: "/models/employee_chatbot.glb" }
  const clientModel = { rotation: [0.1, 3, 0], position: [-0.5, -17, -15], scale: 7, url: "/models/woman_6_o_chatbot.glb" }

  const [isEmployeePlaying, setIsEmployeePlaying] = useState(false)
  const [isClientPlaying, setIsClientPlaying] = useState(false)

  const optionCallback = () => {
    setIsClientPlaying(true)
    setTimeout(() => {
      setIsClientPlaying(false)
    }, 1500)
    setTimeout(() => {
      setIsEmployeePlaying(true)
    }, 1000)
    setTimeout(() => {
      setIsEmployeePlaying(false)
    }, 3500)
  }

  useEffect(() => {
    const chatContainer = document.querySelector(".rsc-content")
    if (!chatContainer) return

    const observer = new MutationObserver(() => {
      chatContainer.scrollTop = chatContainer.scrollHeight
    })

    observer.observe(chatContainer, { childList: true, subtree: true })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="faq-container">
      <div className="faq-bot-model-container">
        <ModelCard
          isPlaying={isEmployeePlaying}
          rotation={employeeModel.rotation}
          position={employeeModel.position}
          scale={employeeModel.scale}
          url={employeeModel.url}
        />
      </div>
      <div className="faq-chat-container">
        <ChatBot
          steps={getSteps(optionCallback)}
          {...config}
          width={"100%"}
          hideHeader={true}
          floatingStyle={{ height: "calc(100vh - 220px)" }}
          contentStyle={{ height: "calc(100vh - 220px)" }}
          botAvatar={"./employee.png"}
          userAvatar={"./client.png"}
        />
      </div>
      <div className="faq-client-model-container">
        <ModelCard
          isPlaying={isClientPlaying}
          rotation={clientModel.rotation}
          position={clientModel.position}
          scale={clientModel.scale}
          url={clientModel.url}
        />
      </div>
    </div>
  )
}

export default Faq
