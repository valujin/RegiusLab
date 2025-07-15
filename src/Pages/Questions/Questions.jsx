import React, { useEffect, useState } from "react";
import logo from "/img/logo.svg";
import { useNavigate } from "react-router-dom";

export default function Questions() {

 const [visible, setVisible] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const navigate = useNavigate();

  const handleClick = () => {
    setSeconds(6);      // стартовый отсчёт
    setVisible(true);   // показать баннер
  };

  // Запуск таймера после появления баннера
  useEffect(() => {
    if (!visible) return;

    const interval = setInterval(() => {
      setSeconds((s) => {
        if (s <= 1) {
          clearInterval(interval);
          navigate("/next-page");
          return 0;
        }
        return s - 1;
      });
    }, 1000);

    // Очистка при демонтировании или скрытии
    return () => clearInterval(interval);
  }, [visible, navigate]);
  return (
    <div className="text-white relative  w-screen flex flex-col gap-6 items-center !p-[20px]">
      {/* <img src={logo} alt="" className="w-[90px]" /> */}
      <div className="flex flex-col gap-[10px] ">
        <div className={`message-banner ${visible ? "message--visible" : ""} w-[95%] flex-col gap-10 h-[50%] backdrop-blur-lg bg-black/60 border-1 border-[#D7AC45] flex items-center justify-center`}>

         Спасибо за честность! Мы с Вами свяжемся как можно скорее, чтобы обсудить как мы можем Вам помочь улучшить Ваш бизнес:)

        <br/>
        <br/>

        А пока что вы можете познакомиться с нами поближе!

    <br/>
        <br/>
        <p className="text-center">
         {seconds}
         </p>
        </div>

        <p className="text-2xl text-center">
          Добро пожаловать в пространство RegiusLab!
        </p>
        <div className="w-full h-[1px] bg-[#D7AC45]"></div>
      </div>

      <p className="text-center text-xl !p-3 bg-[#D7AC45]/50 rounded-lg">
        Как вы хотите использовать ИИ в своём бизнесе?
      </p>
      <p className="">
        Выберите интересующий вас кейс — и получите готовое решение, примеры
        внедрения и консультацию 👇
      </p>

      <div className="h-full w-full flex flex-col gap-[30px]">
        <div className=" flex flex-col gap-[20px]">
          <div className="!p-[10px] bg-[#D7AC45]/10 border-1 border-[#D7AC45] rounded-2xl backdrop-blur-xs">
            Хотите повысить эффективность отдела продаж с помощью AI-аналитики?
          </div>

          <button  onClick={handleClick} className="cursor-pointer bg-[#D7AC45] rounded-[100px] !p-[11px_35px] whitespace-nowrap text-[26px] font-bold uppercase text-white animate__animated  animate__infinite animate__pulse">
            ХОЧУ
          </button>
        </div>
        <div className=" flex flex-col gap-[20px]">
          <div className="!p-[10px] bg-[#D7AC45]/10 border-1 border-[#D7AC45] rounded-2xl backdrop-blur-xs">
            Ищете возможность автоматизировать тендерный мониторинг и не
            пропускать важные конкурсы?
          </div>

          <button  onClick={handleClick} className="cursor-pointer bg-[#D7AC45] rounded-[100px] !p-[11px_35px] whitespace-nowrap text-[26px] font-bold uppercase text-white animate__animated  animate__infinite animate__pulse">
            ХОЧУ
          </button>
        </div>

        <div className=" flex flex-col gap-[20px]">
          <div className="!p-[10px] bg-[#D7AC45]/10 border-1 border-[#D7AC45] rounded-2xl backdrop-blur-xs">
            Ищете возможность автоматизировать тендерный мониторинг и не
            пропускать важные конкурсы?
          </div>

          <button  onClick={handleClick} className="cursor-pointer bg-[#D7AC45] rounded-[100px] !p-[11px_35px] whitespace-nowrap text-[26px] font-bold uppercase text-white animate__animated  animate__infinite animate__pulse">
            ХОЧУ
          </button>
        </div>

        <div className=" flex flex-col gap-[20px]">
          <div className="!p-[10px] bg-[#D7AC45]/10 border-1 border-[#D7AC45] rounded-2xl backdrop-blur-xs">
            Нужно решение, которое помогает оптимизировать маршруты доставки и
            логистику?
          </div>

          <button  onClick={handleClick} className="cursor-pointer bg-[#D7AC45] rounded-[100px] !p-[11px_35px] whitespace-nowrap text-[26px] font-bold uppercase text-white animate__animated  animate__infinite animate__pulse">
            ХОЧУ
          </button>
        </div>

        <div className=" flex flex-col gap-[20px]">
          <div className="!p-[10px] bg-[#D7AC45]/10 border-1 border-[#D7AC45] rounded-2xl backdrop-blur-xs">
            Хотелось бы управлять товарными потоками (склад, производство,
            продажи) легко и непринужденно?
          </div>

          <button  onClick={handleClick} className="cursor-pointer bg-[#D7AC45] rounded-[100px] !p-[11px_35px] whitespace-nowrap text-[26px] font-bold uppercase text-white animate__animated  animate__infinite animate__pulse">
            ХОЧУ
          </button>
        </div>
      </div>
    </div>
  );
}
