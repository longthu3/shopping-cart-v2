import { FormControl, InputLabel, Select } from "@mui/material";
import { CartIcon } from "../assets/icon/CartIcon";
import { UserIcon } from "../assets/icon/UserIcon";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { InitialState } from "../utils/interface/IState";

export const Header = () => {
  const cart = useSelector((state: InitialState) => state.cart);

  return (
    <div
      className="flex flex-col sm:flex-row gap-4 sm:gap-0 px-10 py-6 items-center justify-between rounded-b-[10px] border border-gray-300 w-full"
      style={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }}
    >
      <div className="flex gap-10 items-center sm:flex-row flex-col w-full">
        <Link to={"/"} className="text-lg uppercase font-bold">
          Duy Long Shop
        </Link>
        <form action="">
          <input
            className="
                w-[200px] 
                h-[30px] 
                px-2 
                py-4 
                outline-none 
                rounded-md 
                capitalize 
                text-sm
                border 
                border-gray-300 
                focus:border-gray-500
                placeholder-gray-500
            "
            type="search"
            name="search"
            id="search"
            placeholder="search"
          />
        </form>

        <FormControl sx={{ m: 1, minWidth: 200 }}>
          <InputLabel
            htmlFor="grouped-native-select"
            sx={{
              top: -8,
            }}
            className="!text-gray-500 !font-medium !text-sm"
          >
            Categories
          </InputLabel>
          <Select
            native
            defaultValue=""
            id="grouped-native-select"
            label="Grouping"
            sx={{ height: 35 }}
          >
            <option aria-label="None" value="" />
            <optgroup label="Category 1">
              <option value={1}>Option 1</option>
              <option value={2}>Option 2</option>
            </optgroup>
            <optgroup label="Category 2">
              <option value={3}>Option 3</option>
              <option value={4}>Option 4</option>
            </optgroup>
          </Select>
        </FormControl>
      </div>

      <div className="flex items-center gap-6 sm:flex-row flex-col">
        <div className="flex items-center gap-2 cursor-pointer w-full">
          <UserIcon />
          <span className="text-gray-600 text-sm font-medium whitespace-nowrap">
            Duy Long
          </span>
        </div>

        <Link
          to={"./cart"}
          className="flex items-center gap-2 bg-gray-200 px-3 py-2 rounded-md cursor-pointer w-full hover:bg-gray-300 duration-100"
        >
          <CartIcon />
          <span className="text-gray-600 font-medium text-sm whitespace-nowrap">
            Cart: {cart.length}
          </span>
        </Link>
      </div>
    </div>
  );
};
