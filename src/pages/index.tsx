import {Layout, TeamRegistration} from "../components";
import {useState} from "react";
import {Team} from "../types";

export default function Home() {
    const [teams, setTeams] = useState<Team[]>([])

    if (teams.length === 0) {
        return (
            <TeamRegistration
                onRegister={teams => setTeams(teams)}
            />
        )
    }

    return (
        <Layout>
            <p className="underline">Своя игра.</p>
            {teams.map(t => <p key={t.name}>{t.name}</p>)}
        </Layout>
    )
}
