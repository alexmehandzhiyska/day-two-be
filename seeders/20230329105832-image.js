'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('images', [
      {
        path: '/images/physics-workshop.jpeg',
        entry_id: 1,
        created_at: new Date(2023, 0, 11),
        updated_at: new Date()
      }
  ]);
  },

  async down (queryInterface, Sequelize) {
     return queryInterface.bulkDelete('images', null, {});
  }
};
