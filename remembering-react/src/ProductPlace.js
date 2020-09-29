import React from 'react';

const ProductPlace = (props) => {
	console.log(props.data);
	let categoriesNames = [];
	let categories = [];
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
			categories.push(<Category key={item} category={item} items={items} />);
		}

		return(
			<div className="ProductPlace">
				<table className="name-price">
					<thead>
						<tr>
							<th>Name</th>
							<th>Price</th>
						</tr>
					</thead>
				</table>
				{categories}
			</div>
		)
	}	
}

const CategoryRow = props => {
	if(props.rowName) {
		return(
			<tr>
				<th>{props.rowName}</th>
			</tr>
		)
	}
	else throw new Error("No category provided");
};

const ItemRow = props => {
	if(props.name && props.price) {
		return(
			<tr>
				<td>{props.name}</td>
				<td>{props.price}</td>
			</tr>
		)
	}
	else throw new Error("No items provided");
};

const Category = (props) => {
	if(props.category) {
		const category = <CategoryRow key={props.category} rowName={props.category} />;
		let items = []
		for(let item of props.items) {
			items.push(<ItemRow key={item.name} name={item.name} price={item.price} />)
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
