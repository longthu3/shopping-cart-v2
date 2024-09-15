import { useSelector } from "react-redux";
import { CartPage } from "../assets/icon/CartPage";
import { InitialState } from "../utils/interface/IState";
import { CartItem } from "./common/CartItem";
import { MainLayout } from "./layout/MainLayout";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { purchaseCartAction } from "../redux/action/purchaseCartAction";

export const Cart = () => {
  const cart = useSelector((state: InitialState) => state.cart);
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    if (cart.length === 0) {
      return;
    }
    setOpen(true);
  };

  const confirmPurchase = () => {
    dispatch(purchaseCartAction());
    setOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const totalBill = cart.reduce((total, item) => {
    return total + item.price * item.quantityCart;
  }, 0);

  return (
    <MainLayout>
      <div>
        <div className="flex items-center gap-2 sm:justify-normal justify-center">
          <CartPage />
          <h1 className="text-gray-700 text-xl my-20 font-medium">Cart</h1>
        </div>

        {/* purchase */}
        <div className="flex justify-center items-center">
          <div
            className="grid grid-cols-2 gap-x-20 gap-y-4 p-4 rounded-md border border-slate-200 w-auto"
            style={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }}
          >
            <div className="col-span-2 text-base font-medium text-slate-600">
              <span>Your order: </span>
            </div>

            <div>
              <span className="text-slate-500 text-sm">Subtotal: </span>
            </div>

            <div className="text-right">
              <span className="text-slate-500 text-sm">
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                }).format(totalBill)}
              </span>
            </div>

            <div className="col-span-2 h-[0.5px] bg-slate-700"></div>

            <div>
              <span className="text-lg font-medium text-slate-600">
                Total:{" "}
              </span>
            </div>

            <div className="text-right">
              <span className="text-lg font-medium text-slate-600">
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                }).format(totalBill)}
              </span>
            </div>

            <button
              className="col-span-2 bg-emerald-600 p-2 rounded-md text-sm text-white hover:bg-emerald-700 duration-150 font-medium"
              onClick={handleClickOpen}
            >
              <span>Purchase</span>
            </button>

            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">
                {"PURCHASE CONFIRMATION"}
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  Do you want to purchase ?
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>Disagree</Button>
                <Button onClick={confirmPurchase} autoFocus>
                  Agree
                </Button>
              </DialogActions>
            </Dialog>
          </div>
        </div>

        {/* cart items */}

        <div className="flex items-center justify-center my-4 flex-col gap-y-8">
          {cart.map((item) => (
            <CartItem key={item._id} product={item} />
          ))}
        </div>
      </div>
    </MainLayout>
  );
};
