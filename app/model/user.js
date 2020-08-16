module.export = (app, model) => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const User = model.define('user', {

    name: STRING(30),
    password: STRING(32),
  });

  return User;
};
