// vaccines.js
import Vaccine from "../models/vaccineModel.js";

const vaccines = [
  { abv: "SPNK", name: "Sputnik" },
  { abv: "AZ", name: "Astra Zeneca" },
  { abv: "PFZ", name: "Pfizer" },
  { abv: "JJ", name: "Jhonson&Jhonson" },
];

const seedVaccines = async () => {
  try {
    await Vaccine.bulkCreate(vaccines);
    console.log('Vaccines seeded successfully');
  } catch (error) {
    console.error('Error seeding vaccines:', error);
  }
};

export default seedVaccines;
