import * as fs from 'fs';
import CryptoJS from 'crypto-js';

export interface Cuenta {
    usuario : string;
    contraseña : string;
}

export interface SitioWeb{
    cuentas: Cuenta[];
}

//  CRUD
function agregarCuenta(nombreSitio: string, usuario: string, contraseña: string): void {
    // Comprobamos si el sitio web ya existe en nuestra base de datos
    // Si el sitio web ya existe, agregamos la nueva cuenta a ese sitio.
    // De lo contrario, creamos un nuevo sitio web con la nueva cuenta.
}

function actualizarCuenta(nombreSitio: string, usuario: string, nuevaContraseña: string): void {
    // Buscamos el sitio web en nuestra base de datos
    // Si el sitio web existe y la cuenta también,
    // actualizamos la contraseña de esa cuenta.
    // Si no se encuentra el sitio web o la cuenta, no se realiza ninguna acción.
    // No es necesario devolver ningún valor explícito.
}

function borrarCuenta(nombreSitio: string, usuario: string): void {
    // Encontramos el índice del sitio web en nuestra base de datos
    // Si se encuentra el sitio web,
    // buscamos la cuenta dentro de ese sitio y la eliminamos.
    // Si no se encuentra el sitio web o la cuenta, no se realiza ninguna acción.
    // No es necesario devolver ningún valor explícito.
}

//Encriptar archivo de base de datos de forma segura
const secretKey = 'tu_clave_secreta';

function encriptarArchivo(rutaArchivo: string, contraseña: string): void {
    try {
        // Leer el contenido del archivo
        const contenido = fs.readFileSync(rutaArchivo, 'utf-8');

        // Cifrar el contenido del archivo utilizando AES
        const contenidoCifrado = CryptoJS.AES.encrypt(contenido, contraseña).toString();

        // Escribir el contenido cifrado en el mismo archivo
        fs.writeFileSync(rutaArchivo, contenidoCifrado);

        console.log(`Archivo encriptado correctamente: ${rutaArchivo}`);
    } catch (error) {
        console.error('Error al encriptar el archivo:', error);
    }
}

// Ejemplo de uso
const rutaArchivo = 'archivo.txt';
const contraseña = 'mi_contraseña_secreta';

encriptarArchivo(rutaArchivo, contraseña);

//generar contraseña segura
const generarContraseniaSegura = (): string => {
    const caracteresRegEx = /[A-Za-z0-9]/;
    const longitud = 16;

    return [...Array(longitud)]
        .map(() => {
            let caracter;
            do {
                caracter = String.fromCharCode(Math.floor(Math.random() * 94) + 33);
            } while (!caracteresRegEx.test(caracter));
            return caracter;
        })
        .join('');
};


