import {Team} from "../../types";
import {useState} from "react";

export type TeamRegistrationProps = {
    onRegister?: (team: Team[]) => void
}

export default function TeamRegistration({onRegister}: TeamRegistrationProps) {
    const [teams, setTeams] = useState<Team[]>([]);

    return (
        <div className="flex items-center justify-center min-h-screen w-full">
            <div className="flex flex-col gap-8 p-8 w-full max-w-2xl">
                <h1 className="text-2xl font-bold">Регистрация команд</h1>
                {teams.map((team, index) => (
                    <div key={index}
                         className="flex flex-col items-center justify-center w-full p-4 text-left border rounded-md">
                        <div className="flex flex-row items-center justify-between w-full gap-4">
                            <label className="block text-sm font-medium text-gray-700">{index + 1}</label>
                            <input
                                type="text"
                                className="block w-full px-3 py-2 text-sm border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                placeholder="Имя команды"
                                onChange={(e) => {
                                    const newTeams = [...teams];
                                    newTeams[index].name = e.target.value;
                                    setTeams(newTeams);
                                }}
                            />
                            <button
                                type="button"
                                className="px-3 py-2 text-sm font-medium text-white bg-red-600 border border-transparent rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                                onClick={() => {
                                    const newTeams = [...teams];
                                    newTeams.splice(index, 1);
                                    setTeams(newTeams);
                                }}
                            >
                                Удалить
                            </button>
                        </div>
                    </div>
                ))}
                {teams.length < 4 && (
                    <button
                        className="flex items-center justify-center w-full p-4 text-left border rounded-md hover:border-gray-300 text-gray-400 hover:text-gray-500 text-4xl transition-colors"
                        onClick={() => setTeams([...teams, {name: '', score: 0}])}
                    >
                        +
                    </button>
                )}
                {(teams.length > 1 && teams.length < 5 && teams.filter(team => team.name.length < 1).length === 0) && (
                    <button
                        className="px-4 py-2 font-bold text-white bg-green-500 rounded-md w-full hover:bg-green-600 transition-colors"
                        onClick={() => onRegister && onRegister(teams)}
                    >
                        Перейти к игре
                    </button>
                )}
            </div>
        </div>
    )
}