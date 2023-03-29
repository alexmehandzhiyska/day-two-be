'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('entries', [
      {
        content: 'I attended a Physics masterclass today!',
        created_at: new Date(2023, 0, 11),
        updated_at: new Date()
      },
      {
        content: 'Today I got an A at school!',
        created_at: new Date(2023, 0, 8),
        updated_at: new Date()
      }
  ]);
  },

  async down (queryInterface, Sequelize) {
     return queryInterface.bulkDelete('entries', null, {});
  }
};
