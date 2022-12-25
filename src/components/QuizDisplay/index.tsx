import {Quiz} from "../../types";

export type QuizDisplayProps = {
    quiz: Quiz;
    onSelect?: (category: number, question: number) => void;
}

export default function QuizDisplay({quiz, onSelect}: QuizDisplayProps) {
    return (
        <section className="flex flex-col gap-4">
            {quiz.map((category, i) => (
                <div key={`category ${i}`} className="flex flex-col gap-2">
                    <label className="block text-lg font-medium">{category.name}</label>
                    <div className="flex flex-row flex-wrap gap-2">
                        {category.questions.map((question, j) => (
                            <button
                                key={`question ${j}`}
                                className="flex items-center justify-center rounded-md text-md font-bold border py-2 px-8 text-gray-400 hover:text-gray-500 transition-colors"
                                onClick={() => onSelect && onSelect(i, j)}
                            >
                                {question.bonus}
                            </button>
                        ))}
                    </div>
                </div>
            ))}
        </section>
    )
}