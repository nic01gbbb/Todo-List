import { useContext } from 'react'
import './index.css'
import Appcontext from './create'
import Filter from './filter'

function Base() {
const {tarefas,settarefas,completatarefas,removetarefas,
search,completo,crescente,setcrescente
}=useContext(Appcontext)



  return (
  <div className='' >
<h1>Lista de tarefas</h1>    

<Filter/>




{tarefas
.filter((fil)=>(
fil.text.toLowerCase().includes(search.toLowerCase())))

.filter((fil)=>(
completo==="t"? fil: completo==="i"?!fil.sentence:fil.sentence))

.sort((a,b)=>(
crescente==="Asc"?a.text.localeCompare(b.text):b.text.localeCompare(a.text)



))

.map((tarefa)=>(

<div style={{
textDecoration:tarefa.sentence?"line-through":"none",
background:tarefa.sentence?"blue":"white"}} 
className="todo-conteudo">
<div className="conteudo">
<h4>
{tarefa.text}</h4>
<p>({tarefa.categoria})</p>
</div>
<div className="max-buttons">
<div className="buttons">
<button onClick={()=>completatarefas(tarefa.id)} className='completar' >Completar</button>
<button onClick={()=>removetarefas(tarefa.id)} className='deletar' >X</button>
</div>
</div>
</div>




))



}      
      
      
      
      
      
      
      </div>
      
  )
}

export default Base