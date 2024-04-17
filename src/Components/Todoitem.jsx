import React, { useState } from 'react'
import { Usetodo } from '../Contexts/TodoContext';
export default function TodoItem({ todo }) {

   const [istodoedit,setistodoedit] = useState(false)
   const [todomsg,settodomsg]=useState(todo.todo)
   const {updatetodo,deletetodo,toggolecheck} = Usetodo();

   const edittodo = ()=>{
    updatetodo(todo.id,{...todo,todo:todomsg})
    setistodoedit(false)
   } 
   const togglecheck = ()=>{
    toggolecheck(todo.id)
   }
   const deleteTodo = ()=>{
    deletetodo(todo.id)
   }

  return (
      <div
          className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
              todo.check ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
          }`}
      >
          <input
              type="checkbox"
              className="cursor-pointer"
              checked={todo.check}
              onChange={togglecheck}
          />
          <input
              type="text"
              className={`border outline-none w-full bg-transparent rounded-lg ${
                  istodoedit ? "border-black/10 px-2" : "border-transparent"
              } ${todo.check ? "line-through" : ""}`}
              value={todomsg}
              onChange={(e) => settodomsg(e.target.value)}
              readOnly={!istodoedit}
          />
          {/* Edit, Save Button */}
          <button
              className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
              onClick={() => {
                  if (todo.check) return;

                  if (istodoedit) {
                    edittodo();
                  } else setistodoedit((prev) => !prev);
              }}
              disabled={todo.check}
          >
              {istodoedit ? "📁" : "✏️"}
          </button>
          {/* Delete Todo Button */}
          <button
              className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
              onClick={() => deleteTodo(todo.id)}
          >
              ❌
          </button>
      </div>
  );
}
