console.clear()

import fs from "fs";
// ACCOUNT
import { registrarUmaConta } from "./account/register.js";
import { logarNaConta } from "./account/login.js"

// CONSOLE
import { input } from "./console/input.js";
import { criarMenu } from "./console/menu.js"
import { interagirComMenu } from "./console/menu.js"

let contaAtual = []

function contasJSON() {
    const dados = fs.readFileSync("./data/contas.json", "utf8");

    // para n dar erro ele so vai retornar uma tabela vazia
    const contas = dados.trim() === ""
        ? []
        : JSON.parse(dados);

    return contas
}

if (contasJSON().length === 0) {
    contaAtual = await registrarUmaConta()
} else {
    while (true) {
        const resposta = await input("Você já tem uma conta?:\nR: ")

        if (resposta.substring(0,1) == "s" || resposta.substring(0,1) == "S") {
            contaAtual = await logarNaConta()
            break
        } else if (resposta.substring(0,1) == "n" || resposta.substring(0,1) == "N"){
            contaAtual = await registrarUmaConta()
            break
        }
    }
}

if (criarMenu(contaAtual)) {
    interagirComMenu()
}
