const connectMySQL = require('./connect');
const signup = async (id, pw, name, age) => {
  const connect = await connectMySQL();
  const signupSQL = `INSERT INTO login_table(id,pw,name,age) values('${id}', '${pw}', '${name}', '${age}')`;
  connect.execute(signupSQL);
};
module.exports = signup;
