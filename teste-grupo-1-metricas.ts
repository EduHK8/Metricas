const teste = {
  id=1,
  teste=2
};

algumaCoisa(){
  this.teste.id = 2
  console.log(this.teste.id)
  console.log(this.teste.teste)
}
