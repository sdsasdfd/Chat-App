import React from "react";
import { BsSend } from "react-icons/bs";
const MessageInput = () => {
  return (
    <div>
      <div className="px-4 py-3">
        <div className="w-full">
          <input
            type="text"
            className="border text-sm rounded-lg w-full p-2.5 bg-gray-700 block border-gray-600 text-white "
            placeholder="Send a message"
          />
          <button
            type="submit"
            className="absolute inset-y-0 end-0 flex items-center pe-3"
          >
            <BsSend />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MessageInput;
