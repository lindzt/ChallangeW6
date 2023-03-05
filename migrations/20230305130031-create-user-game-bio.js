'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('user_game_bios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_game_bio_id : {
        type : Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model:'user_games',
          key:'id',
          as: 'user_game_id'
        }
      },
      date_of_birth: {
        type: Sequelize.DATEONLY
      },
      place_of_birth: {
        type: Sequelize.STRING
      },
      hobby: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('user_game_bios');
  }
};