const express = require("express");
const Users = require("../models/Users");

const router = express.Router();

//user creation using POST "/api/list/createuser"

router.post("/createuser", async (req, res) => {
  console.log(req.body);

  // const user = Users(req.body);
  const user = await Users.create({
    name: req.body.name,
    surname: req.body.surname,
  });

  user.save();

  res.json(user);
});

//get all the users
router.get("/getallusers", async (req, res) => {
  const users = await Users.find();
  res.json(users);
});

//update user
router.put("/updateuser/:id", async (req, res) => {
  const { name, surname } = req.body;
  //new user
  const newUser = {};
  if (name) {
    newUser.name = name;
  }
  if (surname) {
    newUser.surname = surname;
  }
  //find the user to be updated and update it
  let user = await Users.findById(req.params.id);
  if (!user) {
    res.status(404).send("Not found");
  }

  user = await Users.findByIdAndUpdate(
    req.params.id,
    { $set: newUser },
    { new: true }
  );

  res.json(user);
});

//delete user
router.delete("/deleteuser/:id", async (req, res) => {
  // const{name,surname} = req.body;

  //find the user to be dleted and delete it
  let user = await Users.findById(req.params.id);
  if (!user) {
    res.status(404).send("Not found");
  }

  user = await Users.findByIdAndDelete(req.params.id);

  res.json({ Success: "User has been deleted", user: user });
});

module.exports = router;
