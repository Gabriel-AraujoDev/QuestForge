import { input } from "../console/input.js";
import fs from "fs";
import crypto from "crypto";

function esperar(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function registrarNoJSON(nome, senha) {
    const senhaHash = crypto.scryptSync(
        senha,
        "questforge-salt",
        64
    ).toString("hex");

    const contas = JSON.parse(
        fs.readFileSync("./data/contas.json", "utf8")
    );

    console.log("Registrando conta.")

    const novaConta = {
        id: contas.length + 1,
        nome: nome,
        senha: senhaHash,
        nivel: 1,
        xp: 0,
        moedas: 100
    };

    contas.push(novaConta);

    fs.writeFileSync(
        "./data/contas.json",
        JSON.stringify(contas, null, 4)
    );

    
    await esperar(1000)

    console.log("Conta registrada")
    
    return novaConta
}

export async function registrarUmaConta() {
    let estaNaParteDeCriarNomeESenha = true
    let estaNaParteDeVerificarSenha = false
    let estaNaParteDeVerificarONome = false

    console.clear()

    let nome = ""
    let senha = ""
    let quantasVezes = 1

    while (true) {
        if (estaNaParteDeCriarNomeESenha) {
            nome = await input("Digite um nome de usuário:\nR: ")
            senha = await input("Digite uma senha:\nR: ")

            estaNaParteDeCriarNomeESenha = false
            estaNaParteDeVerificarSenha = true
        }

        if (estaNaParteDeVerificarSenha) {
            console.clear()
            const verificacaoDeSenha = await input(`Confirme sua senha: (${quantasVezes}x) \nR: `)

            if (quantasVezes < 3) {
                if (verificacaoDeSenha === senha) {
                    estaNaParteDeVerificarSenha = false
                    estaNaParteDeVerificarONome = true
                } else {
                    quantasVezes += 1
                }
            } else {
                senha = await input("Digite sua nova senha:\n")
                quantasVezes = 1
            }
        }

        if (estaNaParteDeVerificarONome) {
            console.clear()
            const verificaONome = await input(`Você confirma esse nome: ${nome}\nR: `)

            if (verificaONome.substring(0,1) == "s" || verificaONome.substring(0,1) == "S") {
                return await registrarNoJSON(nome, senha)
            } else if (verificaONome.substring(0,1) == "n" || verificaONome.substring(0,1) == "N"){
                nome = await input("Digite seu novo nome de usuário:\nR: ")
            }
        }
    }
}
