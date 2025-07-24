import { createStore } from 'vuex';
import usuario from './usuario';
import teste from './teste';
import product from './modules/product';


const store = createStore({

    modules: {
        usuario,
        teste,
        product
    }
})


export default store;