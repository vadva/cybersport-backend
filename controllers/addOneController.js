const addOneController = async (res, newObj) => {
  const answer = await newObj.save();
  try {
    res.send({
      status: "Success",
      answer,
    });
  } catch (err) {
    console.log(err);
    res.send({
      status: "Error",
      message: err,
    });
  }
};

module.exports = addOneController;
