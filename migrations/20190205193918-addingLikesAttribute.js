module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.addColumn('books', 'likes', Sequelize.BOOLEAN), /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */


  down: (queryInterface, Sequelize) => queryInterface.removeColumn('books', 'likes')
  /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  ,
};
