import { useEffect } from 'react';
import { Text, View } from 'react-native';
import { Typography } from '../styles';
import productModel from "../models/products";

function StockList({products, setProducts}: any) {
  if (products && setProducts) {
    useEffect(async () => {
      setProducts(await productModel.getProducts());
    }, []);
  }

  const list = products.map((product, index) => {
    return <Text
            key={index}
            style={{ ...Typography.normal }}
            >
              { product.name } - { product.stock }
            </Text>
  });

  return (
    <View>
      {list}
    </View>
  );
}

export default function Stock({products, setProducts}:any) {
  return (
    <View>
      <Text style={Typography.header1}>Lagerförteckning</Text>
      <StockList products={products} setProducts={setProducts}/>
    </View>
  );
}
