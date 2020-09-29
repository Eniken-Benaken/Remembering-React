import Search from './Search';
import ProductPlace from './ProductPlace';
import { useState } from 'react';
import React from 'react';

const Store = (props) => {
	const [stockOnly,setStockOnly] = new useState(false);
	const [search,setSearch] = new useState(null);
	const handleChange = (e) => {
		if(e.target.type === 'text') setSearch(e.target.value)
		else if(e.target.type === "checkbox") setStockOnly(!stockOnly);
	}
	const data = [
		{category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
		{category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
		{category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
		{category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
		{category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
		{category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
	];

	const filterData = (array) => {
		let filtered = [];
		let data = [...array];
		if(stockOnly) {
			let filteredStocked = data.filter((item) => {
			if(item.stocked) return true;
			else return false
			});
			filtered = [...filteredStocked];
		}
		else filtered = [...data];
		if(typeof search === "string") {
			let filteredByQuery = filtered.slice().filter(
				(item) => {
					if(item.category.toLowerCase().includes(search.toLowerCase()) || item.name.toLowerCase().includes(search.toLowerCase())) return true;
					else return false;
				}
			);
			filtered = [...filteredByQuery];
		}
		return filtered;
	}
	let filteredData = filterData(data);
	console.log(filteredData);

	return (
		<>
			<Search seach={search} stockOnly={stockOnly} onChange={handleChange} />
			<ProductPlace data={filteredData}/>
		</>
	)
}

export default Store;
