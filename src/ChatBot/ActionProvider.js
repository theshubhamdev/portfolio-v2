import React from 'react';
import { handler } from './openai';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const handleMessage = async (mes) => {
    const message = await handler(mes);
    const botMessage = createChatBotMessage(message.data.choices[0].text.trim());
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
