import React, { useEffect, useState } from 'react'
import propTypes  from 'prop-types'
import Appcontext from './create'


function Provider({children}){
const [search,setsearch]=useState("")
const [titulo,settitulo]=useState("")
const [cate,setcate]=useState("")
const [crescente,setcrescente]=useState("Asc")
const [completo,setcompleto]=useState("t")

const [tarefas,settarefas]=useState(JSON.parse(localStorage.getItem("key")||"[]"))
const criartarefas=(text,cate)=>{
const tarefacompleta =[...tarefas, 
{text:text,
categoria:cate,
sentence:false,
id:Math.round(Math.random()*1000000)
}
]
settarefas(tarefacompleta)
settitulo("")
setcate("")
}  
const removetarefas=(id)=>{
const removetarefa=[...tarefas]
const filters= removetarefa.filter((filter)=>(
filter.id ===id? null:filter
))
settarefas(filters)
}
const completatarefas=(id)=>{
const completeitarefa=[...tarefas]
const filters= completeitarefa.filter((filter)=>(
filter.id ===id? filter.sentence = !filter.sentence:filter
))
settarefas(completeitarefa)
}
const aumenta=()=>{
setcrescente("Dsc")
    
}
const diminui=()=>{
setcrescente("Asc")

}




  
const exports={
aumenta,
diminui,
crescente,
setcrescente,
completo,
setcompleto,
setsearch,
search,
completatarefas,
removetarefas,
criartarefas,
cate,
setcate,
titulo,
settitulo, 
tarefas,
settarefas
}

useEffect(()=>{
localStorage.setItem("key",JSON.stringify(tarefas))
},[tarefas])
    return (




<Appcontext.Provider value={exports} >

{children}



</Appcontext.Provider>




)



    
}

export default Provider
Provider.propTypes={
children:propTypes.any
}.isRequired