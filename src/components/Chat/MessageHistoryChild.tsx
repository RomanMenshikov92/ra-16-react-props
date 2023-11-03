import MessageChild from "./MessageChild";
import ResponseChild from "./ResponseChild";
import TypingChild from "./TypingChild";
import { MessagesProps, Messages } from "./interface/messageProps";

export default function MessageHistoryChild(props: MessagesProps) {
  const { messages } = props;
  if (messages.length === 0) return null;

  const messagesType = (message: Messages) => {
    const { id, time, text, from, type } = message;

    if (type === "message") {
      return <MessageChild key={id} from={from} message={{ id, time, ...(text && { text }) }} />;
    }

    if (type === "response") {
      return <ResponseChild key={id} from={from} message={{ id, time, ...(text && { text }) }} />;
    }

    if (type === "typing") {
      return <TypingChild key={id} from={from} message={{ id, time }} />;
    }

    return null;
  };

  return <ul className="message-history">{messages.map((message) => messagesType(message))}</ul>;
}
