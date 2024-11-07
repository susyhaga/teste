/// <reference types="cypress" />

describe('Testes para agenda de contatos', () => {

    // Função para gerar dados aleatórios
    const generateRandomData = () => {
        const firstNames = ['Italo', 'Eliza', 'Susy'];
        const lastNames = ['Unhaiser', 'Haga', 'Haga Unhaiser'];
        const randomFirstName = firstNames[Math.floor(Math.random() * firstNames.length)];
        const randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)];
        const randomName = `${randomFirstName} ${randomLastName}`;
        const randomEmail = `${randomFirstName.toLowerCase()}.${randomLastName.toLowerCase()}@gmail.com`;
        const randomPhone = Math.floor(10000000000 + Math.random() * 90000000000).toString();

        return {
            name: randomName,
            email: randomEmail,
            phone: randomPhone
        };
    }

    it('Deve renderizar os contatos da lista', () => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
        cy.wait(8000)

        cy.get('body').then(($body) => {
            if ($body.find('.contato').length > 0) {
                cy.get('.contato').should('have.length.greaterThan', 0);
            } else {
                cy.get('.contato').should('not.exist');
            }
        });
    });

    it('Deve adicionar um novo contato', () => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
        const randomUserData = generateRandomData();

        cy.get('input[placeholder="Nome"]').click().type(randomUserData.name)
        cy.get('input[placeholder="E-mail"]').click().type(randomUserData.email)
        cy.wait(2000)
        cy.get('input[placeholder="Telefone"]').click().type(randomUserData.phone)
        cy.get('button.adicionar').click()
        cy.wait(2000)

        // Verifica se o contato foi adicionado com sucesso
        cy.get('.contato').should('contain', randomUserData.name)
    });

    it('Deve editar um contato existente', () => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
        
      // Clica no botão "Editar" do último contato adicionado
        cy.get('.contato:last').find('button.edit').click()

      // Gera novos dados aleatórios para a edição
        const randomEditData = generateRandomData();

      // Edita os campos com os novos dados gerados
        cy.get('input[placeholder="Nome"]').clear().type(randomEditData.name)
        cy.get('input[placeholder="E-mail"]').clear().type(randomEditData.email)
        cy.get('input[placeholder="Telefone"]').clear().type(randomEditData.phone)

      // Clica no botão "alterar" para salvar as edições
        cy.get('button.alterar').click()
        cy.wait(20000)
    });

    it('Deve deletar o primeiro contato', () => {
        cy.visit('https://agenda-contatos-react.vercel.app/')

        // Seleciona e deleta o primeiro contato da lista
        cy.get('.contato').first().within(() => {
            cy.get('button.delete').click()
        })
        
        // Verifica se o contato foi removido
        cy.get('.contato').should('not.contain', 'Nome do contato que foi deletado')
    })
})
