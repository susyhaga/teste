const { defineConfig } = require("cypress");


module.exports = defineConfig({
e2e: {
  setupNodeEvents(on, config) {
     // Implementar escutadores de eventos do Node aqui
  },
   chromeWebSecurity: false, // Desativa a segurança da web do Chrome
   // Caso você queira habilitar relatórios, suporte a vídeos ou screenshots
   video: false, // Grava vídeos dos testes
   screenshotOnRunFailure: true, // Captura screenshots ao falhar
},
    //para criar um relatorio  html de testes
    reporter: 'mochawesome',
    reporterOptions:{
    reportDir: 'cypress/relatorio',
    //para sobreescrever arquivos existentes
    overwrite: true,
    html: true,
    json: false,
    timestamp: 'ddmmyyyy_HHMMss'
    }
});


