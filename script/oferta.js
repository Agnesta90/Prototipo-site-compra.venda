
function recusar(n){
   const oferta1 = document.getElementById('oferta1')
   const oferta2 = document.getElementById('oferta2')
   const oferta3 = document.getElementById('oferta3')
   const oferta4 = document.getElementById('oferta4')
   const oferta5 = document.getElementById('oferta5')
   const oferta6 = document.getElementById('oferta6')

   switch(n){
      case 1:
         oferta1.style.display = 'none'
         break
      case 2:
         oferta2.style.display = 'none'
         break
      case 3:
         oferta3.style.display = 'none'
         break
      case 4:
         oferta4.style.display = 'none'
         break
      case 5:
         oferta5.style.display = 'none'
         break
      case 6:
         oferta6.style.display = 'none'
         break
   }
}

function aceitar(n){
   const oferta1 = document.getElementById('oferta1')
   const oferta2 = document.getElementById('oferta2')
   const oferta3 = document.getElementById('oferta3')
   const oferta4 = document.getElementById('oferta4')
   const oferta5 = document.getElementById('oferta5')
   const oferta6 = document.getElementById('oferta6')

   const text = document.getElementById('titulo')
   const conteiner = document.getElementById('ofertas')

   const caixa = [oferta1, oferta2, oferta3, oferta4, oferta5, oferta6]
   for(let key of caixa){
      key.style.display = 'none'
   }
   switch(n){
      case 1:
         oferta1.style.display = 'block'
         break
      case 2:
         oferta2.style.display = 'block'
         break
      case 3:
         oferta3.style.display = 'block'
         break
      case 4:
         oferta4.style.display = 'block'
         break
      case 5:
         oferta5.style.display = 'block'
         break
      case 6:
         oferta6.style.display = 'block'
         break
   }
   text.innerHTML = '<h2>Vencedor do Leilão</h2>'
   conteiner.style.height = '110px'
}