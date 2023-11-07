require("dotenv").config();

const stripe = require("stripe")(process.env.REACT_APP_STRIPE_SECRET_KEY);
exports.handler = async function (event, context) {
  if (event.body) {
    const { cart, shipping_fee, total_amount } = JSON.parse(event.body);

    const calculateOrdreAmount = () => {
      return Number(shipping_fee + total_amount);
    };

    try {
      const paymentIntent = await stripe.paymentIntents.create({
        amount: calculateOrdreAmount(),
        currency: "INR",
        automatic_payment_methods: {
          enabled: true,
        },
      });

      return {
        statusCode: 200,
        body: JSON.stringify({ clientSecret: paymentIntent.client_secret }),
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ message: error.message }),
      };
    }
  }
  return { statusCode: 200, body: "Create Payment Intent" };
};
