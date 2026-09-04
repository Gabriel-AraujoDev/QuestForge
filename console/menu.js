import { input } from "./input.js";
import { animacao } from "./console-animation.js"
import { minigame } from "../services/minigame.js";

export function criarMenu(contaAtual) {
    console.clear();

    console.log("╔══════════════════════════════════════════════╗");
    console.log("║              ⚔️  QUESTFORGE  ⚔️                ║");
    console.log("╠══════════════════════════════════════════════╣");
    console.log("║                                              ║");
    console.log(`║  👤 Jogador: ${contaAtual.nome}                          ║`);
    console.log(`║  🛡️  Nível: ${contaAtual.nivel}                                 ║`);
    console.log(`║  🪙  Moedas: ${contaAtual.moedas}                              ║`);
    console.log(`║  ⭐ XP: ${contaAtual.xp}                                    ║`);
    console.log("║                                              ║");
    console.log("╠══════════════════════════════════════════════╣");
    console.log("║                 MENU PRINCIPAL               ║");
    console.log("╠══════════════════════════════════════════════╣");
    console.log("║                                              ║");
    console.log("║  [1] ⚔️  Missões                              ║");
    console.log("║  [2] 🏆 Ranking                              ║");
    console.log("║  [3] 📊 Estatísticas                         ║");
    console.log("║  [4] 📜 Histórico                            ║");
    console.log("║  [5] 👤 Perfil                               ║");
    console.log("║  [6] 🚪 Sair                                 ║");
    console.log("║                                              ║");
    console.log("╚══════════════════════════════════════════════╝");

    return true
}

import { pegarMissoes } from "../script.js"
import { verificarMissao } from "../script.js"

export async function interagirComMenu() {
    const opcao = await input("\nEscolha uma opção:\nR: ");

    switch (opcao) {
        case "1":
        await animacao("Abrindo missões");
        console.log("Todas as missões:")
        console.log("")
        console.table(pegarMissoes()[0])   
        console.log("")
        console.log("Missão disponível:")
        let missoesDisponiveis = pegarMissoes()[1]
        console.table(missoesDisponiveis) 
        const missao = verificarMissao(await input("\nEscolha uma missão disponível pelo ID:\nR: "), missoesDisponiveis);
        
        if (missao) {
            console.clear();

            console.log(`⚔️ ${missao.nome}`);
            console.log("");
            console.log("Pressione ENTER para começar.");

            await input("");

            await minigame();
        }
        break;

    case "2":
        await animacao("Abrindo ranking");
        break;

    case "3":
        await animacao("Abrindo estatísticas");
        break;

    case "4":
        await animacao("Abrindo histórico");
        break;

    case "5":
        await animacao("Abrindo perfil");
        break;

    case "6":
        await animacao("Saindo");
        exit();
        break;
    }
}