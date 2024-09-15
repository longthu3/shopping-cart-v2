import { useDispatch } from "react-redux";
import { AddIcon } from "../../assets/icon/AddIcon";
import { StartIcon } from "../../assets/icon/StartIcon";
import { addToCartAction } from "../../redux/action/addToCartAction";
import { IProduct } from "../../utils/interface/IProduct";
import { useSelector } from "react-redux";
import { InitialState } from "../../utils/interface/IState";
import { updateQuantityCartAction } from "../../redux/action/updateQuantityCartAction";
import { Bounce, toast } from "react-toastify";

interface ProductProps {
  product: IProduct;
}

export const Product = ({ product }: ProductProps) => {
  const dispatch = useDispatch();
  const cart = useSelector((state: InitialState) => state.cart);

  const isProductExisted = () => {
    return cart.find((item) => item._id === product._id);
  };

  const addToCart = () => {
    const productExisted = isProductExisted();
    if (productExisted) {
      if (productExisted.quantityCart + 1 >= productExisted.quantity) {
        return;
      }
      dispatch(
        updateQuantityCartAction({
          ...productExisted,
          quantityCart: productExisted.quantityCart + 1,
        })
      );
      toast.success(
        <div>
          🛒 Product{" "}
          <span className="font-bold text-base underline">
            {productExisted.name}
          </span>{" "}
          already existed, we update the quantity cart of this item to{" "}
          <span className="font-bold text-base">
            {productExisted.quantityCart + 1}
          </span>{" "}
          !
        </div>,
        {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        }
      );
      return;
    }
    dispatch(
      addToCartAction({
        ...product,
        quantityCart: 1,
        quantity: product.quantity - 1,
      })
    );

    toast(`🛒 Product add successfully!`, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  return (
    <div
      className="flex flex-col gap-6 justify-center rounded-2xl border border-slate-200 w-auto p-4"
      style={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }}
    >
      <div className="inline-flex items-center justify-between h-20">
        <img
          className="w-32 h-32 rounded-full border-yellow-400 border-4 object-cover -translate-y-1/4"
          src={product.image}
          alt="img-product"
        />
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <StartIcon />
            <span className="text-green-600 text-sm font-medium">5/5</span>
          </div>
          <div className="uppercase bg-red-400 px-2 py-1 inline-flex items-center justify-center font-medium text-xs rounded-md text-slate-100 rotate-6">
            <span>on sale</span>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-base font-medium text-slate-600">{product.name}</h3>
      </div>

      <div className="inline-flex justify-between">
        <div onClick={addToCart}>
          <div className="items-center gap-2 border border-slate-300 inline-flex rounded-md px-4 py-1 cursor-pointer hover:bg-slate-200 duration-75">
            <span className="text-sm font-medium">Add</span>
            <AddIcon />
          </div>
        </div>

        <span className="font-medium text-base text-red-500">
          {/* change to dollar format */}
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(product.price)}
        </span>
      </div>
    </div>
  );
};
