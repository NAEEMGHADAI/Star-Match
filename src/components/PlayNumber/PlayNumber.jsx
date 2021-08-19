import React from "react";

export default function PlayNumber(props) {
	return (
		<button
			id="number"
			className="number"
			onClick={() => console.log("Num", props.number)}
		>
			{props.number}
		</button>
	);
}
