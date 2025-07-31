import React, { useEffect } from "react";
import phone1 from "../assets/phone1.png";
import phone2 from "../assets/phone2.png";
import phone3 from "../assets/phone3.png";
import phone4 from "../assets/phone4.png";
import AOS from "aos";
import "aos/dist/aos.css";

const sections = [
    {
        id: 1,
        heading: "Всегда актуальные поездки",
        text: "Сервисы проекта \"Чайка\" сотрудничают с железнодорожными компаниями, предлагая проводникам актуальные данные.",
        image: phone1,
    },
    {
        id: 2,
        heading: "История поездок",
        text: "Проводник может в любой момент ознакомиться с ранее завершёнными рейсами.",
        image: phone2,
    },
    {
        id: 3,
        heading: "Шаблоны списка товаров",
        text: "В проекте «Чайка» реализован механизм шаблонов для быстрого формирования запасов проводника.",
        image: phone3,
    },
    {
        id: 4,
        heading: "Посменный режим",
        text: "Приложение \"Чайка\" позволяет учитывать работу нескольких проводников одновременно.",
        image: phone4,
    },
];

const PhoneTextAlternating = () => {
    useEffect(() => {
        AOS.init({ duration: 2000, once: true });
    }, []);

    return (
        <div
            id="app"
            className="relative mt-20 border-b border-neutral-800 min-h-[800px] px-4 sm:px-8 max-w-6xl mx-auto pb-20 overflow-hidden">
            <div className="text-center">
                <span className="bg-neutral-900 text-orange-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
                    Приложение
                </span>
                <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
                    Управляйте{" "}
                    <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
                        товарами
                    </span>{" "}
                    на мобильном устройстве
                </h2>
            </div>

            <div className="flex flex-col gap-12 mt-10 lg:mt-20">
                {sections.map((section, index) => (
                    <div
                        key={section.id}
                        className={`flex flex-col sm:flex-row items-center gap-6 ${index % 2 === 1 ? "sm:flex-row-reverse" : ""
                            }`}
                        data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
                    >
                        <img
                            src={section.image}
                            alt="Phone"
                            className="w-[20rem] sm:w-[20rem] lg:w-[25rem] h-auto object-contain"
                        />

                        {/* Text block */}
                        <div className={`flex flex-col sm:max-w-md text-center ${index % 2 === 1 ? "sm:text-right sm:items-end" : "sm:text-left"
                            }`}>
                            <p className="text-lg sm:text-xl text-orange-500 font-bold mb-2">
                                {section.heading}
                            </p>
                            <p className="text-lg sm:text-xl text-neutral-400">
                                {section.text}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PhoneTextAlternating;
