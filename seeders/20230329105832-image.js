'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Images', [
      {
        path: '/images/physics-workshop.jpeg',
        entryId: 1,
        createdAt: new Date(2023, 0, 11),
        updatedAt: new Date()
      }
  ]);
  },

  async down (queryInterface, Sequelize) {
     return queryInterface.bulkDelete('Images', null, {});
  }
};
