import config from "../config/config.json";

const orderModel = {
    getOrders: async function getOrders() {
        const response = await fetch(`${config.base_url}/orders?api_key=${config.api_key}`);
        const result = await response.json();

        return result.data;
    },
    pickOrder: async function pickOrder(order: any) {
        // TODO: Minska lagersaldo för de
        // orderrader som finns i ordern

        // TODO: Ändra status för ordern till packad

        // order.order_items
        // amount + name

        order.order_items.forEach((a)=> {
            const test = {
                id:a.product_id,
                name:a.name,
                stock:a.stock - a.amount,
                api_key:`${config.api_key}`

            }
            fetch(`https://lager.emilfolino.se/v2/products?api_key=${config.api_key}`, {
                body: JSON.stringify(test),
                headers: {
                  'content-type': 'application/json'
                },
                method: 'PUT'
            })
            .then(function (response) {
                console.log("updated products");
            });
        });
        // console.log(order.order_items[0].stock);
        console.log(order.id);

        let order_update = {
            id:order.id,
            name:order.name,
            status_id:200, 
            api_key:`${config.api_key}`
        };
        
        fetch(`https://lager.emilfolino.se/v2/orders?api_key=${config.api_key}`, {
            body: JSON.stringify(order_update),
            headers: {
              'content-type': 'application/json'
            },
            method: 'PUT'
        })
        .then(function (response) {
            console.log("done?");
        });

    }
};

export default orderModel;