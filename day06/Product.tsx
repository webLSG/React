import { useEffect } from "react";
import { useParams } from "react-router-dom";

const Product = () => {
  const { id } = useParams();

  useEffect(() => {}, []);

  return <div>Product {id}</div>;
};

export default Product;
