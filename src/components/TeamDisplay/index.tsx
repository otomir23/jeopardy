import {Team} from "../../types";

export type TeamDisplayProps = {
    teams: Team[];
    current: number;
    onSkip?: () => void;
}

export default function TeamDisplay({teams, current, onSkip}: TeamDisplayProps) {
    return (
        <aside className="flex flex-col items-center gap-2">
            <section className="flex flex-row flex-wrap justify-center items-center gap-2">
                {teams.map((team, i) => (
                    <div
                        key={`team ${i}`}
                        className={`
                        flex flex-col gap-2 items-center justify-center px-8 py-4 text-left border rounded-md transition-colors 
                        ${i === current ? 'border-indigo-400 text-indigo-800' : 'text-gray-700'}
                    `}
                    >
                        <label className="block text-lg font-medium">{team.name}</label>
                        <label className="block text-sm font-normal">{team.score} баллов</label>
                    </div>
                ))}
            </section>
            <button
                className="flex items-center justify-center rounded-md text-sm border w-full py-2 text-gray-400 hover:text-gray-500 transition-colors"
                onClick={() => onSkip && onSkip()}
            >
                Пропустить ход →
            </button>
        </aside>
    )
}