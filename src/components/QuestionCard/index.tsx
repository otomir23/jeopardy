import {Question} from "../../types";

export type QuestionCardProps = {
    question: Question;
    onAnswer?: (correct: boolean) => void;
}

export default function QuestionCard({question, onAnswer}: QuestionCardProps) {
    return (
        <>
            {question.question}
            <div className="flex flex-col gap-2">
                {question.options.map((answer, i) => (
                    <button
                        key={`answer ${i}`}
                        className="flex items-center justify-center rounded-md text-md font-bold border w-full py-2 px-8 text-gray-400 hover:text-gray-500 transition-colors"
                        onClick={() => onAnswer && onAnswer(i === question.answer)}
                    >
                        {answer}
                    </button>
                ))}
            </div>
        </>
    )
}