import type {NextApiRequest, NextApiResponse} from 'next'
import {Quiz} from "../../types";

// Jeopardy quiz
const quiz: Quiz = [
    {
        name: "Советские фильмы",
        questions: [
            {
                question: "Из какого фильма этот кадр?",
                image: "https://i.pinimg.com/originals/07/91/d2/0791d24c076e1df990fd967b8e5bbf91.jpg",
                options: [
                    "Операция «Ы» и другие приключения Шурика",
                    "Кавказская пленница",
                    "Ирония судьбы, или С легким паром!",
                    "Бриллиантовая рука"
                ],
                answer: 1,
                bonus: 100
            },
            {
                question: "Из какого фильма этот кадр?",
                image: "https://www.ridus.ru/images/2021/12/13/1377720/in_article_webp_e79065bf91.webp",
                options: [
                    "Джентльмены удачи",
                    "Бриллиантовая рука",
                    "Кавказская пленница",
                    "Невероятные приключения итальянцев в России"
                ],
                answer: 0,
                bonus: 200
            },
            {
                question: "Из какого фильма этот кадр?",
                image: "https://sun9-75.userapi.com/K5Q9l9QO85zJoWX53RM9cTZwuOTybWq0gW4vXw/QW2ERtbvtJc.jpg",
                options: [
                    "Бриллиантовая рука",
                    "В бой идут одни «старики»",
                    "Кавказская пленница",
                    "Невероятные приключения итальянцев в России"
                ],
                answer: 3,
                bonus: 300
            },
            {
                question: "Из какого фильма этот кадр?",
                image: "https://tv-karelia.ru/wp-content/uploads/2022/05/v-boy-idut-odni-stariki_0-1582x1100.jpg",
                options: [
                    "В бой идут одни «старики»",
                    "Джентльмены удачи",
                    "Кавказская пленница",
                    "Невероятные приключения итальянцев в России"
                ],
                answer: 0,
                bonus: 400
            }
        ]
    },
    {
        name: "Новогоднее кино",
        questions: [
            {
                question: "Из какого фильма этот кадр?",
                image: "https://www.plans.com.mx/wp-content/uploads/2018/12/homealone.jpg",
                options: [
                    "В ночь перед Рождеством",
                    "Дом, в котором я живу",
                    "Один дома",
                    "Кошмар перед Рождеством"
                ],
                answer: 2,
                bonus: 100
            },
            {
                question: "Из какого мультфильма этот кадр?",
                image: "https://m.media-amazon.com/images/M/MV5BNTllNjM1ZDEtZWE3OC00ODJkLTlkZjMtNDAxNDc4MDZkM2Q4XkEyXkFqcGdeQXVyNzI1NzMxNzM@._V1_.jpg",
                options: [
                    "Тайная служба Санта-Клауса",
                    "Клаус",
                    "6000 писем",
                    "История рождества"
                ],
                answer: 1,
                bonus: 200
            },
            {
                question: "Из какого фильма этот кадр?",
                image: "https://www.thesun.ie/wp-content/uploads/sites/3/2019/03/NINTCHDBPICT000000467038.jpg",
                options: [
                    "Дом, в котором я живу",
                    "Кошмар перед Рождеством",
                    "Чудо на 34-ой улице",
                    "В ночь перед Рождеством"
                ],
                answer: 1,
                bonus: 300
            },
            {
                question: "Из какого фильма этот кадр?",
                image: "https://www.gannett-cdn.com/presto/2020/10/15/NCOD/01f0e13c-f073-4066-9456-b3d85ac4c49a-WkkE4WsqFznPzCefusKk6WsiUh.JPG",
                options: [
                    "Кошмар перед Рождеством",
                    "Дом, в котором я живу",
                    "В ночь перед Рождеством",
                    "Чудо на 34-ой улице"
                ],
                answer: 3,
                bonus: 400
            }
        ]
    },
    {
        name: "Дед Мороз по всему миру",
        questions: [
            {
                question: "В каой строне Деда Мороза зовут Йолопукки?",
                options: [
                    "Финляндия",
                    "Швеция",
                    "Норвегия",
                    "Дания"
                ],
                answer: 0,
                bonus: 100
            },
            {
                question: "В какой стране Деда Мороза зовут Кыш Бабай?",
                options: [
                    "Кыргызстан",
                    "Казахстан",
                    "Татарстан",
                    "Узбекистан"
                ],
                answer: 2,
                bonus: 200
            },
            {
                question: "В какой стране Деда Мороза зовут Шань Дань Лаожен?",
                options: [
                    "Япония",
                    "Китай",
                    "Индия",
                    "Тайвань"
                ],
                answer: 1,
                bonus: 300
            },
            {
                question: "В какой стране вместо Деда Мороза - Пэр Ноэль и Пэр Фуэтар?",
                options: [
                    "Испания",
                    "Италия",
                    "Германия",
                    "Франция"
                ],
                answer: 3,
                bonus: 400
            },
        ]
    }
]

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Quiz>
) {
    res.status(200).json(quiz);
}
