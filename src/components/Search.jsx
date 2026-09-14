import React from 'react';
import searchIcon from '../public/search.svg'

const Search = ({ searchTerm, setSearchTerm }) => {
    return (
        <div className="search">
            <div>
                <img src={searchIcon} alt="Search" className="mr-0" />
                <input
                    type="text"
                    placeholder="Serach movies..."
                    value={searchTerm}
                    onChange={(event) => setSearchTerm(event.target.value)}

                />
            </div>
        </div>

    )
}
export default Search
