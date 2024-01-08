import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import TranslationForm from './TranslationForm';

pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

function Converter() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [pdfText, setPdfText] = useState('');

  const onFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = async (e) => {
        const text = await extractTextFromPDF(e.target.result);
        setPdfText(text);
      };
      reader.readAsArrayBuffer(file);
    }
  };

  const extractTextFromPDF = async (data) => {
    const pdfData = new Uint8Array(data);
    const loadingTask = pdfjs.getDocument({ data: pdfData });
    const pdf = await loadingTask.promise;
    
    let text = '';
    for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        const textContent = await page.getTextContent();
        
        // Extracting text from textContent items
        textContent.items.forEach((item) => {
          text += item.str + ' ';
        });
      }
    
      return text;
    };

  return (
    <div>
      <h1>PDF to Regional Language Converter</h1>
      <TranslationForm pdfText={pdfText} />
      <div>
        <label htmlFor="pdfFile">Choose a PDF file:</label>
        <input type="file" id="pdfFile" onChange={onFileChange} accept=".pdf" />
      </div>
      <div>
        <Document
          file={pdfText ? undefined : null}
          onLoadSuccess={({ numPages }) => setNumPages(numPages)}
        >
          <Page pageNumber={pageNumber} />
        </Document>
        <p>Page {pageNumber} of {numPages}</p>
      </div>
    </div>
  );
}

export default Converter;
