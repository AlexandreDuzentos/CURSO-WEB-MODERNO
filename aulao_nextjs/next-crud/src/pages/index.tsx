import Image from "next/image";
import localFont from "next/font/local";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/cliente";
import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import { useEffect, useState } from "react";
import ColecaoCliente from "../backend/db/ColecaoCliente";
import ClienteRepositorio from "../core/ClienteRepositorio";
import useClientes from "../hooks/useClientes";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
   
  const {
         cliente,
         clientes,
         visivel,
         selecionarCliente,
         salvarCliente,
         excluirCliente,
         novoCliente,
         setVisivel} = useClientes()

  /*
  const clientes = [
     new Cliente("Ana", 34, 1),
     new Cliente("Alexandre", 21, 2),
     new Cliente("Mario", 18, 3),
     new Cliente("Paulo", 20, 4)   
  ]
     */
  return (
    <div className={` 
       flex justify-center items-center h-screen
       bg-gradient-to-r from-blue-500 to-purple-500
      
    `}>
       <Layout titulo="Cadastro simples">

        {visivel === 'tabela' ? (
          <>
            <div className="flex justify-end">
            <Botao cor="green" className="mb-4"
             onClick={() => novoCliente()}>Novo cliente</Botao>
          </div>
          
           <Tabela clientes={clientes}
              clienteSelecionado={selecionarCliente}
              clienteExcluido={excluirCliente}>
            </Tabela>
          </>
        ) : (
          <Formulario
           cliente={cliente}
           cancelado={() => setVisivel("tabela")}
           clienteMudou={salvarCliente} />
        )}
       </Layout>
    </div>
  );
}
