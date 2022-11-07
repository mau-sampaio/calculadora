import somar from "./somar.js";
import subtrair from "./subtrair.js";
import dividr from "./dividir.js";
import multiplicar from "./multiplicar.js";

const operacao = {
    numero1: null,
    numero2: null,
    operador: null,
};

const funcoesCalculadora = {
    "+":somar,
    "-":subtrair,
    "x":multiplicar,
    "/":dividr,
};

function mostarNumAtual(numero) {
    document.querySelector(".numero-atual").innerText = numero;
}

function mostrarHistorico(numero) {
    document.querySelector(".historico").innerText = numero;
}

function valoresPainel(num1, num2, operador,valor,historico) {
    operacao.numero1 = num1;
    operacao.numero2 = num2;
    operacao.operador = operador;
    mostarNumAtual(valor);
    mostrarHistorico(historico);
}

window.addEventListener("load", () => {
    const botoes = document.querySelectorAll("button");


    for (const botao of botoes) {
        botao.addEventListener("click", () => {
            const botaoSelecionado = botao.innerText;
            // IF para previr mais de 1 ponto
            if (operacao.numero1 && operacao.numero1.includes(".") && botaoSelecionado === ".") {
                return
            }

            //IF para capturar todos os números e pontos
            if (botaoSelecionado && (!isNaN(Number(botaoSelecionado)) || botaoSelecionado === ".")) {
                const chave = operacao.operador && operacao.numero1 ? "numero2" : "numero1";
                
                const valor = operacao[chave] ? operacao[chave] + botaoSelecionado : botaoSelecionado;
                
                operacao[chave] = valor;
                mostarNumAtual(valor)
                if (operacao.operador && operacao.numero1) {
                    mostrarHistorico(operacao.numero1+operacao.operador)                    
                }
                return
            }


            //IF para capturar a lixeira
            if (botaoSelecionado == "") {
                valoresPainel(null, null, null, "", "");
                return
            }

            //IF para capturar o igual
            if (botaoSelecionado == "=") {
                if (operacao.numero1 && operacao.numero2 && operacao.operador) {
                    const resultado = funcoesCalculadora[operacao.operador](Number(operacao.numero1), Number(operacao.numero2));
                    valoresPainel(String(resultado), null, null, resultado,"")
                }   
                return
            }

            //IF para realizara operação da calculadora
            if (operacao.numero1 && operacao.numero2 && operacao.operador) {
                const resultado = funcoesCalculadora[operacao.operador](Number(operacao.numero1), Number(operacao.numero2));
                valoresPainel(String(resultado), null, null, resultado, "")
                return
            }   
            
            if (operacao.numero1) {
                operacao.operador = botaoSelecionado;
                return
            }
          
        })
    }



})