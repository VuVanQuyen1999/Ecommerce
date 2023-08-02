const Razorpay = require("razorpay");
const instance = new Razorpay({
  key_id: "rzp_test_Kk4V7tPQy0zwKC",
  key_secret: "jFxz9ZAPkgWWWE45CCyyBSeq",
});

const checkout = async (req, res) => {
  const { amount } = req.body;
  const option = {
    amount: amount * 100,
    currency: "USD",
  };
  const order = await instance.orders.create(option);
  res.json({
    success: true,
    order,
  });
};

const paymentVerification = async (req, res) => {
  const { razorpayOrderId, razorpayPaymentId } = req.body;
  res.json({
    razorpayOrderId,
    razorpayPaymentId,
  });
};

module.exports = {
  checkout,
  paymentVerification,
};
