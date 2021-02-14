import { AsyncTypeahead } from 'react-bootstrap-typeahead';
import { React, useState } from 'react'
import { BASE_URL, headers } from "../../constants/api";
import { Link } from "react-router-dom";

const SearchBox = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [options, setOptions] = useState([]);

    const fetchoptions = { headers }

    const url = BASE_URL + "establishments/";
    const handleSearch = (async query => {
        setIsLoading(true);

        let response = await fetch(url, fetchoptions, query)
        let result = await response.json();

        const array = result.map(i => ({
            id: i.id,
            name: i.name,
        }));

        setOptions(array);
        setIsLoading(false);

    });

    function refreshPage(){ 
        setTimeout(() => window.location.reload(), 50);
    }
    

  return (
    <AsyncTypeahead
    id="async"
    isLoading={isLoading}
    labelKey="name"
    minLength={2}
    onSearch={handleSearch}
    options={options}
    placeholder="Search for hotel"
    renderMenuItemChildren={(option) => (
        <div className="typeahead">
        <Link onClick={ refreshPage } to={`/hotel/${option.id}`}>{option.name}</Link>
        </div>
    )}
/>

  );
};

export default SearchBox;