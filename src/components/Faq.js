import ChatBot from "react-simple-chatbot"

import steps from "./Steps"
import config from "./Chatbot-Theme"
import "./faq.css"
import { useEffect } from "react"

const Faq = () => {
  useEffect(() => {
    const chatContainer = document.querySelector(".rsc-content")
    if (!chatContainer) return

    const observer = new MutationObserver(() => {
      chatContainer.scrollTop = chatContainer.scrollHeight
    })

    observer.observe(chatContainer, { childList: true, subtree: true })

    return () => observer.disconnect() // Cleanup
  }, [])

  return (
    <div className="faq-container">
      <div className="faq-bot-model-container"> </div>
      <div className="faq-chat-container">
        <ChatBot
          steps={steps}
          {...config}
          width={"100%"}
          hideHeader={true}
          floatingStyle={{ height: "calc(100vh - 220px)" }}
          contentStyle={{ height: "calc(100vh - 220px)" }}
        />
      </div>
      <div className="faq-client-model-container"> </div>
    </div>
  )
}

export default Faq
