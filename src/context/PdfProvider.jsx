import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { createContext, useContext, useRef } from "react";

const PdfContext = createContext();
const PdfProvider = ({ children }) => {
  const sectionRef = useRef(null);
  const generatePdf = async () => {
    if (!sectionRef.current) return;

    const canvas = await html2canvas(sectionRef.current);
    const imgData = canvas.toDataURL("img/png");

    const pdf = new jsPDF("p", "mm", "a4");
    const imgWidth = 210;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
    pdf.save("card.pdf");
  };
  return (
    <PdfContext.Provider value={{ generatePdf, sectionRef }}>
      {children}
    </PdfContext.Provider>
  );
};

export default PdfProvider;

export function usePdf() {
  return useContext(PdfContext);
}
