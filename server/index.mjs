import express from 'express';
import Sequelize from 'sequelize';

const port = process.env.PORT;
const db = process.env.DATABASE;
const dbHost = process.env.DB_HOST;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWWORD;
const sequelize = new Sequelize(db, dbUser, dbPassword, {
  host: dbHost,
  dialect: 'mysql'
});

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/test', async (req, res) => {
  let result = 'success';
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    result = 'error';
    console.log('Unable to connect to the database:', error);
  }

  res.send(result)
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
