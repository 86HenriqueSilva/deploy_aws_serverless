"use strict";
const AWS = require("aws-sdk");

const fetchItem = async (event) => {
  //module.exports.fetchItem = async (event) => {

    const dynamodb = new AWS.DynamoDB.DocumentClient();

    const {id} = event.pathParameters

    let item;

    try {
        const result = await dynamodb.get({
            TableName: "ItemTable",
            Key: {id}
        }).promise();

        item = result.Item;

    } catch (error) {
        console.log(error)
    }

    return {
        statusCode: 200,
        body: JSON.stringify(item),
    };
};

module.exports = {
    handler: fetchItem,
};

// Este é um código para uma função Lambda em Node.js que lê um item específico de uma tabela do Amazon DynamoDB. 
Ele usa o SDK do DynamoDB do AWS para se conectar ao banco de dados.

Aqui está uma explicação de algumas das partes importantes do código:

    A primeira linha usa o "modo estrito" do JavaScript para garantir que o código seja executado em um ambiente controlado.
    A segunda linha importa o SDK do AWS, que é usado para se conectar aos serviços da AWS na nuvem.
    A função fetchItem é a função principal que é executada quando a função Lambda é acionada. Ela recebe um argumento event que contém informações sobre a solicitação que acionou a função.
    A linha 7 cria um objeto dynamodb que representa o serviço do Amazon DynamoDB.
    A linha 9 extrai o parâmetro id do objeto pathParameters do event, que contém o valor do ID do item que deve ser lido do DynamoDB.
    A partir da linha 11, a função tenta ler o item do DynamoDB usando o método get do objeto dynamodb e o valor do ID.
    Se a leitura for bem-sucedida, o objeto Item do resultado é atribuído à variável item.
    Se a leitura falhar, a função registra um erro no console.
    A partir das linhas 18 a 22, a função cria uma resposta HTTP com um código de status 200 e um corpo JSON que contém o item lido do DynamoDB.
    A última linha exporta a função fetchItem como o manipulador da função Lambda para que ela possa ser executada quando a função é acionada.
    
//
