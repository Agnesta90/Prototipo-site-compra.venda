document.addEventListener("DOMContentLoaded", () => {
   const inputFile = document.querySelector('#produto');
   const image = document.querySelector('.image-produto')
   image.innerHTML = 'Escolha uma imagem'

   inputFile.addEventListener('change', function(e) {
      const file = this.files[0];

      if(file){
         const reader = new FileReader()
         reader.addEventListener('load', (e) => {
            const readerTarget = e.target
            const img = document.createElement('img')
            img.src = readerTarget.result
            img.classList.add('image-produto')
            
            image.appendChild(img)
         })
         image.innerHTML = ''
         reader.readAsDataURL(file)
      }
      else{
         image.innerHTML = 'Escolha uma imagem'
      }
   });
})
