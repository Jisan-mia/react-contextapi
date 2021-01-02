import React, { useContext, useEffect, useState } from "react";
import { CategoryContext } from "../App";
import EachProduct from "./EachProduct";

const allProducts = [
	{ name: "Nokia", category: "mobile" },
	{ name: "iPhone", category: "mobile" },
	{ name: "Howai", category: "mobile" },
	{ name: "Asus", category: "laptop" },
	{ name: "Lenovo", category: "laptop" },
	{ name: "Walton", category: "laptop" },
	{ name: "Nikkon", category: "camera" },
	{ name: "Sony", category: "camera" },
	{ name: "Cannon", category: "camera" },
];

const Productshop = () => {
	const [category] = useContext(CategoryContext);

	const [products, setProducts] = useState([]);

	useEffect(() => {
		const matchedProducts = allProducts.filter(
			(product) => product.category.toLowerCase() === category.toLowerCase()
		);

		setProducts(matchedProducts);
	}, [category]);

	return (
		<div style={{ border: "1px solid red", margin: "10px", padding: "5px" }}>
			<h2>Selected Category: {category}</h2>
			{products.map((product) => (
				<EachProduct key={product.name} product={product}></EachProduct>
			))}
		</div>
	);
};

export default Productshop;
