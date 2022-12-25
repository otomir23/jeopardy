export type Question = {
    question: string;
    options: string[];
    answer: number;
    bonus: number;
}

export type Category = {
    name: string;
    questions: Question[];
}

export type Quiz = Category[];

export type Team = {
    name: string;
    score: number;
}