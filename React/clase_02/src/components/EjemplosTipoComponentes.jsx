import React from "react";

//componete clase (NOO UTILICEN ESTE)
export class EjemploClase extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            saludo: 'Hola!! soy un componete de clase'
        }
    }

    render(){
        return <h2>{this.state.saludo}</h2>
    }
}


//componete funcional (UTILICEN ESTE)
export const EjemploFuncional = () => {
    const saludo = 'Hola!! soy un componente funcional'
    return <h2>{saludo}</h2>
}