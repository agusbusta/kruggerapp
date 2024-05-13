import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
import User from '../models/userModel.js';
import Vaccine from '../models/vaccineModel.js';

dotenv.config();


const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST, 
  dialect: 'postgres',
  logging: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});


const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    await checkAndCreateTables();
  } catch (error) {
    console.error('Unable to connect to the database:', error);
    process.exit(1);
  }
};

const checkAndCreateTables = async () => {
  try {
    // Verifica si la tabla de usuarios existe y, si no, la crea
    const userTableExists = await sequelize.getQueryInterface().showAllTables().then((tables) => {
      return tables.includes('Users');
    });
    if (!userTableExists) {
      await User.sync({ force: true });
      console.log('Tabla User creada.');
    }

    // Verifica si la tabla de vacunas existe y, si no, la crea
    const vaccineTableExists = await sequelize.getQueryInterface().showAllTables().then((tables) => {
      return tables.includes('Vaccines');
    });
    if (!vaccineTableExists) {
      await Vaccine.sync({ force: true });
      console.log('Tabla Vaccine creada.');
    }
  } catch (error) {
    console.error('Error checking or creating tables:', error);
    process.exit(1);
  }
};

export default connectDB;
