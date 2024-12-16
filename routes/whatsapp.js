const { createMessage, receiveMessage } = require("../controllers/whatsapp");

const router = require("express").Router();

router.post("/", createMessage);
router.get("/", receiveMessage);

module.exports = router;
