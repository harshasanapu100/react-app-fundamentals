import React, { useEffect, useState } from "react";

const UseEffectHook = ({ category }: { category: string }) => {
  const [products, setProducts] = useState<string[]>([]);

  useEffect(() => {
    console.log("Fetching Products in", category);
    setProducts(["Clothing", "Hosehold"]);
  }, [category]);

  return <div>UseEffectHook</div>;
};

export default UseEffectHook;
