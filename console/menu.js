import { input } from "../console/input.js";

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

export async function interagirComMenu() {
    const opcao = await input("\nEscolha uma opção:\nR: ");

    switch (opcao) {
        case "1":
            console.log("Abrindo missões...");
            break;

        case "2":
            console.log("Abrindo ranking...");
            break;

        case "3":
            console.log("Abrindo estatísticas...");
            break;

        case "4":
            console.log("Abrindo histórico...");
            break;

        case "5":
            console.log("Abrindo perfil...");
            break;

        case "6":
            console.log("Saindo...");
            endInput();
            break;

        default:
            console.log("Opção inválida!");
    }
}