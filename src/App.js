import { useState } from "react";
import StarMatch from "./components/StarMatch/StarMatch.jsx";

function App() {
	const [gameId, setGameId] = useState(1);
	return (
		<>
			<StarMatch key={gameId} startNewGame={() => setGameId(gameId + 1)} />
		</>
	);
}

export default App;
