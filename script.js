var textoInserido = document.getElementById('texto-inserido')
var textoRetornado = document.querySelector('.texto-retornado')

function criptografar(){

    const textoCriptografado = textoInserido.value.replace(/a|e|i|o|u/gi, match => {
        switch (match.toLowerCase()) {
          case "a":
            return "ai";
          case "e":
            return "enter";
          case "i":
            return "imes";
          case "o":
            return "ober";
          case "u":
            return "ufat"; 

        }
      });

    textoRetornado.textContent = textoCriptografado
    textoInserido.value = ''
}

function descriptografar(){

    const textoDescriptografado = textoInserido.value.replace(/ai|enter|imes|ober|ufat/gi, match => {
        switch (match.toLowerCase()) {
          case "ai":
            return "a";
          case "enter":
            return "e";
          case "imes":
            return "i";
          case "ober":
            return "o";
          case "ufat":
            return "u"; 
        }
      });
    
    textoRetornado.textContent = textoDescriptografado
    textoInserido.value = ''
}

function copiarTexto(){
    navigator.clipboard.writeText(textoRetornado.textContent)
    alert('Copiado com sucesso!')
    textoRetornado.textContent = ''
}


