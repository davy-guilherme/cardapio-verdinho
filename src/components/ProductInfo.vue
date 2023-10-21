<template>
<div id="productInfo" :class="{ showProductInfo: show }"><!-- v-if="show" -->
        <div class="bg" @click="fechar()"></div>
        <div class="productInfoBox" :class="{ showProductInfoBox : show, hideProductInfoBox: !show }">
            <div id="btn-fechar" @click="fechar()">
                <i class="fa fa-times-circle"></i>
            </div>
            <div class="productData margem">
                <div class="descricao">
                    <div class="descricao-img">
                        <img :src="product.image" :alt="product.name">
                    </div>
                    <div class="descricao-txt">
                        <p class="type">{{ productType }}</p>
                        <p class="nome">{{ product.name }}</p>
                    </div>
                </div>

                <div class="info">
                    <p>{{ product.description }}</p>
                </div>

                <div class="price">
                    <p>R$ {{ product.price }}</p>
                </div>

                <div class="buttons">
                    <a :href="whatsAppUrl" class="whatsapp" target="_blank">Pedir pelo WhatsApp</a>
                    <button class="ifood">Pedir pelo iFood</button>
                </div>
                
            </div>
            

            
            
            <!-- Ja possui produto no carrinho -->
            <!-- <button :class="{ btnAtivo : qtdVarejo > 0 || qtdAtacado > 0, btnInativo : qtdVarejo <= 0 && qtdAtacado <= 0 }" @click="adicionarNoCarrinho()">Adicionar ao Carrinho</button> -->
            
            
        </div>
    </div>
</template>

<style lang="scss" scoped>
#productInfo {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    z-index: 900;
    // display: flex;
    // flex-direction: column;
    // justify-content: space-around;
    // align-items: center;
    display: none;

    .bg {
        width: 100%;
        height: 100%;
        background: rgba(81, 204, 10, 0.2);
        // // background: rgba(241, 205, 70, 0.3); // #f1cd46
        // // background: rgba(145, 100, 205, 0.5); // #9164cd
        position: absolute;
        top: 0;
        right: 0;
        z-index: 901;

    }

    .productInfoBox {
        
        position: absolute;
        bottom: -70px;
        width: 100%;
        height: calc(76vh + 70px);
        background: #fff;
        // top: 0;
        // right: calc(50% - 180px);
        z-index: 902;
        border-radius: 48px 48px 0 0;
        padding: 24px 16px;

        // overflow: scroll;

        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        transition: 2s;

        #btn-fechar {
            position: absolute;
            // top: 32px;
            // right: 32px;

            top: -0.9rem;
            right: 76px;
            cursor: pointer;  
            width: 18px;
            height: 18px;
            
            i {
                font-size: 3.2rem;
                // color: rgb(255, 73, 73);
                color: rgb(145, 100, 205);
                
            }
        }

        .productData {
            width: 100%;
            height: 89%;
            overflow: scroll;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            
            .descricao {
                width: 100%;
                max-width: 600px;
                height: 180px;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;

                .descricao-img {
                    flex: 4;
                    padding: 8px;
                    width: 100%;
                    height: 100%;
                    overflow: hidden;
                    display: flex;
                    flex-direction: row;
                    justify-content: flex-end;
                    align-items: center;
                    img {
                        max-width: 100%;
                        max-height: 100%;
                        border-radius: 6px;
                    }
                }

                .descricao-txt {
                    padding: 8px;
                    flex: 4;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: right;

                    .type {
                        font-size: 0.9rem;
                        // color: #8CC740;
                        // color: #9ed47b;
                        color: green;
                        font-weight: 1em;
                    }
                    .nome {
                        // color: #7E7E7E;
                        color: #000;
                        font-size: 1.05rem;
                        font-weight: 600;
                    }
                }

                .descricao-favoritar {
                    flex: 1;
                    cursor: pointer;
                }

            }

            .info {
                margin: 8px 0;
                width: 100%;
                max-width: 600px;
            }

            .info p {
                font-size: 0.9rem;
                line-height: 1.3;
                color: #000;
                font-weight: 300;
            }

            .price {
                margin: 8px 0;
                width: 100%;
                max-width: 600px;
            }

            .price p {
                text-align: right;
            }

            .buttons {
                height: 40px;
                display: flex;
                flex-direction: column;
                margin: 8px 0;
                width: 100%;
                max-width: 600px;


                button, a {
                    padding: 12px 20px;
                    border-radius: 4px;
                    display: block;
                    color: #fff;
                    text-decoration: none;
                    text-align: center;
                    font-size: 1.1rem;
                    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
                    letter-spacing: 2px;
                    background-color: #60d166;
                    color: #000;
                    border: none;
                    margin: 8px 0;
                    cursor: pointer;
                }

                .whatsapp {
                    background-color: #60d166;
                    color: #000;
                }

                .ifood {
                    background-color: #ec3732;
                    color: #fff;
                }
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
    .productInfoBox.showProductInfoBox {
        animation: fadeIn .6s, slideIn .8s linear;
    }

    // .productInfoBox.hideProductInfoBox {
    //     animation: fadeOut 1s, slideOut .8s linear;
    // }


    
    
}

#productInfo.showProductInfo {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
}






@keyframes slideIn {
  0% {
    transform: translateY(400px);
    animation-timing-function: ease-out;
  }
  60% {
    transform: translateY(-30px);
    animation-timing-function: ease-in;
  }
  80% {
    // transform: translateY(10px);
    transform: translateY(-20px);
    animation-timing-function: ease-out;
  }
  100% {
    transform: translateY(0px);
    animation-timing-function: ease-in;
  }
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
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
        },
        productType () {
            switch (this.product.type) {
                case 'REF':
                    return 'Refeição'
                case 'POR':
                    return 'Porção'
                case 'DOC':
                    return 'Doce ou Sobremesa'
                case 'BEB':
                    return 'Bebida'
                default:
                    return ''
            }
        },
        whatsAppUrl () {
            return new URL("https://api.whatsapp.com/send/?phone=5511919718205&text=Olá!%0aGostaria+de+pedir:+" + this.product.name);
            
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