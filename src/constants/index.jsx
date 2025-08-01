import { Package } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { Sheet } from "lucide-react";
import { Workflow } from "lucide-react";
import { Monitor } from "lucide-react"
import { WifiOff } from "lucide-react";
import { ChartNoAxesCombined } from "lucide-react";

import member1 from "../assets/member1.jpg";
import member2 from "../assets/member2.jpg";
import member3 from "../assets/member3.jpg";
import member4 from "../assets/member4.jpg";
import member5 from "../assets/member5.jpg";

export const navItems = [
  { label: "Функционал", href: "#app" },
  { label: "Наши предложения", href: "#features" },
  { label: "Команда", href: "#team" },
];

export const features = [
  {
    icon: <WifiOff />,
    text: "Работа без сети",
    description:
      "Все действия в поездке сохраняются локально в приложении \"Чайка\", и синхронизируются после рейса.",
  },
  {
    icon: <Fingerprint />,
    text: "Индивидуальный вклад",
    description:
      "Операции регистрируются с указанием проводника, что позволяет оценить вклад каждого.",
  },
  {
    icon: <ShieldHalf />,
    text: "Контроль операций",
    description:
      "Информация обо всех произведённых операциях на одном экране, а так же подсчёт чеков безналичной оплаты.",
  },
  {
    icon: <Package />,
    text: "Управление остатками",
    description:
      "Регистрация доборов со штабного вагона, быстрый доступ к текущим остаткам товаров.",
  },
  {
    icon: <Sheet />,
    text: "Сводная таблица и выручка",
    description:
      "Таблица учёта товаров, а также выручка за поездку формируются автоматически.",
  },
  {
    icon: <Workflow />,
    text: "Автоматизация отчётов",
    description:
      "По завершении поездки формируется отчёт, отправляющийся на сервер для последующей аналитики",
  },
  {
    icon: <Monitor />,
    text: "Аналитика информации",
    description:
      "Все данные, полученные из поездов, можно анализировать с помощью нашего сервиса.",
  },
  {
    icon: <ChartNoAxesCombined />,
    text: "Предсказание спроса",
    description:
      "Спрос на товары формируется по историческим данным и позволяет улучшить логистику компании.",
  },
];

export const testimonials = [
  {
    user: "Эрнест",
    company: "Генеральный директор",
    image: member1,
    text: "Основатель проекта \"Чайка\". Мобильный разработчик",
  },
  {
    user: "Григорий",
    company: "Программный инженер",
    image: member2,
    text: "Разработчик сервиса анализа данных",
  },
  {
    user: "Никита",
    company: "Руководитель команды",
    image: member3,
    text: "Технический директор, руководитель командной разработки",
  },
  {
    user: "Дмитрий",
    company: "DevOps",
    image: member4,
    text: "Cпециалист по автоматизации процессов разработки и развертывания ПО",
  },
  {
    user: "Никита",
    company: "Kotlin Разработчик",
    image: member5,
    text: "Мобильный разработчик",
  },
];

export const resourcesLinks = [
  { href: "#", text: "Начать" },
];

export const platformLinks = [
  { href: "#", text: "Штуки" },
  { href: "#", text: "Девайсы" },
];

export const communityLinks = [
  { href: "#", text: "Конференции" },
  { href: "#", text: "Позвонить нам" },
];
