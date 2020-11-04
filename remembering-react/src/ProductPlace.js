import React from 'react';
import s from './ProductPlace.module.css';

const ProductPlace = (props) => {
	let categoriesNames = [];
	let categoriesAvailable = [];
	if(props.data !== undefined) {
		let set = new Set();
		for(let item of props.data) {
			set.add(item.category);
		}
		categoriesNames = [...set];

		for(let item of categoriesNames) {
			let items = props.data.filter(entry => {
				if(entry.category === item) return true;
				else return false;
			})
			categoriesAvailable.push(<Category key={item} category={item} items={items} />);
		}

		return(
			<div className="productPlace">
				<table className="products">
					<thead className={s.tableHeaders}>
						<tr>
							<th>Name</th>
							<th>Price</th>
						</tr>
					</thead>
				</table>
				{categoriesAvailablea}
			</div>
		)
	}	
}

const ProductCategoryRow = props => {
	if(props.rowName) {
		return(
			<tr>
				<th className={s.categoryRow}>{props.rowName}</th>
			</tr>
		)
	}
	else throw new Error("No category provided");
};

const ProductRow = props => {
	let redIfNotStocked = props.stocked ? null : {"color" : "red"};
	if(props.name && props.price) {
		return(
			<tr style={redIfNotStocked}>
				<td>{props.name}</td>
				<td className={s.productPrice}>{props.price}</td>
			</tr>
		)
	}
	else throw new Error("No items provided");
};

const Category = (props) => {
	if(props.category) {
		const category = <ProductCategoryRow key={props.category} rowName={props.category} />;
		let items = []
		for(let item of props.items) {
			items.push(<ProductRow key={item.name} name={item.name} price={item.price} stocked={item.stocked} />)
		}

		return (
			<table className="products">
				<thead>{category}</thead>
				<tbody>{items}</tbody>
			</table>
		)
	}
	else throw new Error("No data provided");
}

export default ProductPlace;
