import handler from "pages/api/chat/[message]";
import React from "react";

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const handleMessage = async (mes) => {
    const message = await handler({ message: mes });
    const botMessage = createChatBotMessage(message.data.choices[0].text);
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleMessage,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
