const Order = require("../models/OrderModel");

/* ======================================================
   CREATE ORDER
   ====================================================== */
const createOrder = async (req, res) => {
  try {
    const {
      items,
      shippingAddress,
      subtotal,
      shippingFee = 0,
      totalAmount,
      payment,
    } = req.body;

    if (!items || items.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Order must contain at least one item",
      });
    }

    if (subtotal === undefined || totalAmount === undefined) {
      return res.status(400).json({
        success: false,
        message: "Subtotal and totalAmount are required",
      });
    }

    const order = await Order.create({
      user: req.user.id,
      items,
      shippingAddress,
      subtotal,
      shippingFee,
      totalAmount,
      payment: {
        method: "razorpay",
        razorpayOrderId: payment?.razorpayOrderId,
        razorpayPaymentId: payment?.razorpayPaymentId,
        razorpaySignature: payment?.razorpaySignature,
        status: "paid",
      },
      orderStatus: "placed",
    });

    res.status(201).json({
      success: true,
      message: "Order placed successfully",
      orderId: order._id,
    });
  } catch (error) {
    console.error("Create order error:", error);
    res.status(500).json({
      success: false,
      message: "Server error while creating order",
    });
  }
};

/* ======================================================
   GET ALL ORDERS OF LOGGED-IN USER
   ====================================================== */
const getMyOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user.id })
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      orders,
    });
  } catch (error) {
    console.error("Get orders error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch orders",
    });
  }
};

module.exports = {
  createOrder,
  getMyOrders,
};
