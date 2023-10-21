<template>
    <div id="produto" v-if="show">
        <div class="bg" @click="fechar()"></div>
        <div class="box-selecionarProduto">
            <div id="btn-fechar" @click="fechar()">
                <img src="#" alt="fechar">
            </div>
            <div class="descricao">
                 <div class="descricao-img">
                    <img :src="product.image" :alt="product.name">
                </div>
                <div class="descricao-txt">
                    <p class="type">{{ product.category }}</p>
                    <p class="nome">{{ product.name }}</p>
                </div>
            </div>

            <div class="info">
                <p>{{ product.description }}</p>
            </div>

            
            
            <!-- Ja possui produto no carrinho -->
            <!-- <button :class="{ btnAtivo : qtdVarejo > 0 || qtdAtacado > 0, btnInativo : qtdVarejo <= 0 && qtdAtacado <= 0 }" @click="adicionarNoCarrinho()">Adicionar ao Carrinho</button> -->
            
            
        </div>
    </div>
</template>

<style lang="scss" scoped>
#produto {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    z-index: 900;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    .bg {
        width: 100%;
        height: 100%;
        background: rgba(81, 204, 10, 0.5);
        position: absolute;
        top: 0;
        right: 0;
        z-index: 901;

    }

    .box-selecionarProduto {
        
        position: relative;
        width: 332px;
        background: white;
        // top: 0;
        // right: calc(50% - 180px);
        z-index: 902;
        border-radius: 16px;
        padding: 32px 16px;

        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;

        #btn-fechar {
            position: absolute;
            top: 20px;
            right: 20px;
            cursor: pointer;  
            width: 18px;
            height: 18px;
            
            img {
                width: 100%;
            }
        }

        .descricao {
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;

            .descricao-img {
                flex: 2;
                padding: 8px;
                width: 100%;
                height: 500px;
                overflow: hidden;
                img {
                    width: 100%;
                    border-radius: 8px;
                }
            }

            .descricao-txt {
                padding: 8px;
                flex: 3;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: right;

                .categoria {
                    font-size: 12px;
                    color: #8CC740;
                    font-weight: 1em;
                }
                .nome {
                    color: #7E7E7E;
                    font-size: 16px;
                    font-weight: 1.2em;
                }
            }

            .descricao-favoritar {
                flex: 1;
                cursor: pointer;
            }

        }

        .vendido-por {
            width: 98%;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            margin: 16px 1%;
            padding: 16px;
            background: rgba(140, 199, 64, 0.12);
            border-radius: 12px;
            margin-bottom: 16px;

            p:first-child {
                flex: 2;
                font-size: 12px;
                color: #8CC740;

                span {
                    display: block;
                    font-size: 16px;
                    font-weight: 600;
                }
            }

            p:last-child {
                flex: 1;
                font-size: 18px;
                font-weight: 600;
                color: #8CC740;
            }
        }

        
        
        


        .btnAtivo {
            width: 98%;
            border: none;
            padding: 16px 36px;
            background: #8CC740;
            border-radius: 8px;
            margin-top: 24px;
            color: #fff;
            font-weight: 400;
            font-size: 0.9em;
            letter-spacing: 0.1em;
            cursor: pointer;
        }

        .btnInativo {
            width: 98%;
            border: none;
            padding: 16px 36px;
            background: gray;
            border-radius: 8px;
            margin-top: 24px;
            color: #fff;
            font-weight: 400;
            font-size: 0.9em;
            letter-spacing: 0.1em;
            cursor: pointer;
        }



    }
    
    
}
</style>

<script>
export default {
    name: 'ProductInfo',
    data () {
        return {}
    },
    computed: {
        product () {
            return this.$store.state.selectedProduct
        },
        show () {
            return this.$store.state.showSelectedProduct
        }

    },
    // watch: {
    //     show (newValue) {
    //         if (newValue) {
    //             return this.product ? true : false
    //         }
    //     }
    // },
    methods: {
        fechar () {
            this.$store.dispatch( 'closeSelectedProduct', {} )
        }
    }
}
</script>