import "../styles/globals.css";
import "../styles/app.globals.css" // é nesse arquivo onde importamos todos os css globais.

/* A função App é justamente a função que faz com que as páginas sejam exibidas */
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
