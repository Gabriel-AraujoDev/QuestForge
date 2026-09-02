import fs from "fs";
import { registrarUmaConta } from "./account/register.js";

const dados = fs.readFileSync("./data/contas.json", "utf8");

// para n dar erro ele so vai retornar uma tabela vazia
const contas = dados.trim() === ""
    ? []
    : JSON.parse(dados);

if (contas.length === 0) {
    await registrarUmaConta()
}