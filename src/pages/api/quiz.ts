import type {NextApiRequest, NextApiResponse} from 'next'
import {Quiz} from "../../types";

const quiz: Quiz = [
    {
        name: "General Knowledge",
        questions: [
            {
                question: "What is the capital of France?",
                options: ["Paris", "London", "Berlin", "Rome"],
                answer: 0,
                bonus: 100
            },
            {
                question: "Who is the current president of the United States?",
                options: ["Donald Trump", "Barack Obama", "Joe Biden", "George W. Bush"],
                answer: 2,
                bonus: 200
            },
            {
                question: "What is the largest country in the world?",
                options: ["China", "Russia", "Canada", "United States"],
                answer: 1,
                bonus: 300
            },
            {
                question: "What is the largest ocean in the world?",
                options: ["Pacific", "Atlantic", "Indian", "Arctic"],
                answer: 0,
                bonus: 400
            },
            {
                question: "What is the largest city in the world?",
                options: ["Tokyo", "New York", "Mexico City", "Shanghai"],
                answer: 3,
                bonus: 500
            }
        ]
    },
    {
        name: "Science & Nature",
        questions: [
            {
                question: "What is the chemical symbol for gold?",
                options: ["Au", "Ag", "Pt", "Hg"],
                answer: 0,
                bonus: 100
            }
        ]
    }
]

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Quiz>
) {
    res.status(200).json(quiz);
}
