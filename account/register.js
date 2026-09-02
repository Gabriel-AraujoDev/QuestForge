import { input } from "../console/input.js";
import { endInput } from "../console/input.js";
import fs from "fs";
import crypto from "crypto";


function registrarNoJSON(nome, senha) {
    const senhaHash = crypto.scryptSync(
        senha,
        "questforge-salt",
        64
    ).toString("hex");

    const contas = JSON.parse(
        fs.readFileSync("./data/contas.json", "utf8")
    );
   
    contas.push({
        id: contas.length + 1,
        nome: nome,
        senha: senhaHash,
        nivel: 1,
        xp: 0,
        moedas: 100
    });

    fs.writeFileSync(
        "./data/contas.json",
        JSON.stringify(contas, null, 4)
    );
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
                registrarNoJSON(nome, senha)

                console.log('Conta registrada!')
                endInput()
            } else if (verificaONome.substring(0,1) == "n" || verificaONome.substring(0,1) == "N"){
                nome = await input("Digite seu novo nome de usuário:\nR: ")
            }
        }
    }
}
