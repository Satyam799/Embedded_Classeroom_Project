import { useContext } from "react";
import { createContext, useRef } from "react";

const conatext=createContext()

function Providerofcontetx({children}){

    const href=useRef(null)
    const welcome=useRef(null)
    const Offer=useRef(null)


    return <conatext.Provider value={{href,welcome,Offer}}>{children}</conatext.Provider>
}

function Uppost(){
    return useContext(conatext)
     
}

export {Providerofcontetx,Uppost}