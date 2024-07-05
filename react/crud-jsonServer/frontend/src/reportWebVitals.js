/* Esse arquivo ajuda a fazer cache dos arquivos estáticos da minha aplicação, isso 
serve para aumentar a performance da aplicação, uma vez que caso haja arquivos armazenados
no cache do browser, a requisição para obter aquele arquivo do servidor se torna desnecessária,
pois a aplicação usará o arquivo armazenado em cache */
const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
