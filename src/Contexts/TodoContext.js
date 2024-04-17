import { createContext,useContext } from "react";

export const TodoContext = createContext({
    todos:[
        {
            id:1,
            todo:"todo msg",
            check: false
        }
    ],
    addtodo : (todo) =>{},
    updatetodo : (id,todo)=>{},
    deletetodo : (id)=>{},
    toggolecheck: (id)=>{}

});

export const Usetodo = ()=>{
    return useContext(TodoContext)
}
export const Todoprovider = TodoContext.Provider