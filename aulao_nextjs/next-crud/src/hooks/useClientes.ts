import { useEffect, useState } from "react"
import Cliente from "../core/cliente"
import ClienteRepositorio from "../core/ClienteRepositorio"
import ColecaoCliente from "../backend/db/ColecaoCliente"

export default function useClientes(){

    const repo: ClienteRepositorio = new ColecaoCliente()

  const[cliente, setCliente] = useState<Cliente>(Cliente.vazio)
  const[clientes, setClientes] = useState<Cliente[]>([])
  const[visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')

  /*
     O useEffect é um hook cuja função
     passada como argumento para ela é
     executada assim que o componente é
     inicializado.  
  */
  useEffect(obterTodos, [])

  function obterTodos(){
    repo.obterTodos().then(clientes => {
       setClientes(clientes)
       setVisivel("tabela")
    })
  }

  function selecionarCliente(cliente: Cliente){
    setCliente(cliente)
    setVisivel("form")
  }

  async function excluirCliente(cliente: Cliente){
    await repo.excluir(cliente)
    obterTodos()
  }

  function novoCliente(){
    setCliente(Cliente.vazio())
    setVisivel("form") 
  }

  async function salvarCliente(cliente: Cliente){
    await repo.salvar(cliente)
    setVisivel("tabela")
    obterTodos()
  }

  return {
    cliente,
    clientes,
    visivel,
    obterTodos,
    salvarCliente,
    selecionarCliente,
    excluirCliente,
    novoCliente,
    setVisivel,
    setCliente,
    setClientes
  }
}