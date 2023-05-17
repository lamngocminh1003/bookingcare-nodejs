module.exports = {
    up: (queryInterface, Sequelize) => {
        return Promise.all([
          queryInterface.addColumn('Users', 'reason', {
            type: Sequelize.DataTypes.TEXT
          }),
        ]);
    }}