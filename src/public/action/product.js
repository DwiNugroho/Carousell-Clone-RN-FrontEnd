import axios from 'axios'

// const IP = `https://clonecarousel.herokuapp.com/products`
export const getProduct = () => {
    return {
        type: 'GET_PRODUCT',
        payload: axios.get(`https://clonecarousel.herokuapp.com/products`)
    }
}
export const getProductSell = (id) => {
    return {
        type: 'GET_PRODUCT_SELL',
        payload: axios.get(`https://clonecarousel.herokuapp.com/products/user/${id}`)
    }
}
export const postProductSell = (data) => {
       
        let Data = new FormData();
        Data.append('product_name', data.product_name);
        Data.append('brand', data.brand);
        Data.append('description', data.description);
        Data.append('id_sub_category', "1");
        Data.append('id_user', "2");
        Data.append('image', {
           'name' : data.image.fileName,
           'uri' : data.image.uri,
           'type' : 'image/jpeg'
        });
        Data.append('`condition`', Number(data.condition));
        Data.append('price', data.price);
        console.log('data')
        console.log(data)
        console.log(Data)
    return {
        type: 'POST_PRODUCT_SELL',
        payload: axios.post(`https://clonecarousel.herokuapp.com/products`,Data)
            
    }
}