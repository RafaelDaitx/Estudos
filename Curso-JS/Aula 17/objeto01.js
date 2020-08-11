let amigo = {nome:'José', sexo:'M', peso:81.1,
engordar(p=0){
    console.log(amigo.nome)
    this.peso += p
}};

amigo.engordar(2)
console.amigo(`${amigo.nome} pesa ${amigo.peso} kg`)

