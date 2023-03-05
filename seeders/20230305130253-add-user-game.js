'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('user_games', [
      { username: 'User 1 test', password :'123456', createdAt: new Date(), updatedAt: new Date()},
      { username: 'User 2 test', password :'123456', createdAt: new Date(), updatedAt: new Date()},
      { username: 'User 3 test', password :'123456', createdAt: new Date(), updatedAt: new Date()},
     ], {});
    },


  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('user_games', null, {});
  }
};
