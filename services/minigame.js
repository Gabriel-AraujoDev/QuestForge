import readline from "readline";

function esperar(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function esperarTecla() {
    return new Promise(resolve => {
        readline.emitKeypressEvents(process.stdin);
        process.stdin.setRawMode(true);

        const listener = (str, key) => {
            if (key.name === "space") {
                process.stdin.setRawMode(false);
                process.stdin.removeListener("keypress", listener);
                resolve();
            }
        };

        process.stdin.on("keypress", listener);
    });
}

export async function minigame() {
    console.clear();

    console.log("══════════════════════════════════════");
    console.log("             ⚔️ DESAFIO");
    console.log("══════════════════════════════════════");
    console.log("");
    console.log("Aguarde o momento certo...");
    console.log("");

    await esperar(Math.floor(Math.random() * 3000) + 1000);

    console.clear();

    console.log("══════════════════════════════════════");
    console.log("             ⚡ AGORA!");
    console.log("══════════════════════════════════════");
    console.log("");
    console.log("       >>> APERTE ESPAÇO <<<");
    console.log("");

    const inicio = Date.now();

    await esperarTecla();

    const tempo = Date.now() - inicio;

    console.clear();

    console.log("══════════════════════════════════════");
    console.log("             RESULTADO");
    console.log("══════════════════════════════════════");
    console.log("");
    console.log(`Tempo: ${tempo}ms`);
    console.log("");

    if (tempo <= 700) {
        console.log("🟢 ACERTO!");
    } else if (tempo <= 1200) {
        console.log("🟡 QUASE!");
    } else {
        console.log("🔴 TARDE DEMAIS!");
    }

    await esperar(2000);
}