const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (base = 5, hasta = 10, listar = false) => 
{

let salida = '';
let consola = '';
for(let i = 1; i <= hasta; i++)
{
    salida += ` ${i} `+`x`+` ${base} `+'='+` ${base*i}\n`;
    consola += ` ${i} `+`x`.green+` ${base} `+'='.green+` ${base*i}\n`;

}

if(listar === true){
    console.log('********************************'.green);
    console.log('Tabla del'.green , colors.blue( base ) );
    console.log('********************************'.green);
    console.log(consola);
}

fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

return `tabla-${base}.txt`;
};

module.exports = {
    crearArchivo
}