import React from "react"

/* Função responsável por fazer componentes filhos herdarem propriedades de componentes pai */
export function childrenWithProps(props){
   return React.Children.map(props.children, child => {
        return React.cloneElement(child, {...props, ...child.props})
     })
}
