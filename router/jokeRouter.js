const express = require("express")
const router=express.Router();
const auth=require("../middleware/authMiddleware")

const {
  addJoke,
  getJoke,
  getJokeById,
  updateJoke,
  deleteJoke,
}=require("../controller/jokeController");

router.post("/add/joke",addJoke);
router.get("/get/joke",auth,getJoke);
router.get("/get/joke/:id",getJokeById);
router.put("/update/joke/:id",updateJoke);
router.delete("/del/joke/:id",deleteJoke);

module.exports = router;