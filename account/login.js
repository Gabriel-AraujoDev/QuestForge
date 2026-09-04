import { input } from "../console/input.js";
import fs from "fs";
import crypto from "crypto";

function esperar(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export async function logarNaConta() {
    let estaNaParteDePedirLogin = true
    
    let nome = ""
    let senha = ""
    
    while (true) {
        console.clear()
        
        if (estaNaParteDePedirLogin) {
            nome = await input("Digite seu usuário:\nR: ")
            senha = await input("Digite sua senha:\nR: ")

            estaNaParteDePedirLogin = false
        }

        const contas = JSON.parse(
            fs.readFileSync("./data/accounts.json", "utf8")
        );

        const conta = contas.find(conta => conta.nome === nome);

        if (conta) {
            const senhaHash = crypto.scryptSync(
                senha,
                "questforge-salt",
                64
            ).toString("hex");

            if (senhaHash === conta.senha) {
                console.clear()
                let design = Math.floor(Math.random() * 3) + 1;

                if (design == 1) {

                    console.log("Logando.");
                    await esperar(500);

                    console.clear();
                    console.log("Logando..");
                    await esperar(500);

                    console.clear();
                    console.log("Logando...");
                    await esperar(500);

                    console.clear();
                    console.log("Logando.");
                    await esperar(500);

                } else if (design == 2) {

                    console.log("Logando.");
                    await esperar(500);

                    console.clear();
                    console.log("Logando..");
                    await esperar(500);

                    console.clear();
                    console.log("Logando.");
                    await esperar(500);

                    console.clear();
                    console.log("Logando..");
                    await esperar(500);

                } else {

                    console.log("Logando.");
                    await esperar(500);

                    console.clear();
                    console.log("Logando..");
                    await esperar(500);

                    console.clear();
                    console.log("Logando...");
                    await esperar(500);

                    console.clear();
                    console.log("Logando.");
                    await esperar(500);
                }
                return conta
                
            } else {
                console.log("Senha ou nome de usuário não encontrado.")
                await esperar(3000)
                console.clear()
                nome = await input("Digite novamente seu usuário:\nR: ")
                senha = await input("Digite novamente sua senha:\nR: ")
            }
        } else {
            console.log("Senha ou nome de usuário não encontrado.")
            await esperar(3000)
            console.clear()
            nome = await input("Digite novamente seu usuário:\nR: ")
            senha = await input("Digite novamente sua senha:\nR: ")
        }
    }
}