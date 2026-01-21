import api from '../api/axios';

const orderService = {
  
  // PLACE ORDER: Create new order
  placeOrder: async (orderData) => {
    try {
      const response = await api.post('/orders', orderData);
      return {
        success: true,
        data: response.data,
        message: response.data.message
      };
    } catch (error) {
      return {
        success: false,
        message: error.response?.data?.message || 'Failed to place order'
      };
    }
  },

  // GET USER ORDERS: Get orders for current user
  getUserOrders: async () => {
    try {
      const response = await api.get('/orders/user');
      return {
        success: true,
        data: response.data
      };
    } catch (error) {
      return {
        success: false,
        message: error.response?.data?.message || 'Failed to get orders'
      };
    }
  },

  // GET ALL ORDERS: For admin
  getAllOrders: async () => {
    try {
      const response = await api.get('/orders/admin');
      return {
        success: true,
        data: response.data
      };
    } catch (error) {
      return {
        success: false,
        message: error.response?.data?.message || 'Failed to get orders'
      };
    }
  },

  // UPDATE ORDER STATUS: For admin
  updateOrderStatus: async (orderId, status) => {
    try {
      const response = await api.put(`/orders/${orderId}/status`, { status });
      return {
        success: true,
        data: response.data,
        message: response.data.message
      };
    } catch (error) {
      return {
        success: false,
        message: error.response?.data?.message || 'Failed to update order'
      };
    }
  }
};

export default orderService;
