'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('entries', [
      {
        content: '123',
        created_at: new Date(2023, 0, 11),
        updated_at: new Date()
      },
      {
        content: 'test',
        created_at: new Date(2023, 0, 8),
        updated_at: new Date()
      }
  ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     return queryInterface.bulkDelete('entries', null, {});
  }
};
