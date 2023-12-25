import { createContext,useContext } from "react";

export const Todoconetxt =createContext({
    todos:[
        {
            id:1,
            todo:'Todo msg',
            completd:false
        },

        addodo:(todo)=>{}
        updatetodo:(todo,id)=>{}
        deletetodo:(id)=>{}
        tooglecomplete:(id)=>{}

       
    ],
})




// this is required because each time you are not going to 
// write like useContext(usetodo)



export const useTodo=()=>{
    return useContext(Todoconetxt)
}


// this is required becauswe no need to write abd creating another file where you 
// will make a provider and then pass on the child 



export const TodoProvider=Todoconetxt.Provider