import React from "react";
import colors from "../../constants/colors";

export default function PlayNumber(props) {
	return (
		<button
			id="number"
			className="number"
			style={{ backgroundColor: colors[props.status] }}
			onClick={() => props.onClick(props.number, props.status)}
		>
			{props.number}
		</button>
	);
}
