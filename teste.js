const fs = require("fs");

// Primeiro teste //

function calcularSoma() {
  let INDICE = 13;
  let SOMA = 0;
  let K = 0;
  while (K < INDICE) {
    K += 1;
    SOMA += K;
  }
  console.log("Valor de SOMA: " + SOMA);
}

// Segundo teste //

function verificarFibonacci(n) {
  let a = 0;
  let b = 1;
  while (b < n) {
    let temp = b;
    b = a + b;
    a = temp;
  }
  if (b === n || n === 0) {
    console.log("O número " + n + " pertence à sequência de Fibonacci.");
  } else {
    console.log("O número " + n + " não pertence à sequência de Fibonacci.");
  }
}

// Terceiro teste //

function analisarFaturamento(filePath) {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("Erro ao ler o arquivo:", err);
      return;
    }
    let faturamento = JSON.parse(data);
    let valores = faturamento
      .map((item) => item.valor)
      .filter((valor) => valor > 0);

    let menorFaturamento = Math.min(...valores);
    let maiorFaturamento = Math.max(...valores);
    let mediaMensal =
      valores.reduce((acc, valor) => acc + valor, 0) / valores.length;

    let diasAcimaDaMedia = valores.filter(
      (valor) => valor > mediaMensal
    ).length;

    console.log("Menor faturamento: " + menorFaturamento);
    console.log("Maior faturamento: " + maiorFaturamento);
    console.log("Dias com faturamento acima da média: " + diasAcimaDaMedia);
  });
}

// Quarto teste //

function calcularPercentualFaturamento() {
  let faturamentoEstados = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53,
  };

  let total = Object.values(faturamentoEstados).reduce(
    (acc, valor) => acc + valor,
    0
  );

  for (let estado in faturamentoEstados) {
    let percentual = (faturamentoEstados[estado] / total) * 100;
    console.log(`${estado}: ${percentual.toFixed(2)}%`);
  }
}

// Quinto teste //

function inverterString(s) {
  let invertida = "";
  for (let i = s.length - 1; i >= 0; i--) {
    invertida += s[i];
  }
  console.log("String invertida: " + invertida);
}

// Chamando as funções //

calcularSoma(); // Q1
verificarFibonacci(21); // Q2
analisarFaturamento("faturamento.json"); // Q3
calcularPercentualFaturamento(); // Q4
inverterString("Meu nome é Brunno"); // Q5
