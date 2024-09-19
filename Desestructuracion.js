const usuario = {
    nombre: 'Diego',
    apellido: 'Salazar',
    edad: 21,
    direccion: {
      calle: 'Villa los corales',
      numero: 123,
      ciudad: 'Concepción',
      pais: 'Chile'
    },
    contactos: {
      telefono: '123456789',
      email: 'diegosalazar@example.com',
      redesSociales: {
        instagram: '@diego',
      }
    },
    intereses: ['Programación', 'Música', 'Ajedrez']
  };
  
  // 1
  const { nombre, apellido } = usuario;
  const { ciudad } = usuario.direccion;
  
  // 2
  const [primerInteres] = usuario.intereses;
  
  // 3
  const { email } = usuario.contactos;
  const { instagram } = usuario.contactos.redesSociales;
  
  // 4
  const { calle: calleUsuario, numero: numeroUsuario } = usuario.direccion;
  
  // 5
  console.log(nombre);
  console.log(apellido);
  console.log(ciudad);
  console.log(primerInteres);
  console.log(email);
  console.log(instagram);
  console.log(calleUsuario);
  console.log(numeroUsuario);
  