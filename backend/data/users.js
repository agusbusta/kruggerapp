const users = [
  {
    firstName: "María",
    lastName: "González",
    userName: "mariag",
    identification: "1234567890",
    email: "maria@example.com",
    birthDate: new Date("1990-05-15T00:00"),
    address: "Ciudad de México",
    phoneNumber: "555-123-4567",
    vaccinationData: {
      isVaccinated: true,
      typeOfVaccine: "Pfizer",
      dateOfVaccination: new Date("2021-07-10T00:00"),
      numberOfDoses: 2,
    },
    password: "password",
    isAdmin: false,
  },
  {
    firstName: "Juan",
    lastName: "Martínez",
    userName: "juanm",
    identification: "0987654321",
    email: "juan@example.com",
    birthDate: new Date("1985-12-20T00:00"),
    address: "Buenos Aires",
    phoneNumber: "555-987-6543",
    vaccinationData: {
      isVaccinated: true,
      typeOfVaccine: "Moderna",
      dateOfVaccination: new Date("2021-06-25T00:00"),
      numberOfDoses: 2,
    },
    password: "passworrrrd",
    isAdmin: false,
  },
];

export default users;
