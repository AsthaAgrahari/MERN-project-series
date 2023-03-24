const express=require("express");
const { getNotes, createNote, getNoteById, UpdateNote,  DeleteNote  } = require("../controllers/noteController");
const router = express.Router();
const { protect }=require("../middlewares/authMiddleware");

router.route("/").get(protect, getNotes);
router
  .route("/:id")
  .get(getNoteById)
  .delete(protect, DeleteNote)
  .put(protect, UpdateNote);
router.route("/create").post(protect, createNote);

module.exports=router;