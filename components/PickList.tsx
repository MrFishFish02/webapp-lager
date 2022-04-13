import { View, Text, Button } from "react-native";
import orderModel from "../models/orders";
import productModel from "../models/products";


export default function PickList({ route, navigation, setProducts }: any) {
    const { order } = route.params;

    async function pick() {
        await orderModel.pickOrder(order);
        setProducts(await productModel.getProducts());
        navigation.navigate("List", { reload: true });
    }

    const orderItemsList = order.order_items.map((item, index) => {
        return <Text
                key={index}
                >
                    {item.name} - {item.amount} - {item.location}
            </Text>;
    });
    let check = false;
    order.order_items.forEach((e) => {
        if (e.stock < e.amount) {
            check = true;
        }
    });

    function test() {
        console.log("fungerar inte");
    }
    if (check == true) {
        return (
            <View>
                <Text>{order.name}</Text>
                <Text>{order.address}</Text>
                <Text>{order.zip} {order.city}</Text>
    
                <Text>Produkter:</Text>
    
                {orderItemsList}
                <Button title="Inte tillräckligt med produkter" onPress={test} color={'tomato'}/>
            </View>
        )
    }
    return (
        <View>
            <Text>{order.name}</Text>
            <Text>{order.address}</Text>
            <Text>{order.zip} {order.city}</Text>

            <Text>Produkter:</Text>

            {orderItemsList}
            <Button title="Plocka order" onPress={pick} />
        </View>
    )

};