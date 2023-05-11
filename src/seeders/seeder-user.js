'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users',[{
      email: 'anh@gmail.com',
      password:'123',
      firstName: 'Minh',
      lastName: 'Anh',
      phoneNumber: '0708660875',
      address:'23 CMT8',
      gender: 1,
      image:'https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/338328593_2140952112770662_5022938726922017369_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=a5Dw1jQcGaQAX9ifcuG&_nc_oc=AQl1jY7e3cC7s0VYDcR9xGMD8IWd14kYp9KeapBdAmYXJhu7q4r7Hf3KAIb2ShcIDAQNv0TjOk_nRl8FUaEV2xYc&_nc_ht=scontent.fsgn2-6.fna&oh=00_AfDxaTeCfEf7AFf2J-NjV4gylHat4NCei-OKj6jPTv5mQg&oe=6441CC95',
      roleId:'R3',
      positionId:'P0',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
