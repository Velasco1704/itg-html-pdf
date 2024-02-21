# Custom Department Search

Este componente se encarga de leer y renderizar archivos PDF.

## Instalación

### 1. Clonar repositorio

Copia el [repositorio](https://github.com/Velasco1704/itg-html-pdf/) del proyecto y clonarlo en tu terminal.

```bash
git clone https://github.com/Velasco1704/itg-html-pdf/
```

### 2. Acceder a la Carpeta del Proyecto

Después de clonar el repositorio, entra a la carpeta del proyecto utilizando el siguiente comando:

```bash
cd itg-html-pdf
```

### 3. Instalar dependencias de la carpeta react

Entra a la carpeta de react y instala las dependencias.

```bash
cd react && yarn
```

> [!NOTE]
> No uses npm y yarn al mismo tiempo esto va a causar conflictos

### 4. Iniciar Sesión en VTEX

Para poder trabajar con VTEX, necesitas iniciar sesión con tu cuenta. Utiliza el siguiente comando y reemplaza {account} con tu nombre de cuenta de VTEX:

```bash
vtex login { account }
```

### 5. Seleccionar el Espacio de Trabajo

Una vez que hayas iniciado sesión, selecciona el espacio de trabajo en el que deseas trabajar utilizando el siguiente comando. Reemplaza {workspace} con el nombre de tu espacio de trabajo:

```bash
vtex use { workspace }
```

### 6. Enlazar el Proyecto al Espacio de Trabajo

Finalmente, enlaza el proyecto a tu espacio de trabajo para visualizarlo ejecutando el siguiente comando:

```bash
vtex link
```

### 7. Agrega el componente

Agrega el componente en el `manifest.json` de tu **store theme**

```JSON
"dependencies": {
   "{accountName}.{appName}": "{appVersion}",
    "vtex.store": "2.x",
    "vtex.store-header": "2.x"
}
```

## Descripción general del proyecto y su uso

### Componente

#### PdfReader

El componente PdfReader es un componente de React que se encarga de renderizar un visor de PDF.

```jsx
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
```

El componente utiliza el hook `useState` para manejar el estado de `mounted`, que se utiliza para controlar si el componente está montado o no. El hook `useEffect` se utiliza para establecer el estado `mounted` en `true` cuando el componente se monta por primera vez.

El componente renderiza un contenedor `<div>` con una etiqueta `<object>` o `<iframe>` dependiendo de la compatibilidad del navegador. El visor de PDF se muestra utilizando la propiedad data o src con la URL del archivo PDF. Si el navegador no es compatible con la visualización de PDF, se muestra un mensaje de error.
