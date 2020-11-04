import React from 'react';

const SearchPanel = (props) => {
	return (
		<>
			<input type="text" name="Search" placeholder="Type query here" value={props.search} onChange={props.onChange}></input><br></br>
			<label htmlFor="stockOnly"><input type="checkbox" name="stockOnly" id="" value={props.stockOnly} onChange={props.onChange} />{" Stock only"}</label>
		</>
	)
}

export default SearchPanel;
