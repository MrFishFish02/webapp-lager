import { useState, useEffect } from 'react';
import { View, Text, Button } from "react-native";
import config from "./../config/config.json";

export default function OrderList({ navigation }) {
    const [allOrders, setAllOrders] = useState([]);

    useEffect(() => {
        fetch(`${config.base_url}/orders?api_key=${config.api_key}`)
          .then(response => response.json())
          .then(result => setAllOrders(result.data));
    }, []);

    const listOfOrders = allOrders
        .filter(order => order.status === "Ny")
        .map((order, index) => {
            return <Button color={'#03c588'}
                title={order.name}
                key={index}
                onPress={() => {
                    navigation.navigate('Details', {
                        order: order
                    });
                }}
            />
        });

    return (
        <View>
            {listOfOrders}
        </View>
    );
}