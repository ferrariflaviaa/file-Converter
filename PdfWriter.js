let pdf = require("html-pdf")

class PdfWriter {
  static WriterPDF(filename, html) {
    pdf.create(html, {}).toFile(filename, (err)=> {})
  }
}

module.exports = PdfWriter