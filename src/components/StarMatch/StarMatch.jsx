import PlayNumber from "../PlayNumber/PlayNumber";
import StarsDisplay from "../StarsDisplay/StarsDisplay";
import utils from "../Utils/utils";
import PlayAgain from "../PlayAgain/PlayAgain";
import useGameState from "../CustomHook/useGameState";

export default function StarMatch(props) {
	const { stars, availableNums, candidateNums, secondsLeft, setGameState } =
		useGameState();

	const candidatesAreWrong = utils.sum(candidateNums) > stars;
	// const gameIsWon = availableNums.length === 0;
	// const gameIsLost = secondsLeft === 0;

	const gameStatus =
		availableNums.length === 0 ? "won" : secondsLeft === 0 ? "lost" : "active";

	// const resetGame = () => {
	// 	setStars(utils.random(1, 9));
	// 	setAvailableNums(utils.range(1, 9));
	// 	setCandidateNums([]);
	// 	setSecondsLeft(10);
	// };

	const numberStatus = (number) => {
		if (!availableNums.includes(number)) {
			return "used";
		}
		if (candidateNums.includes(number)) {
			return candidatesAreWrong ? "wrong" : "candidate";
		}
		return "available";
	};

	const onNumberClick = (number, currentStatus) => {
		//
		if (gameStatus !== "active" || currentStatus === "used") {
			return;
		}
		const newCandidateNums =
			currentStatus === "available"
				? candidateNums.concat(number)
				: candidateNums.filter((cn) => cn !== number);
		setGameState(newCandidateNums);
	};
	return (
		<>
			<div>
				<div className="game">
					<div className="help">
						Pick 1 or more numbers that sum to the number of stars
					</div>
					<div className="body">
						<div className="left">
							{gameStatus !== "active" ? (
								<PlayAgain
									onClick={props.startNewGame}
									gameStatus={gameStatus}
								/>
							) : (
								<StarsDisplay count={stars} />
							)}
						</div>
						<div className="right">
							{utils.range(1, 9).map((number) => (
								<PlayNumber
									status={numberStatus(number)}
									key={number}
									number={number}
									onClick={onNumberClick}
								/>
							))}
						</div>
					</div>
					<div className="timer">Time Remaining: {secondsLeft}</div>
				</div>
			</div>
		</>
	);
}
