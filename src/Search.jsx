import React, { useContext } from 'react'
import Appcontext from './create'

function Search() {
const {search,setsearch}=useContext(Appcontext)
  return (
  <div className='search' >
 <h2>Pesquisar:</h2>
 <input value={search} onChange={(e)=>setsearch(e.target.value)} className='inputsearch'  type="text" placeholder='Digite para pesquisar'/>

</div>
  )
}

export default Search