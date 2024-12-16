const { createMessage, receiveMessage } = require("../controllers/whatsapp");

const router = require("express").Router();

router.post("/", createMessage);
router.post("/receive", receiveMessage);

module.exports = router;
