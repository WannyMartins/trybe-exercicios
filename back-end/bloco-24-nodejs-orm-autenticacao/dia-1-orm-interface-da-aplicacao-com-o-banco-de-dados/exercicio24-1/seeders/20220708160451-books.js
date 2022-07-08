'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Books', [
     {
        title: 'Harry Potter e a Pedra Filosofal',
        author: 'J. K. Holling.',
        'page_quantity': null,
        'created_at': Sequelize.literal('CURRENT_TIMESTAMP'),
        'updated_at': Sequelize.literal('CURRENT_TIMESTAMP'),
     },
     {
      title: 'Harry Potter e a Ordem da Fênix',
      author: 'J. K. Holling.',
      'page_quantity': 350,
      'created_at': Sequelize.literal('CURRENT_TIMESTAMP'),
      'updated_at': Sequelize.literal('CURRENT_TIMESTAMP'),
   },

  ])
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Books', null, {});

  }
};
