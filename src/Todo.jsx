import React, { useContext } from 'react'
import Appcontext from './create'

function Todo() {
const {criartarefas,titulo,settitulo,cate,setcate}=useContext(Appcontext)
  
const crieitarefas=(e)=>{
e.preventDefault()
criartarefas(titulo,cate)
}  


    return (
<div className='todo' >
<h2>Criar tarefas:</h2>

<input value={titulo} onChange={(e)=>settitulo(e.target.value)}     className='input-criartarefas' type="text"placeholder='Digite o titulo' />
<section>
<select value={cate} onChange={(e)=>setcate(e.target.value)} className='select' >
<option>Selecione uma categoria</option>
<option value="Educação">Educação</option>
<option value="profissional">Profissional</option>
<option value="saude">Saude</option>
</select>
<button onClick={crieitarefas} className='buttondecriar' >Criar Tarefas</button>






</section>














    </div>
  )
}

export default Todo