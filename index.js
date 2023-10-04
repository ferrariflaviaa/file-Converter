let Reader = require("./Reader")
let Processor = require("./Processor")
let Table = require("./Table")
let HtmlParser = require("./HtmlParser")
let Writer = require("./Writer")
let PdfWriter = require("./PdfWriter")
let leitor = new Reader();
let escritor = new Writer();



async function main() {
  let dados = await leitor.Read("./user.csv")
  let dadosProcessados = Processor.Process(dados)
  let tabela = new Table(dadosProcessados)
  let html = await HtmlParser.Parse(tabela)


  escritor.Write(Date.now() + ".html", html)
  PdfWriter.WriterPDF(Date.now + ".PDF", html)
}

main();