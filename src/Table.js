import React from 'react'


 {/**Emmet */}
function Table({countries}) {
    return (
        <div className="table">
            {countries.map(country=>{
                <tr>
               
                    <td>{country.country}</td>
                    <td></td>
                </tr>
            })}
        </div>
        
    )
}

export default Table
