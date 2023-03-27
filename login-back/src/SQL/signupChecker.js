const connectMySQL = require('./connect');
const signupCheck = async (id) => {
  const SQL = `SELECT id FROM login_table WHERE id=${id}`;
  const connect = await connectMySQL();
  const response = await connect.execute(SQL);
  console.log(response);
};
