import React, {useState, useEffect} from 'react';
import FilterForm from './FilterForm';

const FilterResults = () => {
    
    const [items, setItems] = useState({});
    const [filteredItems, setFilteredItems] = useState({});

    useEffect(() => {
        fetch('/items.json')
        .then((response) => response.json())
        .then((data) => setItems(data));

    }, []);


    const handleFilter = (filters) => {
        const {name, type} = filters;
        const filtered = {};

        Object.keys(items).forEach((key) => {
            if (
                (name === "" || key.toLowerCase().includes(name.toLowerCase())) && 
                (type === "" || items[key].type.toLowerCase() === type.toLowerCase())
            ) {
                filtered[key] = items[key];
            }

            
        });
    
      
setFilteredItems(filtered);


};


return (
    <div>
        <h1>filtered Items</h1>
        <FilterForm onFilter={handleFilter}/>
        <div>
            <h2>Results</h2>
            <ul>
                {Object.keys(filteredItems).map((key) => (
                    <li key={key}>
                        {key}: {filteredItems[key.type]}
                    </li>
                ))}
            </ul>
        </div>
    </div>
);




}

export default FilterResults;