import {Layout, QuestionCard, QuizDisplay, TeamDisplay, TeamRegistration} from "../components";
import {useEffect, useState} from "react";
import {Category, Question, Quiz, Team} from "../types";
import toast from "react-hot-toast";
import ReactConfetti from "react-confetti";
import {parse} from 'csv-parse/sync';

export default function Home() {
    const [teams, setTeams] = useState<Team[]>([])
    const [currentTeam, setCurrentTeam] = useState<number>(0)
    const [quiz, setQuiz] = useState<Quiz | null>(null)
    const [selectedQuestion, setSelectedQuestion] = useState<Question | null>(null)
    const [win, setWin] = useState<boolean>(false)

    useEffect(() => {
        if (quiz && quiz.length === 0) {
            const winnerTeam = teams.sort((a, b) => b.score - a.score)[0]
            if (winnerTeam) {
                toast('Команда ' + winnerTeam.name + ' победила!', {
                    icon: '🎉',
                    duration: Infinity,
                })
                setWin(true)
            }
        }
    }, [quiz, teams])

    const nextTeam = () => setCurrentTeam((currentTeam + 1) % teams.length)

    if (!quiz) {
        return (
            <Layout>
                <input id="quiz-file-input" type="file" onChange={e => {
                    if (!e.target.files) return
                    const file = e.target.files[0]
                    if (!file) return

                    const loadPromise = new Promise<Quiz>(async (resolve, reject) => {
                        try {
                            const content = await file.text()
                            console.log(content)
                            const records = parse(content, {
                                columns: true,
                                skip_empty_lines: true,
                                encoding: 'utf-8'
                            })
                            console.log(records)

                            const quiz: Quiz = [];

                            for (const record of records) {
                                const category = quiz.find(c => c.name === record.category) || (() => {
                                    const category: Category = {name: record.category, questions: []}
                                    quiz.push(category)
                                    return category
                                })()

                                category.questions.push({
                                    question: record.question || '',
                                    answer: (parseInt(record.answer) || 0) - 1,
                                    bonus: parseInt(record.bonus) || 0,
                                    image: record.image || null,
                                    options: (record.options?.split(',') || []).map((o: string) => o.trim())
                                })
                            }

                            resolve(quiz)
                        } catch (e) {
                            reject(e)
                        }
                    })

                    toast.promise(loadPromise, {
                        loading: 'Загрузка викторины...',
                        success: 'Викторина загружена!',
                        error: 'Не удалось загрузить викторину!',
                    }).then(
                        setQuiz,
                        console.error
                    )
                }} className="sr-only" accept="text/csv"/>
                <label
                    htmlFor="quiz-file-input"
                    className="border-2 border-dashed border-gray-300 rounded-lg p-8 flex flex-col items-center justify-center gap-4 cursor-pointer hover:border-indigo-400 text-gray-400 hover:text-indigo-500 transition-colors"
                >
                    <span className="font-bold">Загрузить викторину</span>
                </label>
            </Layout>
        )
    }

    if (teams.length === 0) {
        return (
            <Layout>
                <TeamRegistration onRegister={teams => setTeams(teams)}/>
            </Layout>
        )
    }

    if (selectedQuestion) {
        const handleAnswer = (correct: boolean) => {
            setSelectedQuestion(null);
            if (correct) {
                const newTeams = teams;
                teams[currentTeam].score += selectedQuestion.bonus;
                setTeams(newTeams);
                toast.success('Правильный ответ!');
            } else {
                toast.error(`Неправильный ответ! \nПравильным был: ${selectedQuestion.options[selectedQuestion.answer]}`);
            }
            setQuiz(quiz.map(c => ({
                name: c.name,
                questions: c.questions.filter(q => q !== selectedQuestion)
            })).filter(c => c.questions.length > 0));
            nextTeam()
        }

        return (
            <Layout>
                <QuestionCard question={selectedQuestion} onAnswer={handleAnswer}/>
            </Layout>
        )
    }

    return (
        <Layout>
            <QuizDisplay quiz={quiz} onSelect={(c, q) => setSelectedQuestion(quiz[c].questions[q])}/>
            <div className="w-full h-16"/>
            <TeamDisplay teams={teams} current={currentTeam} onSkip={nextTeam}/>
            <ReactConfetti
                width={window.innerWidth}
                height={window.innerHeight}
                numberOfPieces={100}
                recycle={false}
                gravity={0.1}
                wind={0.1}
                run={win}
                confettiSource={{x: 0, y: window.innerHeight, w: window.innerWidth, h: 10}}
                initialVelocityY={30}
                colors={['#818cf8', '#4f46e5', '#312e81', '#a5b4fc']}
                style={{
                    pointerEvents: 'none',
                }}
            />
        </Layout>
    )
}
