import axios from 'axios';
import { useEffect, useState } from 'react';

const useItems = () => {
    const [items, setItems] = useState<any[]>([]);

    // get items 
    useEffect(() => { 
        axios.get('https://framex-server.herokuapp.com/api/products')
            .then(data => setItems(data.data))
            .catch(err=>console.log(err));
    }, []);

    // add items 
    const addItem = (item:any) => {
        axios.post('https://framex-server.herokuapp.com/api/product', item)
            .then(data => {
                if (data.data.acknowledged) {
                    setItems([...items, { ...item, _id: data.data.insertedId }]);
                }
            })
            .catch(err => console.log(err));
    }

    // delete items 
    const deleteItem = (id:any) => {
        axios.delete(`https://framex-server.herokuapp.com/api/products/${id}`)
            .then(data => {
                if (data.data.acknowledged) {
                    setItems(items.filter(item => item._id !== id));
                }
            })
            .catch(err => console.log(err));
    }

    return {items, setItems, addItem, deleteItem};
}

export default useItems;