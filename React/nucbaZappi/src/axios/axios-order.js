import axios from "axios";
import { BASE_URL } from "../utils/constants";
import {
    createOrderFail,
  fetchOrderFail,
  fetchOrderStart,
  fetchOrderSucess,
} from "../redux/orders/orderSlice";

export const getOrders = async (dispatch, currentUser) => {
  dispatch(fetchOrderStart());
  try {
    const orders = await axios.get(`${BASE_URL}/orders`, {
      headers: {
        "x-token": currentUser.token,
      },
    });
    
    if (orders) {
    console.log(orders.data.data);
    
      dispatch(fetchOrderSucess(orders.data.data));
    }
  } catch (error) {
    console.log(error);
    dispatch(
      fetchOrderFail(
        "Upss, algo salío mal. No hay ordenes sin usuario, es como querer jugar al fútbol sin una pelota"
      )
    );
  }
};

export const createOrder = async (dispatch, order, currentUser) => {
    try {
        const response = await axios.post(`${BASE_URL}/orders`, order, {
            headers: {
              "x-token": currentUser.token,
            },
        });
        if(response){
            getOrders(dispatch, currentUser)
        }

    } catch (error) {
        dispatch(createOrderFail())
    }
}

