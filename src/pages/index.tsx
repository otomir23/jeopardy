import {Layout, TeamRegistration} from "../components";
import {useEffect, useState} from "react";
import {Quiz, Team} from "../types";

export default function Home() {
    const [teams, setTeams] = useState<Team[]>([])
    const [quiz, setQuiz] = useState<Quiz | null>(null)

    useEffect(() => {
        fetch('/api/quiz').then(r => r.json()).then(q => setQuiz(q))
    }, [])

    if (!quiz) {
        return (
            <Layout>
                Loading
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

    return (
        <Layout>
            <p className="underline">Своя игра.</p>
            {teams.map(t => <p key={t.name}>{t.name}</p>)}
            {quiz.map(c => <p key={c.name}>{c.name}</p>)}
        </Layout>
    )
}
