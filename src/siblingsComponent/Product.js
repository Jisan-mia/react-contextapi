import React, { useContext } from "react";
import { CountContext } from "../App";

const CategoryDetail = () => {
	const count = useContext(CountContext);

	return (
		<div style={{ border: "1px solid gray", margin: "10px", padding: "5px" }}>
			<h2>Product Component: count-{count}</h2>
		</div>
	);
};

export default CategoryDetail;
