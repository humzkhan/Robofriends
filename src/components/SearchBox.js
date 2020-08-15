import React from 'react'

const SearchBox = ({searchfield, sChange}) => {
    return(
        <div className='pa2'>
            <input
                className = 'pa3 ba b--green bg-lightest-blue'
                type = 'search'
                placeholder = 'search robots'
                onChange={sChange}
            />
        </div>
    );
}

export default SearchBox;