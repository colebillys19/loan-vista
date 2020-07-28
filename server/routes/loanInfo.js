const helloBar = (req, res) => {
  res.send('Hello from Bar!');
};

const byeBar = (req, res) => {
  res.send('Bye Bye Bar!');
};

module.exports = { byeBar, helloBar };
