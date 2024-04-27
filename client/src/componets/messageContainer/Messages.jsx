import React, { useEffect, useRef } from "react";
import Message from "./Message";
import useGetMessages from "../../hooks/useGetMessages";
import MessageSkeleton from "../skeleton/MessageSkeleton";

const Messages = () => {
  const { messages, loading } = useGetMessages();
  // console.log("messages", messages);
  const lastMessageRef = useRef();
  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [messages]);
  return (
    <div className="px-4 flex-1 overflow-auto">
      {!loading &&
        messages.length > 0 &&
        messages.map((message) => (
          <div ref={lastMessageRef} key={message._id}>
            <Message message={message} />
          </div>
        ))}
      {loading &&
        [...Array(3)].map((_, index) => <MessageSkeleton key={index} />)}
      {!loading && messages.length === 0 && (
        <p className="text-center text-white">
          Send a Message to start the conversation
        </p>
      )}
    </div>
  );
};

export default Messages;
