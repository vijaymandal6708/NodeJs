const Order = require("../models/OrderModel");

const createOrder = async (req, res) => {
  try {
    const { items, shippingAddress, totalAmount } = req.body;

    if (!items || items.length === 0) {
      return res.status(400).json({ msg: "No items in order" });
    }

    const order = await Order.create({
      user: req.user.id,
      items,
      shippingAddress,
      totalAmount,
      paymentStatus: "paid",
    });

    res.status(201).json({
      msg: "Order created successfully",
      orderId: order._id,
    });
  } catch (error) {
    console.error("Create order error:", error);
    res.status(500).json({ msg: "Server error" });
  }
};

module.exports = { createOrder };
