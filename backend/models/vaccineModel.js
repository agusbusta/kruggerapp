import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'postgres',
});

const Vaccine = sequelize.define('Vaccine', {
  abv: {
    type: Sequelize.STRING,
  },
  name: {
    type: Sequelize.STRING,
  },
}, {
  timestamps: true,
});

export default Vaccine;
