import MessageHistoryChild from "./MessageHistoryChild";
import messagesJson from "./data/messagesData.json";
import "./chat.css";

export default function Chat() {
  return (
    <div className="clearfix container">
      <div className="chat">
        <div className="chat-history">
          <MessageHistoryChild messages={messagesJson} />
        </div>
      </div>
    </div>
  );
}
