import { useDispatch } from "react-redux";
import { DeleteIcon } from "../../assets/icon/DeleteIcon";
import { IProduct } from "../../utils/interface/IProduct";
import { updateQuantityCartAction } from "../../redux/action/updateQuantityCartAction";
import { useState } from "react";
import { deleteItemCartAction } from "../../redux/action/deleteItemCartAction";

interface CartItemProps {
  product: IProduct;
}

export const CartItem = ({ product }: CartItemProps) => {
  const dispatch = useDispatch();
  const [quantityCart, setQuantityCart] = useState(product.quantityCart);

  const updateQuantityCart = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);

    if (!isNaN(value) && value > 0 && value <= product.quantity) {
      setQuantityCart(value);
      dispatch(updateQuantityCartAction({ ...product, quantityCart: value }));
    }
  };

  const updateQuantityCartBtn = (value: number) => {
    const newQuantityCart = quantityCart + value;
    if (newQuantityCart > 0 && newQuantityCart <= product.quantity) {
      setQuantityCart(newQuantityCart);
      dispatch(
        updateQuantityCartAction({ ...product, quantityCart: newQuantityCart })
      );
    }
  };

  const deleteCartItem = () => {
    dispatch(deleteItemCartAction(product));
  };

  return (
    <div className="flex items-center w-auto border border-slate-200 justify-evenly p-4 rounded-lg shadow-lg gap-4">
      <div>
        <img
          className="w-20 h-20 rounded-full object-cover border-2 border-slate-600"
          src={product.image}
          alt={product.name}
        />
      </div>

      <div className="flex flex-col gap-4 w-auto">
        <div className="flex items-center justify-between w-full">
          <h3 className="whitespace-nowrap text-base font-medium text-slate-600">
            {product.name}
          </h3>
          <div className="cursor-pointer" onClick={deleteCartItem}>
            <DeleteIcon />
          </div>
        </div>

        <div className="text-base font-normal text-slate-500 capitalize">
          <span className="font-medium">slot</span>: {product.quantity}
        </div>

        <div className="flex items-center justify-between w-full gap-6">
          <div className="flex items-center gap-4">
            <button
              className="font-bold text-xl"
              onClick={() => updateQuantityCartBtn(1)}
            >
              +
            </button>
            <input
              type="number"
              name={`item-quantity-${product._id}`}
              value={quantityCart}
              className="border border-slate-500 outline-none"
              id=""
              onChange={updateQuantityCart}
            />
            <button
              className="font-bold text-xl"
              onClick={() => updateQuantityCartBtn(-1)}
            >
              -
            </button>
          </div>

          <span className="whitespace-nowrap text-base text-slate-600">
            {/* change to dollar format */}
            <span className="font-medium capitalize">price: </span>
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(product.price)}
          </span>
        </div>
      </div>
    </div>
  );
};
