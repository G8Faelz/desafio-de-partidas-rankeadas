function calcularNivel(vitorias, derrotas) {
  // Calcula o saldo de Rankeadas (vitórias - derrotas)
  let saldoVitorias = vitorias - derrotas;
  // Determina o nível do jogador com base no saldo de vitórias
  let nivel;

  if (vitorias < 10) {
      nivel = "Ferro";
  } else if (vitorias >= 11 && vitorias <= 20) {
      nivel = "Bronze";
  } else if (vitorias >= 21 && vitorias <= 50) {
      nivel = "Prata";
  } else if (vitorias >= 51 && vitorias <= 80) {
      nivel = "Ouro";
  } else if (vitorias >= 81 && vitorias <= 90) {
      nivel = "Diamante";
  } else if (vitorias >= 91 && vitorias <= 100) {
      nivel = "Lendário";
  } else {
      nivel = "Imortal";
  }

  // Retorna a mensagem com o saldo de vitórias e o nível do jogador
  return `O Herói tem saldo de ${saldoVitorias} e está no nível de ${nivel}`;
}

// Exemplo de uso da função
let mensagem = calcularNivel(105, 20);
console.log(mensagem); // Exibe: O Herói tem saldo de 55 e está no nível de Ouro