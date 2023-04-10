'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Entries', [
      {
        content: 'I attended a Physics masterclass today!',
        createdAt: new Date(2023, 0, 11),
        updatedAt: new Date()
      },
      {
        content: 'Today I got an A at school!',
        createdAt: new Date(2023, 0, 8),
        updatedAt: new Date()
      }
  ]);
  },

  async down (queryInterface, Sequelize) {
     return queryInterface.bulkDelete('Entries', null, {});
  }
};
