import React, { Component } from "react"
import Main from "../template/Main"
import axios from "axios";

/*
 Objeto contendo informação que serão passadas para o
 componente header, pois as informações presentes nela variam 
 de acordo com a página que está sendo renderizada.
 */
const headerProps = {
    icon: "users",
    title: "Usuários",
    subtitle: "Cadastro de usuários: Inclui, Listar, Alterar e Excluir!"
}


/*
 Endereço do meu backend para onde a requsição para salvar um user
 será enviada.
 */
const baseUrl = "http://localhost:3001/users"

/**
 * Esse objeto representa o estado inicial do meu componente, para que eventualmente
 * eu possa voltar ele para esse estado, este estado é constante, ou seja, não pode ser
 * alterado.
 * 
  */
const initialState = {
   user : {name : "", email : ""},
   list: []
}


export default class userCrud extends Component {

    /* Inicializando o estado do meu componente, este estado pode ser alterado */
    state = {...initialState}

   /*
      A função abaixo é invocada imediatamente após o componente ser montado,
      atualizar o estado aqui irá disparar re-renderização do componente.
    */
    componentDidMount(){
         axios.get(baseUrl).then(resp => {
             this.setState({list: resp.data})
         })
    }

    /* Método responsável por voltar o meu componente ao seu estado inicial */
    clear() {
        /*
        É esperado que as mudanças no estado de um componente sejam feitas pela
        função setState, por isso, não é interessante que outras partes do código mudem
        o estado do objeto(state), é esperado que elas apenas o utilizem.
         */
      this.setState({user: initialState.user})
    }

    /*
    Método responsável por salvar ou alterar um user, se o objeto user
    tiver um id quer dizer que a operação que será realizada é um Update,
    senão é um Insert
     */
    save(){
        /*
         Clonando(copiando) o objeto user do estado do componente, para não ter que alterar
         diretamente o estado  do componente e sim alterar o objeto clonado e posteriormente setar esse objeto
         clonado no estado do objeto.
        
         */
        const user = this.state.user
        const method = user.id ? "put" : "post"
        const url = user.id ?  `${baseUrl}/${user.id}` : `${baseUrl}`

        axios[method](url, user).then(resp => {
             const list = this.getUpdatedList(resp.data)
             this.setState({user: initialState.user, list})
        })

    }

    /*
      Método responsável por retornar uma lista com todos os users
      que forem inseridos ou alterados e colocando sempre o último
      usuário salvo na primeira posição da lista, a finalidade disso
      é fazer com que o último usuário inserido seja sempre renderizado
      na primeira linha da tabela.
     */
    getUpdatedList(user){
        /*
         Removendo da minha lista o user
         que for passado como argumento para a função
         getUpdatedList.

         Eu quero todos os usuários dessa lista(list)
         cujo id é diferente do id do user passado como argumento.
         */
        const list = this.state.list.filter(u => u.id !== user.id)
        
        /*
         Adicionando o usuário que foi removido da minha lista na linha acima na
         primeira posição da minha lista.
         */
        list.unshift(user)
        return list
    
    }

    /*
     Método responsável por obter os valores dos campos
     do formulário e setar no estado do componente
     */
    updateFields(event){
        const user = {...this.state.user}
        user[event.target.name] = event.target.value
        this.setState({ user })
    }

    /*
     Função responsável por retornar o componente formulário, a finalidade desse tipo
     de função é quebrar a view completa em várias partes separadas e posteriormente
     chama-las em um único local para que elas de fato componham o jsx completo.
     */
    renderForm(){
        return (
           <div className="form">
              <div className="row">
                  <div className="col-12 col-md-6">
                     <div className="form-group">
                          <label>Nome</label>
                          <input type="text" className="form-control" name="name"
                          value={this.state.user.name}
                          onChange={event => this.updateFields(event)}
                          placeholder="Digite o nome..."/>
                     </div>
                  </div>

                  <div className="col-12 col-md-6">
                     <div className="form-group">
                          <label>E-mail</label>
                          <input type="email" className="form-control" name="email"
                          value={this.state.user.email}
                          onChange={event => this.updateFields(event)}
                          placeholder="Digite o email..."/>
                     </div>
                  </div>
              </div>

              <div className="row">
                  <div className="col-12 d-flex justify-content-end">
                     <button className="btn btn-primary" onClick={event => this.save(event)}>
                        Salvar
                     </button>
                     <button className="btn btn-secondary ml-2" onClick={event => this.clear(event)}>
                         Cancelar
                     </button>
                  </div>
              </div>
           </div>
        )
    }

    /*
     Função responsável por carregar os users sendo editados no estado do
     componente.
     */
    load(user){
       this.setState({ user })
    }

    /*
      Função responsável por remover um user do banco de dados e da lista
      de users do estado do componente.
     */
    remove(user){
        axios.delete(`${baseUrl}/${user.id}`).then(resp => {
            /* Filtrando todo u tal que u seja diferente de user */
            const list = this.state.list.filter(u => u !== user )
            this.setState({ list })
        })
    }

    /* Função responsável por retornar o componente tabela */
    renderTable(){
        return (
            <table className="table mt-4">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>E-mail</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderRows()}
                </tbody>
            </table>
        )
    }

    /* Função responsável por renderizar o conteúdo do tbody da table */
    renderRows(){
        return this.state.list.map(user => {
            return (
                <tr key={user.id}>
                   <td>{user.id}</td>
                   <td>{user.name}</td>
                   <td>{user.email}</td>
                   <td>
                      <button className="btn btn-warning"
                      onClick={_ => this.load(user)}>
                         <i className="fa fa-pencil"></i>
                      </button>
                      <button className="btn btn-danger ml-4"
                      onClick={_ => this.remove(user)}>
                         <i className="fa fa-trash"></i>
                      </button>
                   </td>
                </tr>
            )
        })
    }

    render(){
        console.log(this.state.list)
        return (
            <Main {...headerProps}>
                 {this.renderForm()}
                 {this.renderTable()}
            </Main>
        )
    }
}