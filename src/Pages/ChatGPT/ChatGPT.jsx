import React, { useState, useEffect, useRef } from 'react';
import robot from "../../assets/gpt-robot.png";
import "./ChatGPT.scss";
import plane from "../../assets/plane.png";
import rotate from "../../assets/Rotate.png";

export default function ChatGPT() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isFlying, setIsFlying] = useState(false);
  const [isRotating, setIsRotating] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Новое состояние для анимации загрузки
  const chatMessagesRef = useRef(null);

  function getDate() {
    const time = new Date();
    const minutes = time.getMinutes().toString().padStart(2, "0");
    const currentTime = time.getHours() + ":" + minutes;
    return currentTime;
  }

  const scrollToBottom = () => {
    if (chatMessagesRef.current) {
      chatMessagesRef.current.scrollTop = chatMessagesRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    const initialMessage = {
      sender: "gpt",
      text: "Привет! Я чат-бот с нейросетью ChatGPT и вы можете общаться со мной без ограничения запросов и платных подписок. Напишите ваш первый вопрос.",
    };
    setMessages([initialMessage]);
  }, []);

  const sendMessage = async () => {
    if (input.trim()) {
      const userMessage = { sender: "user", text: input };
      const newMessages = [
        { role: "system", content: "Вы - интеллектуальный ассистент. Отвечайте кратко и по существу." },
        ...messages.map(msg => ({ role: msg.sender === "gpt" ? "assistant" : "user", content: msg.text })),
        { role: "user", content: input },
      ];

      setMessages((prevMessages) => [...prevMessages, userMessage]);
      setInput("");
      setIsFlying(true);
      setIsLoading(true); // Устанавливаем состояние загрузки
      setTimeout(() => setIsFlying(false), 2000);
      scrollToBottom();

      try {
        const response = await fetch('https://rgpt.regiuslab.by/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ messages: newMessages }),
        });

        const data = await response.json();

        if (data.response && data.response.length > 0) {
          const lastAssistantResponse = data.response.find(
            (msg) => msg.role === "assistant_response"
          );

          if (lastAssistantResponse) {
            const gptMessage = {
              sender: "gpt",
              text: lastAssistantResponse.content,
            };

            setMessages((prevMessages) => [...prevMessages, gptMessage]);
            scrollToBottom();
          } else {
            console.error("Ответ ассистента не найден:", data);
          }
        } else {
          console.error("Некорректный формат ответа:", data);
        }
      } catch (error) {
        console.error("Ошибка при отправке сообщения:", error);
      } finally {
        setIsLoading(false); // Сбрасываем состояние загрузки после ответа
      }
    }
  };

  const chatReset = () => {
    const initialMessage = {
      sender: "gpt",
      text: "Привет! Я чат-бот с нейросетью ChatGPT и вы можете общаться со мной без ограничения запросов и платных подписок. Напишите ваш первый вопрос.",
    };
    setMessages([initialMessage]);

    setIsRotating(true);
    setTimeout(() => setIsRotating(false), 1000); 
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.ctrlKey) {
      e.preventDefault();
      sendMessage();
    } else if (e.key === 'Enter' && e.ctrlKey) {
      e.preventDefault();
      setInput((prevInput) => prevInput + "\n");
    }
  };

  return (
    <div className="gpt">
      <div className="gpt-main">
        <div className="gpt-main__text">
          <h1 className="gpt-main__title">
            <span className="gpt-main__title-colored">rGPT</span>
            <br />
            Чат c AI
          </h1>
          <p className="gpt-main__description">
            Дорогие посетители нашего сайта! <br />
            <br />
            Мы рады представить вам новую возможность — чат с искусственным
            интеллектом! Теперь вы можете получать ответы на ваши вопросы,
            находить полезную информацию и общаться с нашим AI совершенно
            бесплатно. Мы стремимся сделать ваше пребывание на нашем сайте еще
            более удобным и интересным. Не стесняйтесь задавать вопросы и
            делиться своими идеями!
          </p>
          <a href='#gpt' className="gpt-main__button flare-button">Начать</a>
        </div>

        <img src={robot} className="gpt-main__image" alt="" />
      </div>

      <div id='gpt' className="chat">
        <div className="chat__messages" ref={chatMessagesRef}>
          <div className="chat__messages-container">
            {messages.map((msg, index) => (
              <div key={index} className={`chat__message ${msg.sender}`}>
                <div className="chat__message-container">
                  {msg.text}
                  <span className="chat__message-time">{getDate()}</span>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="chat__message gpt">
                <div className="chat__message-container loading">
                  Генерация ответа...
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="chat__input-container">
          <button onClick={chatReset} className={`chat__reload ${isRotating ? 'rotate' : ''}`}>
            <img src={rotate} className="chat__reload-img" alt="" />
          </button>

          <div className="chat__input-text">
            <textarea
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Спрашивайте, что хотите узнать..."
              value={input}
              className="chat__input"
              autoFocus
            ></textarea>

            <button className={`chat__button ${isFlying ? 'fly' : ''}`} onClick={sendMessage}>
              <img src={plane} className="chat__sent-img" alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
