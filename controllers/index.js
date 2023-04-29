console.log('open file');
const awesomeFunction = (req, res, next) => {
    res.json('Ruben Cobian');
};

const returnAnFunction = (req, res, next) => {
    res.json('Return awesome person');
};
module.exports = { awesomeFunction, returnAnFunction };