"use strict";

module.exports.purchase = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Purchase Succeeded.",
        input: event,
      },
      null,
      2
    ),
  };
};

module.exports.refund = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Refund Processed.",
        input: event,
      },
      null,
      2
    ),
  };
};
