module.exports = {
  all: [
    {
      _id: 1,
      name: 'admin',
      createdAt: '01/01/2021',
    },
  ],
  addValue({ name }) {
    return new Promise((resolve, reject) => {
      const matchedUser = {
        _id: 2,
        name,
        createdAt: new Date(),
      };
      this.all.push(matchedUser);
      if (matchedUser) {
        resolve(this.json(matchedUser));
      } else {
        reject(new Error('Somthing want wrong.'));
      }
    });
  },
};
