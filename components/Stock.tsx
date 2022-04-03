import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import config from "../config/config.json";

function StockList() {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
      fetch(`${config.base_url}/products?api_key=${config.api_key}`)
      .then(response => response.json())
      .then(result => setProducts(result.data));
    }, []);

  const items = products.map((product, index) => <Text style={{color: '#fff', fontSize: 20}} key={ index }>{ product.name }: { product.stock }</Text>);

  return (
    <View>
      {items}
    </View>
  );
}

export default function Stock() {
  return (
    <View>
      <Text style={{color: '#03c588', fontSize: 30}}>Lagerförteckning</Text>
      <StockList />
    </View>
  );
}
