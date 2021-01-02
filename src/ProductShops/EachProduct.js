import React from "react";

const EachProduct = (props) => {
	const { product } = props;
	return <div>{product.name}</div>;
};

export default EachProduct;
