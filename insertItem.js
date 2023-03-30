"use strict";

const {v4} = require("uuid");
const AWS = require("aws-sdk")

const insertItem = async (event) => {
//module.exports.insertItem = async (event) => {

  const {item} = JSON.parse(event.body);
  const createdAt = new Date().toISOString();
  const id = v4()

  const dynamodb = new AWS.DynamoDB.DocumentClient();

  const newItem = {
    id,
    item,
    createdAt,
    itemStatus: false
  }

  await dynamodb.put({
    TableName: "ItemTable",
    Item: newItem
  }).promise()

  return {
    statusCode: 200,
    body: JSON.stringify(newItem),
  };
};


module.exports = {
    handler:insertItem
}


//

Este é um código para uma função Lambda em Node.js que insere um item em uma tabela do Amazon DynamoDB quando acionada.
Aqui está uma explicação das partes importantes do código:

    A primeira linha usa o "modo estrito" do JavaScript para garantir que o código seja executado em um ambiente controlado.
    A função insertItem é a função principal que é executada quando a função Lambda é acionada. 
    Ela recebe um argumento event que contém informações sobre a solicitação que acionou a função.
    A partir da linha 6, a função lê o corpo da solicitação recebida e extrai o objeto item que deve ser inserido na tabela do DynamoDB.
    A partir da linha 7, a função cria um ID único para o novo item usando o pacote uuid.
    A partir da linha 9, a função cria uma instância do cliente DocumentClient para acessar a tabela do DynamoDB.
    A partir da linha 11, a função cria um novo objeto newItem que contém as propriedades id, item, createdAt e itemStatus.
    A partir da linha 19, a função usa o método put do cliente DocumentClient para inserir o novo item na tabela do DynamoDB.
    A partir da linha 22, a função retorna um objeto com as propriedades statusCode e body. 
    O statusCode é definido como 200, o que significa que a solicitação foi bem-sucedida. 
    O body é um objeto JSON que contém o novo item inserido na tabela do DynamoDB.
    A partir da linha 27, a função exporta o objeto { handler: insertItem } como o manipulador da função Lambda. 
    Isso permite que a função seja executada quando a função é acionada.
    
//    

