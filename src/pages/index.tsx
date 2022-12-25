import {Layout, QuestionCard, QuizDisplay, TeamDisplay, TeamRegistration} from "../components";
import {useEffect, useState} from "react";
import {Question, Quiz, Team} from "../types";
import toast from "react-hot-toast";
import ReactConfetti from "react-confetti";

export default function Home() {
    const [teams, setTeams] = useState<Team[]>([])
    const [currentTeam, setCurrentTeam] = useState<number>(0)
    const [quiz, setQuiz] = useState<Quiz | null>(null)
    const [selectedQuestion, setSelectedQuestion] = useState<Question | null>(null)
    const [win, setWin] = useState<boolean>(false)

    useEffect(() => {
        fetch('/api/quiz').then(r => r.json()).then(q => setQuiz(q))
    }, [])

    useEffect(() => {
        if (quiz && quiz.length === 0) {
            const winnerTeam = teams.sort((a, b) => b.score - a.score)[0]
            if (winnerTeam) {
                toast('Команда ' + winnerTeam.name + ' победила!', {
                    icon: '🎉',
                })
                setWin(true)
            }
        }
    }, [quiz, teams])

    const nextTeam = () => setCurrentTeam((currentTeam + 1) % teams.length)

    if (!quiz) {
        return (
            <Layout>
                <div className="border border-indigo-400 w-8 h-8 border-4 animate-spin" />
                <p className="text-indigo-800 font-bold mt-2">Загружаю вопросы...</p>
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
                <QuestionCard question={selectedQuestion} onAnswer={handleAnswer} />
            </Layout>
        )
    }

    return (
        <Layout>
            <QuizDisplay quiz={quiz} onSelect={(c, q) => setSelectedQuestion(quiz[c].questions[q])} />
            <div className="w-full h-16" />
            <TeamDisplay teams={teams} current={currentTeam} onSkip={nextTeam} />
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
