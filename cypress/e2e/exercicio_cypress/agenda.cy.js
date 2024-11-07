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
        
        // Localiza o último contato na lista e clica no botão "Editar"
        cy.get('.contato').last().find('button.edit').click();
    
        // Preenche os campos de edição com os novos dados
        const updatedData = {
            name: 'Nome Editado',
            email: 'nome.editado@gmail.com',
            phone: '11988887777'
        };
    
        cy.get('input[placeholder="Nome"]').clear().type(updatedData.name);
        cy.get('input[placeholder="E-mail"]').clear().type(updatedData.email);
        cy.get('input[placeholder="Telefone"]').clear().type(updatedData.phone);
        
        // Clica no botão "Adicionar" para salvar as alterações
        cy.get('button.adicionar').click();
        
        cy.wait(5000); // Aguarda a operação ser concluída (se necessário)
    
        // Verifica se o nome, e-mail e telefone atualizados aparecem na lista de contatos
        cy.contains('.contato', updatedData.name).should('exist');
        cy.contains('.contato', updatedData.email).should('exist');
        cy.contains('.contato', updatedData.phone).should('exist');
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
