<template>
    <div class="margem" id="cat-REF" v-if="refeicoes.length">
        <h2>Refeições</h2>
    </div>
    <ProductsGroup :products="refeicoes" v-if="refeicoes.length" />

    <div class="margem" id="cat-POR" v-if="porcoes.length">
        <h2>Porções</h2>
    </div>
    <ProductsGroup :products="porcoes" v-if="porcoes.length" />

    <div class="margem" id="cat-DOC" v-if="doces.length">
        <h2>Doces e Sobremesas</h2>
    </div>
    <ProductsGroup :products="doces" v-if="doces.length" />

    <div class="margem" id="cat-BEB" v-if="bebidas.length">
        <h2>Bebidas</h2>
    </div>
    <ProductsGroup :products="bebidas" v-if="bebidas.length" />

    <div class="margem" v-if="keyWord.length > 0 && productsFiltered.length == 0">
        <h2><span style="font-weight: 400;">Pesquisando por: </span>{{ keyWord }}</h2>
        <p style="text-align: center; margin: 64px 0;">Não encontramos nenhum produto com o termo pesquisado.</p>
    </div>

</template>

<style lang="scss" scoped>
.margem {
    padding-bottom: 0;
}

.margem h2 {
    margin-bottom: 6px;
    margin-top: 24px;
    color: green;
}
</style>

<script>
import { products } from '../temp-data'
import ProductsGroup from '@/components/ProductsGroup.vue'


export default {
    name: 'ProductsList',
    data () {
        return {
            products,
            productsFiltered: ''
        }
    },
    components: {
        ProductsGroup
    },
    computed: {
        refeicoes () {
            return this.productsFiltered ? this.productsFiltered.filter(product => product.type === 'REF') : this.products.filter(product => product.type === 'REF')
        },
        porcoes () {
            return this.productsFiltered ? this.productsFiltered.filter(product => product.type === 'POR') : this.products.filter(product => product.type === 'POR')
        },
        doces () {
            return this.productsFiltered ? this.productsFiltered.filter(product => product.type === 'DOC') : this.products.filter(product => product.type === 'DOC')
        },
        bebidas () {
            return this.productsFiltered ? this.productsFiltered.filter(product => product.type === 'BEB') : this.products.filter(product => product.type === 'BEB')
        },
        keyWord () {
            return this.$store.state.keyWord
        },
    },
    watch: {
        keyWord: function (val) {
            this.productsFiltered = this.findProductsWith(val);
        },
    },
    methods: {
        findProductsWith(val) {
            // Array para armazenar os produtos com val no nome.
            const productsWith = [];

            // Percorre a lista de produtos e verifica se o nome contém val
            for (const product of this.products) {
                if (product.name.toLowerCase().includes(val.toLowerCase())) {
                    productsWith.push(product);
                }
            }

            return productsWith

        }
        
        // console.log(productsWithRefri);
    }
    
}
</script>