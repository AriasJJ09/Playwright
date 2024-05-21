# Iniciar Proyecto de Playwright en Visual Studio Code

## Prerrequisitos

Antes de comenzar, asegúrate de tener instalado [Node.js](https://nodejs.org/) y [Visual Studio Code](https://code.visualstudio.com/).

### Instalación de Node.js

1. **Ir al sitio oficial de Node.js**:
   - [Node.js](https://nodejs.org/)
   
2. **Descargar el instalador** de acuerdo a tu sistema operativo (Windows, macOS, Linux).

3. **Ejecutar el instalador** y seguir las instrucciones.

4. **Verificar la instalación**:
   - Abre una terminal (cmd en Windows, Terminal en macOS/Linux).
   - Ejecuta los siguientes comandos para verificar que Node.js y npm se hayan instalado correctamente:
     ```sh
     node -v
     npm -v
     ```

## Crear un Proyecto de Playwright

1. **Abrir Visual Studio Code** y abrir una nueva carpeta para tu proyecto (`Archivo` > `Abrir Carpeta`).
   
   - Abre una terminal integrada en Visual Studio Code (`Ver` > `Terminal`).
   - Ejecuta el siguiente comando para inicializar un nuevo proyecto Node.js:
   
2. **Instalar Playwright**:
   - En la terminal, ejecuta el siguiente comando:
     ```sh
     npm install -g playwright
     ```
      Este comando nos sirve para instalar el playwright de manera global en la máquina.
   
3. **Verificar la instalación de Playwright**:
   - Ejecuta el siguiente comando:
     ```sh
     playwright --version 
     ```
     Con esto corroboraremos la instalación al ver su versión.

4. **Iniciar el proyecto de Playwright**:
   - En la terminal, ejecuta el siguiente comando:
     ```sh
     npm init playwright@latest
     ```
     Al ejecutar este comando, se nos mostrará la estructura básica de un proyecto `node`

## Crear una Prueba de Playwright

  - Tener cuidado de estar en el proyecto y en la carpeta que es:

1. **Crear Prueba**:
   - En la terminal, ejecuta el siguiente comando:
     ```sh
     npx playwright codegen
     ```
      Este comando nos desplegará la interfaz en la cual podremos grabar las interacciones necesarias para nuestras pruebas al poner el link `URL`,
      y otra interfaz donde se mostrará el código de nuestra prueba, este código lo copiaremos y lo pegamos en nuestra carpeta de `tests`

2. **Visualizar las pruebas**:
   - Ejecuta el siguiente comando:
     ```sh
     npx playwright test 
     ```
     O si queremos uno en especifico
      ```sh
     npx playwright test (NombredelArchivo)
     ```

## CONCLUSIONES
A la hora de testear algunos casos de prueba de la pagina BuggyCars, podemos visualizar que el framework playwright nos lanza un error debido a que en casos de prueba anteriores se han modificado variables como la contraseña o ya se ha realizado un voto por un auto, esto no permite que se ejecute correctamente dicho caso de prueba y que salga un error en algunos test. 
