import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const fs = require("fs")

const jogadores = JSON.parse(
    fs.readFileSync("jogadores.json", "utf8")
);

const missoes = JSON.parse(
    fs.readFileSync("missoes.json", "utf8")
);

function criarJogador() {
    rl.question("Digite seu nome: ", resposta => {
        console.log("Nome escolhido:", resposta);

        jogadores.push({
            id: jogadores.length + 1,
            nome: resposta,
            nivel: 1,
            xp: 0,
            moedas: 100
        });

        fs.writeFileSync(
            "jogadores.json",
            JSON.stringify(jogadores, null, 4)
        );

        rl.close()
    });
}

function main() {
    if (jogadores.length === 3) {
        criarJogador()
    }
}

main()
