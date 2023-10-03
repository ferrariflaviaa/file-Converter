const fs = require("fs");

//Leitura de arquivos
// fs.readFile("./flavia.ferrari", {encoding: 'utf-8'},(erro, dados)=> {
//   if(erro){
//     console.log("erro")
//   }else{
//     console.log(dados)
//   }
// })

//Rescriata de arquivo
// fs.writeFileSync("./flavia.ferrari", "Novo texto",(err)=> {
//   if(err){
//     console.log("error de salvamento")
//   }
// })

//Leitor e escritor 

// function modificando(nome, curso, categoria) {
//   fs.readFile('./flavia.json', { encoding: 'utf-8' }, (erro, dados) => {
//     if (erro) {
//       console.log("error")
//     } else {
//       let conteudo = JSON.parse(dados)
//       conteudo.nome = nome
//       conteudo.curso = curso
//       conteudo.categoria = categoria

//       fs.writeFile("./flavia.json", JSON.stringify(conteudo), (erro) => {
//         if (erro) {
//           console.log("acontenceu um erro")
//         }
//       })
//     }
//   })

// }

// modificando("Flávia", "PHP DO JEITO CERTO", "PHP")