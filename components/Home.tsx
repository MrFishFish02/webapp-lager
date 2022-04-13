import { Image, Text, ScrollView } from 'react-native';
import Stock from './Stock';
import warehouse from '../assets/warehouse.jpg';
import { Base, Typography } from '../styles';

export default function Home({products, setProducts}: any) {
  return (
      <ScrollView style={Base.base}>
          <Text style={Typography.main}>Lager-Appen</Text>
          <Image source={warehouse} style={Base.image} />
          <Stock products={products} setProducts={setProducts} />
      </ScrollView>
  );
}