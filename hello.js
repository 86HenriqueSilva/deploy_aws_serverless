"use strict";

const hello = async (event) => {
//module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Go Serverless v2.0! Your function executed successfully!",
        input: event,
      },
      null,
      2
    ),
  };
};


module.exports = {
    handler:hello
}


//
Este é um código para uma função Lambda em Node.js que retorna uma mensagem simples quando acionada. 
Ele usa o formato de retorno padrão do AWS Lambda que é um objeto com as propriedades statusCode e body.

Aqui está uma explicação das partes importantes do código:

    A primeira linha usa o "modo estrito" do JavaScript para garantir que o código seja executado em um ambiente controlado.
    A função hello é a função principal que é executada quando a função Lambda é acionada. 
    Ela recebe um argumento event que contém informações sobre a solicitação que acionou a função.
    A partir da linha 4, a função retorna um objeto com as propriedades statusCode e body. 
    O statusCode é definido como 200, o que significa que a solicitação foi bem-sucedida.
    O body é um objeto JSON que contém uma mensagem e o objeto event recebido como entrada.
    A partir da linha 11, a função exporta o objeto { handler: hello } como o manipulador da função Lambda.
    Isso permite que a função seja executada quando a função é acionada.
//




