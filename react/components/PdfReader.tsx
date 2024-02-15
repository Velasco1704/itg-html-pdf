import React, { useEffect, useState } from 'react';
import { useCssHandles } from 'vtex.css-handles';
import './styles.css';

interface Props {
  pdfUrl: string;
  width: number;
  height: number;
}

const PdfReader = ({ pdfUrl, width, height }: Props) => {
  const CSS__HANDLES = ['container-pdf'];
  const handles = useCssHandles(CSS__HANDLES);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    mounted && (
      <div className={handles['container-pdf']}>
        <object data={pdfUrl} type='application/pdf' width={width} height={height}>
          <iframe title='PDF' src={pdfUrl} width={width} height={height}>
            <p>Este navegador no soporta PDF!</p>
          </iframe>
        </object>
      </div>
    )
  )
}

export default PdfReader;
