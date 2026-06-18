const Joke = require("../models/Joke");

const addJoke = async (req, res) => {
  try {
    const joke = await Joke.create({
      name: req.query.name,
      genere: req.query.genere,
      joke: req.query.joke,
      explanation: req.query.explanation
    });

    res.status(201).json({
      message: "joke added",
      joke,
    });

  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

const getJoke = async (req, res) => {
  try {
    const joke = await Product.find();

    res.status(200).json({
      message: "details of jokes",
      product,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

const getJokeById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    res.status(200).json({
      message: "details of joke",
      product,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};
const updateJoke = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    res.status(200).json({
      message: "product updated",
      product,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};



const deleteJoke = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "joke deleted",
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};
//exporting modules
module.exports = {
  addJoke,
  getJoke,
  getJokeById,
  updateJoke,
  deleteJoke,
};