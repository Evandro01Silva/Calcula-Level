let vitorias = 15;
let derrotas = 3;
let saldoRankeadas = vitorias - derrotas;

function rankear() {

	if (vitorias < 0) {
    	console.log("Número de vitórias: " + vitorias);
        console.log("Número de derrotas: " + derrotas);
		console.log("Você não possui requisitos de nivelamento!!!");
	} 
    else if (vitorias >= 0 && vitorias <= 10) {
    	console.log("Número de vitórias: " + vitorias);
        console.log("Número de derrotas: " + derrotas);
    	console.log("O Herói tem de saldo de " + saldoRankeadas + " e está no nível: Ferro.");
    }
    else if (vitorias >= 11 && vitorias <= 20) {
    	console.log("Número de vitórias: " + vitorias);
        console.log("Número de derrotas: " + derrotas);
    	console.log("O Herói tem de saldo de " + saldoRankeadas + " e está no nível: Bronze.");
    }
    else if (vitorias >= 21 && vitorias <= 50) {
    	console.log("Número de vitórias: " + vitorias);
        console.log("Número de derrotas: " + derrotas);
    	console.log("O Herói tem de saldo de " + saldoRankeadas + " e está no nível: Prata.");
    }
    else if (vitorias >= 51 && vitorias <= 80) {
    	console.log("Número de vitórias: " + vitorias);
        console.log("Número de derrotas: " + derrotas);
    	console.log("O Herói tem de saldo de " + saldoRankeadas + " e está no nível: Ouro.");
    }
    else if (vitorias >= 81 && vitorias <= 90) {
    	console.log("Número de vitórias: " + vitorias);
        console.log("Número de derrotas: " + derrotas);
    	console.log("O Herói tem de saldo de " + saldoRankeadas + " e está no nível: Diamante.");
    }
    else if (vitorias >= 91 && vitorias <= 100) {
    	console.log("Número de vitórias: " + vitorias);
        console.log("Número de derrotas: " + derrotas);
    	console.log("O Herói tem de saldo de " + saldoRankeadas + " e está no nível: Lendário.");
    }
    else {
    	console.log("Número de vitórias: " + vitorias);
        console.log("Número de derrotas: " + derrotas);
    	console.log("O Herói tem de saldo de " + saldoRankeadas + " e está no nível: Imortal.");
    }

}

rankear();
