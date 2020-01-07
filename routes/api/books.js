const router = require("express").Router();
const booksController = require("../../controllers/booksController")

// MATCHES WITH "/API/BOOKS"
router.route("/")
.get(booksController.findAll)
.post(booksController.create);

//MATCHES WITH "API/BOOKS/:ID"
router
.route("/:id")
.get(booksController.findById)
.put(booksController.update)
.delete(booksController.remove);

module.exports = router;