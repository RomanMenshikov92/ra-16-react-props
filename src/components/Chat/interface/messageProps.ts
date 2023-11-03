export default interface MessageProps {
  from: {
    name: string;
  };
  message: {
    id: string;
    time: string;
    text?: string;
  };
}

export interface MessagesProps {
  messages: {
    id: string;
    from: {
      name: string;
    };
    type: string;
    time: string;
    text?: string;
  }[];
}

export interface Messages {
  id: string;
  from: {
    name: string;
  };
  type: string;
  time: string;
  text?: string;
}
