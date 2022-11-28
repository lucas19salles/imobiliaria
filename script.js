/* 
Escreva um programa em javascript que funcione como um cadastro de imóveis e atenda aos seguintes requisitos:

- Deve ter um menu interativo que sempre é exibido até que o usuário escolha sair.
- O menu interativo deve mostrar no topo a quantidade de imóveis cadastrados.
- O menu deve ter a opção de salvar um imóvel.
- Para salvar um novo imóvel o programa deve pedir as seguintes informações:
    - Nome do proprietário.
    - Quantidade de quartos.
    - Quantidade de banheiros.
    - Se possui garagem.
- O menu também deve ter a opção de mostrar todos os imóveis salvos.
*/

const imoveis = [];
let option = "";

do {
  option = prompt(
    `Bem vindo ao cadastro  de Imoveis\nImóveis cadastro: ${imoveis.length}\n\n1 - Novos Imóveis\n2 - Imóveis cadastrado\n3 - Sair `
  );

  switch (option) {
    case "1":
      let imovel = {};
      imovel.proprietario = prompt("Qual nome do proprietário? ");
      imovel.quartos = prompt("Quantos quartos tem? ");
      imovel.banheiro = prompt("Quantos banheiro existe na casa? ");
      imovel.garagem = prompt("Tem garagem (sim/não)? ");

      const confirma = confirm(
        "Deseja salvar o imóvel\n" +
          "\nProprietário: " +
          imovel.proprietario +
          "\nQuartos: " +
          imovel.quartos +
          "\nBanheiro: " +
          imovel.banheiro +
          "\nGaragem: " +
          imovel.garagem
      );

      if (confirma) {
        imoveis.push(imovel);
        alert("Salvo com suceso!!");
      } else {
        alert("Voltando para menu principal");
      }

      break;

    case "2":
      for (let i = 0; i < imoveis.length; i++) {
        alert(
          "Imóvel " +
            (i + 1) +
            "\nProprietário: " +
            imoveis[i].proprietario +
            "\nQuartos: " +
            imoveis[i].quartos +
            "\nBanheiros: " +
            imoveis[i].banheiro +
            "\nPossui Garagem? " +
            imoveis[i].garagem
        );
      }
      break;

    case "3":
      alert("Saindo...");
      break;

    default:
      alert("Opção Inválida");
      break;
  }
} while (option !== "3");
