import React, { useContext } from "react";
import { CategoryContext } from "../App";

const ProductCategory = () => {
	const [category, setCategory] = useContext(CategoryContext);
	return (
		<div className="App">
			<h2>{category}</h2>
			<button onClick={() => setCategory("Mobile")}>Mobile</button>
			<button onClick={() => setCategory("Laptop")}>Laptop</button>
			<button onClick={() => setCategory("Camera")}>Camera</button>
		</div>
	);
};

export default ProductCategory;
