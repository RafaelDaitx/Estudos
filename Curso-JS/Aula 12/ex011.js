var idade = 16
if(idade < 16){
    console.log(`Nã vota!`)
} else {
    if(idade < 18 || idade > 65){
        console.log('Voto Opcional!')
} else {
    console.log(`Voto Obrogatório!`)
}
}