<template>
    <div class="margem">
        <div class="produto" v-for="product in products" :key="product.id">
            <div class="image">
                <img :src="product.image" alt="">
            </div>
            <div class="info">
                <div class="txt">
                    <h4>{{ product.name }}</h4>
                    <p>{{ product.description.length > 140 ? product.description.slice(0, 136) + '...' : product.description }}</p>
                </div>
                <div class="footer">
                    <p class="price">R$ {{ product.price }}</p>
                    <button @click="showProductDetails(product)">+ Informações</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.margem {
    display: grid;
    grid-template-columns: 6fr 6fr;
    grid-gap: 16px;
}

.margem .produto {
    border: 1px solid #9ed47b;
    border-radius: 6px;
    padding: 8px;

    display: grid;
    grid-template-columns: 3fr 9fr;
    grid-gap: 12px;
    // flex-direction: row;
    // align-items: center;
    // justify-content: space-between;
    // box-shadow: 0px 0px 1px 1px rgba(76, 76, 76, 0.1) !important;
    box-shadow: 0px 0px 1px 1px rgba(158, 212, 123, 0.1) !important;
    
}

.margem .produto .image {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
.margem .produto .image img {
    width: 100%;
    border-radius: 6px;

}

.margem .produto .info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.margem .produto .info h4 {
    font-size: 1.05rem;
    font-weight: 400;
    margin: 2px 0 4px 0;
    padding: 0;
}

.margem .produto .info p {
    font-size: 0.9rem;
    line-height: 1.3;
    color: rgb(113, 113, 113);
    font-weight: 300;
}

.margem .produto .info .footer {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 16px;
}

.margem .produto .info .footer .price {
    font-weight: 400;
}

.margem .produto .info .footer button {
    background-color: #9ed47b;
    color: #2e2e2e;
    border-radius: 4px;
    border: none;
    padding: 12px 16px;
    cursor: pointer;
    font-weight: 500;
    transition: 0.2s;
    // box-shadow: 0 4px 2px -2px rgba(0, 0, 0, .1) !important;
}

.margem .produto .info .footer button:hover {
    background: green;
    color: #fff;
}

@media (max-width: 992px) {

}

@media (max-width: 768px) {
    .margem {
        grid-template-columns: 1fr;
    }
}

@media (max-width: 576px) { 
    .margem .produto {
        grid-template-columns: 4fr 8fr;
    }
}




</style>

<script>
export default {
    name: 'ProductsGroup',
    props: [ 'products' ],
    methods: {
        showProductDetails (productDetails) {
            // this.$emit("show-product-details", {
            //     productDetails
            // })
            this.$store.dispatch( 'showSelectedProduct', { ...productDetails } )
        }
    },
}
</script>