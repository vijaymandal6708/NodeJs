import { useSelector } from "react-redux";

const Orders = () => {
  /**
   * 🔹 TEMPORARY DATA STRUCTURE
   * Later you will replace this with backend API response
   */
  const orders = useSelector((state) => state.mycart.orders || []);

  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
          font-family: "Inter", system-ui, sans-serif;
        }

        body {
          background: #f4f6f8;
        }

        .orders-page {
          min-height: 100vh;
          max-width: 1100px;
          margin: auto;
          padding: 40px 20px 80px;
        }

        .orders-title {
          font-size: 28px;
          font-weight: 700;
          text-align: center;
          margin-bottom: 35px;
        }

        .order-card {
          background: #ffffff;
          border-radius: 16px;
          padding: 24px 30px;
          margin-bottom: 25px;
          box-shadow: 0 8px 24px rgba(0,0,0,0.08);
        }

        .order-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 18px;
        }

        .order-id {
          font-weight: 600;
          font-size: 15px;
        }

        .order-status {
          padding: 6px 14px;
          border-radius: 20px;
          font-size: 13px;
          font-weight: 600;
          background: #e8f7ef;
          color: #2ecc71;
        }

        .order-meta {
          display: flex;
          gap: 30px;
          font-size: 14px;
          color: #666;
          margin-bottom: 20px;
        }

        .products {
          border-top: 1px solid #eee;
          padding-top: 16px;
        }

        .product-row {
          display: flex;
          justify-content: space-between;
          margin-bottom: 12px;
          font-size: 14px;
        }

        .product-row span {
          color: #333;
        }

        .order-total {
          border-top: 1px solid #eee;
          padding-top: 16px;
          margin-top: 20px;
          display: flex;
          justify-content: space-between;
          font-weight: 700;
          font-size: 16px;
        }

        .empty-orders {
          text-align: center;
          margin-top: 120px;
          font-size: 18px;
          color: #555;
        }

        @media (max-width: 600px) {
          .order-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 10px;
          }

          .order-meta {
            flex-direction: column;
            gap: 6px;
          }
        }
      `}</style>

      <div className="orders-page">
        <h2 className="orders-title">My Orders</h2>

        {orders.length === 0 ? (
          <p className="empty-orders">You have no orders yet 📦</p>
        ) : (
          orders.map((order, index) => (
            <div className="order-card" key={index}>
              <div className="order-header">
                <div className="order-id">Order ID: {order.orderId}</div>
                <div className="order-status">{order.status}</div>
              </div>

              <div className="order-meta">
                <span>Date: {order.date}</span>
                <span>Items: {order.totalQty}</span>
              </div>

              <div className="products">
                {order.items.map((item) => (
                  <div className="product-row" key={item.id}>
                    <span>
                      {item.name} × {item.qnty}
                    </span>
                    <span>₹{item.price * item.qnty}</span>
                  </div>
                ))}
              </div>

              <div className="order-total">
                <span>Total</span>
                <span>₹{order.total}</span>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default Orders;
