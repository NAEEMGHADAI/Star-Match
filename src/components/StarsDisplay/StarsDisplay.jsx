import React from "react";
import utils from "../Utils/utils";

export default function StarsDisplay(props) {
	return (
		<>
			{utils.range(1, props.count).map((starId) => (
				<div key={starId} className="star"></div>
			))}
		</>
	);
}
