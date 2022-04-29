function getadmins(map){
    let admins =[];
    for ([key,value] of map) {
      if (value === 'Admin'){
          admins.push(key);
      }  
    }
    return admins;
}

const usuarios = new Map();

usuarios.set('Luiz','Admin');
usuarios.set('Stephany','Admin');
usuarios.set('Natalia','Admin');
usuarios.set('Jorge','User');

console.log(getadmins(usuarios));