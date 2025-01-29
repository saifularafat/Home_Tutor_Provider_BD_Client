const LeaderBoardWithTutor = () => {
    const data = [
        { rank: 1, name: "Alice", totalTuition: 16, rating: 95 },
        { rank: 2, name: "Bob", totalTuition: 9, rating: 90 },
        { rank: 3, name: "Charlie", totalTuition: 8, rating: 85 },
        { rank: 4, name: "David", totalTuition: 5, rating: 80 },
        { rank: 5, name: "Eve", totalTuition: 2, rating: 75 },
        { rank: 6, name: "Ruhan", totalTuition: 1, rating: 50 },
        { rank: 7, name: "Rahat", totalTuition: 1, rating: 45 },
        { rank: 8, name: "Pantor", totalTuition: 1, rating: 30 },
        { rank: 9, name: "Opi", totalTuition: 1, rating: 25 },
        { rank: 10, name: "Tipu", totalTuition: 11, rating: 80 },
    ];

    // Sort the data by rating in descending order
    const sortedData = [...data].sort((a, b) => b.rating - a.rating);

    const getMedal = (rating) => {
        switch (rating) {
            case 1:
                return "🥇";
            case 2:
                return "🥈";
            case 3:
                return "🥉";
            default:
                return rating;
        }
    };

    const getRowClass = (rating) => {
        switch (rating) {
            case 1:
                return "font-bold hover:bg-slate-300 transition-all duration-200";
            case 2:
                return "font-bold hover:bg-slate-200 transition-all duration-200";
            case 3:
                return "font-bold hover:bg-slate-100 transition-all duration-200";
            default:
                return "";
        }
    };

    return (
        <div className="bg-[url(/img/mountains.jpg)] bg-cover bg-center h-screen w-full">
            <div className="max-w-6xl mx-auto py-10">
                <h2 className="uppercase text-2xl text-center font-bold tracking-widest">
                    <span className="text-3xl">🏅</span>
                    Tuition Leader Board
                    <span className="text-3xl">🏅</span>
                </h2>
                <div className="bg-white bg-opacity-80 p-6 rounded-2xl shadow-xl text-center w-full mx-auto mt-6">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-purple-500 text-white text-center">
                                <th className="p-2">Rank</th>
                                <th className="p-2">Name</th>
                                <th className="p-2">Total Tuition</th>
                                <th className="p-2">Rating</th>
                            </tr>
                        </thead>
                        <tbody>
                            {sortedData.map((player, index) => (
                                <tr key={player.rank} className={`border-b text-center ${getRowClass(index + 1)}`}>
                                    <td className="p-2">{getMedal(index + 1)}</td>
                                    <td className="p-2">{player.name}</td>
                                    <td className="p-2 text-center">{player.totalTuition}</td>
                                    <td className="p-2">{player.rating}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default LeaderBoardWithTutor;
