<template>
    <div class="margem" id="cat-REF" v-if="refeicoes.length">
        <h2>Refeições</h2>
    </div>
    <ProductsGroup :products="refeicoes" v-if="refeicoes.length" />

    <div class="margem" id="cat-DOC" v-if="doces.length">
        <h2>Doces e Sobremesas</h2>
    </div>
    <ProductsGroup :products="doces" v-if="doces.length" />

    <div class="margem" id="cat-POR" v-if="porcoes.length">
        <h2>Porções</h2>
    </div>
    <ProductsGroup :products="porcoes" v-if="porcoes.length" />

    <div class="margem" id="cat-BEB" v-if="bebidas.length">
        <h2>Bebidas</h2>
    </div>
    <ProductsGroup :products="bebidas" v-if="bebidas.length" />

</template>

<style lang="scss" scoped>
.margem {
    padding-bottom: 0;
}

.margem h2 {
    margin-bottom: 6px;
    margin-top: 24px;
}
</style>

<script>
import { products } from '../temp-data'
import ProductsGroup from '@/components/ProductsGroup.vue'


export default {
    name: 'ProductsList',
    data () {
        return {
            products
        }
    },
    components: {
        ProductsGroup
    },
    computed: {
        refeicoes () {
            return this.products.filter(product => product.type === 'REF')
        },
        doces () {
            return this.products.filter(product => product.type === 'DOC')
        },
        porcoes () {
            return this.products.filter(product => product.type === 'POR')
        },
        bebidas () {
            return this.products.filter(product => product.type === 'BEB')
        },
    },
    methods: {
    
    }
    
}
</script>