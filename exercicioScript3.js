
// LISTA DE COMPRAS


let itens = [
    {
      nome: "Banana",
      valor: 2.1,
      quantidade: 1
    },
    {
      nome: "Sabonete",
      valor: 1.3,
      quantidade: 3
    },
    {
      nome: "Doritos",
      valor: 4.7,
      quantidade: 2
    },
    {
      nome: "Pão",
      valor: 0.38,
      quantidade: 10
    },
    {
      nome: "Leite",
      valor: 2.34,
      quantidade: 3
    },
    {
      nome: "Ovos",
      valor: 0.42,
      quantidade: 12
    }
  ];

  let acumular = 0;

  for(item of itens){
    console.log(` Item:${item.nome}`); 
    
    console.log(`Quantidade de itens: ${item.quantidade}`);

    console.log(`R$: ${item.valor * item.quantidade}`);
    
    acumular += item.quantidade * item.valor;    
} 
    console.log(`O valor total é R$ ${acumular}`);







