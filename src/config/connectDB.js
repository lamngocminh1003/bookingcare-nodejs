const { Sequelize } = require("sequelize");

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize("postgres", "postgres", "ngocminh1003", {
  host: "db.sdqyqfjlovqadinwyqoo.supabase.co",
  dialect: "postgres",
  port: 5432,
  logging: false,
  query: { raw: true },
  timezone: "+07:00",
});

let connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
module.exports = connectDB;
