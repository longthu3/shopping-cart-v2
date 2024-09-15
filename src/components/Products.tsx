import { useEffect, useState } from "react";
import { DiscountIcon } from "../assets/icon/DiscountIcon";
import { BASE_URL } from "../utils/constant/MyConst";
import { Product } from "./common/Product";
import { MainLayout } from "./layout/MainLayout";
import { DataProductsResponse } from "../utils/interface/IDataProducts";
import { useSelector } from "react-redux";
import { InitialState } from "../utils/interface/IState";
import { useDispatch } from "react-redux";
import fetchProductAction from "../redux/action/fetchProductAction";
import { IProduct } from "../utils/interface/IProduct";
import { ProductSkeleton } from "./common/ProductSkeleton";
import { Pagination, PaginationItem } from "@mui/material";
import { Link } from "react-router-dom";
import { usePages } from "../hooks/useParamsUrl";

export const Products = () => {
  const products = useSelector((state: InitialState) => state.listProduct);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const page = usePages({ condition: "page" });
  const [totalPage, setTotalPage] = useState(0);

  const fetchProducts = async () => {
    try {
      const response = await fetch(`${BASE_URL}/products?page=${page}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      setLoading(false);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data: DataProductsResponse = await response.json();

      setTotalPage(data.data.totalPage);

      const listProducts = data.data.listProduct;

      listProducts.forEach((product: IProduct) => {
        product.quantityCart = 0;
      });

      dispatch(fetchProductAction(listProducts));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [page]);

  return (
    <MainLayout>
      <div>
        <div className="flex items-center gap-2 sm:justify-normal justify-center">
          <DiscountIcon />
          <h1 className="text-gray-700 text-xl my-20 font-medium">Products</h1>
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-y-24 gap-x-12 items-center justify-center w-full">
          {loading
            ? Array.from({ length: 10 }).map((_, index) => (
                <ProductSkeleton key={index} />
              ))
            : products.map((product: IProduct) => (
                <Product key={product._id} product={product} />
              ))}
        </div>
      </div>
      <div className="flex items-center justify-center mt-6">
        <Pagination
          page={page}
          count={totalPage}
          renderItem={(item) => (
            <PaginationItem
              component={Link}
              to={`/${item.page === 1 ? "" : `?page=${item.page}`}`}
              {...item}
            />
          )}
        />
      </div>
    </MainLayout>
  );
};
