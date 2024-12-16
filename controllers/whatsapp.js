const { createSMSMessage } = require("../service/sms");

const createMessage = async (req, res) => {
  try {
    const { from, to, message } = req.body;

    const result = await createSMSMessage(from, to, message);

    res.json({
      success: true,
      data: result,
      message: "Message sent successfully",
    });
  } catch (err) {
    console.log("Create Message", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const receiveMessage = (req, res) => {
  try {
    console.log("received", req.body);
  } catch (err) {
    console.log("Receive Message", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = {
  createMessage,
  receiveMessage,
};
