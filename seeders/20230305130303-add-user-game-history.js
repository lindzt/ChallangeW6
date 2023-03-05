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
    await queryInterface.bulkInsert('user_game_histories', [
      { last_played: new Date() ,score : '10', createdAt: new Date(), updatedAt: new Date(), user_game_his_id : 1},
      { last_played: new Date() ,score : '15', createdAt: new Date(), updatedAt: new Date(), user_game_his_id : 2},
      { last_played: new Date() ,score : '13', createdAt: new Date(), updatedAt: new Date(), user_game_his_id : 3},
     ], {});
    },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('user_game_histories', null, {});
  }
};

