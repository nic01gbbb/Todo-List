import React, { useContext } from 'react'
import Search from './Search'
import Appcontext from './create'

function Filter() {
const {completo,setcompleto}=useContext(Appcontext)
const {aumenta,diminui}=useContext(Appcontext)  

  return (
  
  
  <div className="">
  <Search/>
  <div className='filter' >
      
 <h2>Filtrar:</h2>
<div className="filterconteudo">
<div className="status">
<h4>Status</h4>
<select value={completo} onChange={(e)=>setcompleto(e.target.value)} name="" id="">
<option value="t">Todas</option>
<option value="i">Incompletas</option>
<option value="c">Completas</option>
</select>
</div>

<div className="filtersbuttons">
<h4>Ordém alfabética:</h4>
<div className="btns">
<button onClick={diminui} >Asc</button>
<button onClick={aumenta} >Dsc</button>
</div>







</div>
</div>
</div>






    </div>
  )
}

export default Filter
