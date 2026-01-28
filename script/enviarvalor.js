document.addEventListener("DOMContentLoaded", () => {
   let hora
   let minutos
   let segundos

   let time = 86400

   let interval = setInterval(() => {
      hora = Math.floor((time/60)/60)
      minutos = Math.floor((time%3600)/60)
      segundos = Math.floor(time%60)

      let tex1 = (String(hora)).length
      hora = (tex1==2) ? hora : '0' + hora
      let tex2 = (String(minutos)).length
      minutos = (tex2==2) ? minutos : '0' + minutos
      let tex3 = (String(segundos)).length
      segundos = (tex3) ? segundos : '0' + segundos

      document.getElementById('hora').innerHTML = hora
      document.getElementById('minutos').innerHTML = minutos
      document.getElementById('segundos').innerHTML = segundos

      if(time>0){
         time--
      }
   }, 1000)
})


function fazerlance(){
   document.getElementById('um').style.display = 'none';
   document.getElementById('second').style.background = '#353e3d';
   const dois = document.getElementById('dois')
   dois.style.display = 'block'
   dois.style.width = '100%'
   dois.style.height = '100%'
   dois.style.display = 'flex'
   dois.style.flexDirection = 'column'
   dois.style.alignContent = 'center'
   dois.style.justifyContent = 'center'
}

function enviar(){
   document.getElementById('second').style.background = '#8AA6A3'
   const caix2 = document.getElementById('dois')
   caix2.style.display = 'none'
   const conteiner = document.getElementById('tres');
   conteiner.style.display = 'block';
   conteiner.style.display = 'flex';
   conteiner.style.flexDirection =  'column';
   let opcao = document.getElementsByName('opcao')
   const valor = document.getElementById('valor').value
   const resposta = document.getElementById('resposta')

   if(opcao[0].checked){
      resposta.innerHTML = `<p>Valor que você ofertou:</p><p> R$ ${valor}`
   }
   else{
      resposta.innerHTML = '<p>Tem interrese, porem deseja que seja doado para se</p>'
   }
   
}

function cancelar(){
   
   document.getElementById('tres').style.display = 'none'
   document.getElementById('um').style.display = 'block'
}
