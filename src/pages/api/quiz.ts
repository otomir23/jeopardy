import type {NextApiRequest, NextApiResponse} from 'next'
import {Quiz} from "../../types";

// Jeopardy quiz
const quiz: Quiz = [
    {
        name: "Общие вопросы",
        questions: [
            {
                question: "Какая планета находится ближе к Солнцу?",
                options: [
                    "Земля",
                    "Меркурий",
                    "Марс",
                    "Венера"
                ],
                answer: 1,
                bonus: 100
            },
            {
                question: "Кто из этих людей не был президентом США?",
                options: [
                    "Джордж Вашингтон",
                    "Джон Кеннеди",
                    "Абрахам Линкольн",
                    "Томас Джефферсон"
                ],
                answer: 1,
                bonus: 200
            },
            {
                question: "Какой из океанов самый большой?",
                options: [
                    "Северный Ледовитый",
                    "Атлантический",
                    "Индийский",
                    "Тихий",
                ],
                answer: 3,
                bonus: 300
            },
            {
                question: "Кто был первым человеком, посетившим Луну?",
                options: [
                    "Нил Армстронг",
                    "Алексей Леонов",
                    "Билл Штейнман",
                    "Питер Шмидт"
                ],
                answer: 0,
                bonus: 400
            },
            {
                question: "Какой из этих городов самый большой?",
                options: [
                    "Москва",
                    "Санкт-Петербург",
                    "Нью-Йорк",
                    "Лондон"
                ],
                answer: 2,
                bonus: 500
            }
        ]
    },
    {
        name: "История",
        questions: [
            {
                question: "Какой город был столицей Российской империи?",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Lesser_Coat_of_Arms_of_Russian_Empire.svg/800px-Lesser_Coat_of_Arms_of_Russian_Empire.svg.png",
                options: [
                    "Москва",
                    "Санкт-Петербург",
                    "Владивосток",
                    "Симферополь"
                ],
                answer: 1,
                bonus: 100
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
