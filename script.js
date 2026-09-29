const nome = "Miguel"
let idade = "15"
let hobby = "Jogar Videogame, os jogos são:"
let hobbyNomes = hobby + " R6, Minecraft, Roblox"
let cidade = "Londrina"
const nomeCompleto = nome + " Heitor Fernandes dos Santos"
let animes = "My Dress Up Darling, Fuufu Ijou e Yofukashi No Uta."

console.log("Hello, Word!")

console.log(`O meu nome é ${nome} e a minha idade é ${idade} anos.`)
console.log(`O meu nome completo é ${nomeCompleto} `)
console.log(`O meu hobby é ${hobbyNomes}`)
console.log(`Meu top 3 animes, contando os mangás, são: ${animes}`)

let temperatura = 20
let resultado = ""

if (temperatura < 0) {
    resultado = "Alaska"
} else if (temperatura < 10) {
    resultado = "Rio Grande do Sul"
} else if (temperatura < 20) {
    resultado = "Londrina"
} else if (temperatura < 30) {
        resultado = "Pará"
} else if (temperatura < 40) {
    resultado = "nordeste"
}

console.log(`A temperatura é ${temperatura} e o resultado é ${resultado}`)

let pontos = Number( prompt("Quantos pontos?"))
let anosDecliente = Number( prompt("Quantos anos?"))


if ( pontos > 0 && pontos <= 99 ) {
    rank = "Bronze"
}else if (pontos <= 499) {
    rank = "Prata"
}else if (pontos <= 999) {
    rank = "Ouro"
}else if (pontos <= 1000) {
    rank = "Platina"
}

console.log (`Seus pontos são ${pontos} e sua idade de cliente é ${anosDecliente} seu rank é ${rank}` )

for (let i = 0; i <= 10; i++) {
    console.log (i);
}
