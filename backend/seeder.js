import dotenv from "dotenv";
import users from "./data/users.js";
import vaccines from "./data/vaccines.js";
import User from "./models/userModel.js";
import Vaccine from "./models/vaccineModel.js";
import sequelize from "./config/database.js";

dotenv.config();

const importData = async () => {
  try {
    await sequelize.sync({ force: true });
    await User.bulkCreate(users);
    await Vaccine.bulkCreate(vaccines);
    console.log("Data Imported");
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await User.destroy({ where: {} });
    await Vaccine.destroy({ where: {} });
    console.log("Data Destroyed");
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
