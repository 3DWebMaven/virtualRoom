const theme = {
  background: "#f5f5f5",
  fontFamily: "Arial, sans-serif",
  headerBgColor: "#4a6fa5",
  headerFontColor: "#fff",
  headerFontSize: "16px",
  botBubbleColor: "#a9a9a9",
  botFontColor: "#fff",
  userBubbleColor: "#fff",
  userFontColor: "#4a4a4a"
}

const bubbleOptionStyle = {
  backgroundColor: "#ffffff",
  borderRadius: "12px",
  border: "1px solid #e3e8ef",
  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
  padding: "12px 16px",
  margin: "0",
  fontSize: "15px",
  fontWeight: "500",
  color: "#1a365d",
  transition: "all 0.25s ease",
  cursor: "pointer",
  ":hover": {
    backgroundColor: "#f8fafc",
    transform: "translateY(-1px)",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.12)"
  },
  ":active": {
    transform: "translateY(0)",
    backgroundColor: "#edf2f7"
  }
}

// MESSAGE BUBBLES (bot responses)
const bubbleStyle = {
  backgroundColor: "#4a6fa5",
  borderRadius: "12px 12px 12px 0",
  padding: "14px 18px",
  margin: "8px 0",
  fontSize: "15px",
  fontWeight: "400",
  color: "#ffffff",
  lineHeight: "1.5",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.05)"
}

const config = {
  hideUserAvatar: false,
  hideBotAvatar: false,
  bubbleOptionStyle,
  bubbleStyle,
  theme
}

export default config
