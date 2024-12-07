//Aqui se realiza el llamado de la base de datos

export const getUsers = (req, res) => {
    // Simular datos de usuarios
    const users = [
      { id: 1, nombre: 'Juan' },
      { id: 2, nombre: 'María' },
      { id: 3, nombre: 'Carlos' }
    ];
    res.json(users);
  };
    