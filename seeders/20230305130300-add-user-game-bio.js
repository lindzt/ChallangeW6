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
    await queryInterface.bulkInsert('user_game_bios', [
      { date_of_birth: '18 October 1988', place_of_birth : 'Jakarta', hobby: 'rakit PC', createdAt: new Date(), updatedAt: new Date(), user_game_bio_id : 1},
      { date_of_birth: '26 January 1987', place_of_birth : 'Jepang', hobby: 'menggambar',createdAt: new Date(), updatedAt: new Date(), user_game_bio_id : 2},
      { date_of_birth: '25 January 1995', place_of_birth : 'Korea Selatan', hobby: 'Halu',createdAt: new Date(), updatedAt: new Date(), user_game_bio_id: 3},
     ], {});
    },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('user_game_bios', null, {});
  }
};

