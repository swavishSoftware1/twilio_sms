const twilio = require("twilio");

const callBack = "";

const createSMSMessage = (from, to, message) => {
  const TWILIO_ACCOUNT_SID = process.env.TWILIO_ACCOUNT_SID;
  const TWILIO_AUTH_TOKEN = process.env.TWILIO_AUTH_TOKEN;
  const client = twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);

  return client.messages.create({
    body: message,
    from: `${from}`,
    to: `${to}`,
    statusCallback: callBack,
  });
};

module.exports = {
  createSMSMessage,
};
