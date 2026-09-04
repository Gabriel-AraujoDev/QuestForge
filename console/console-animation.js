function esperar(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export async function animacao(mensagem) {
    const design = Math.floor(Math.random() * 3) + 1;

    if (design === 1) {
        console.log(`${mensagem}.`);
        await esperar(500);
        console.clear();

        console.log(`${mensagem}..`);
        await esperar(500);
        console.clear();

        console.log(`${mensagem}...`);
        await esperar(500);
        console.clear();

        console.log(`${mensagem}.`);
        await esperar(500);
        console.clear();

        console.log(`${mensagem}..`);
        await esperar(500);
    }

    else if (design === 2) {
        console.log(`${mensagem}.`);
        await esperar(625);
        console.clear();

        console.log(`${mensagem}..`);
        await esperar(625);
        console.clear();

        console.log(`${mensagem}.`);
        await esperar(625);
        console.clear();

        console.log(`${mensagem}..`);
        await esperar(625);
    }

    else {
        console.log(`${mensagem}.`);
        await esperar(833);
        console.clear();

        console.log(`${mensagem}..`);
        await esperar(833);
        console.clear();

        console.log(`${mensagem}...`);
        await esperar(834);
    }
}