<template>
  <HeaderComponent />
  <router-view/>
  <ProductInfo />
  <FooterComponent />
</template>

<style lang="scss">
* {
    margin: 0;
    padding: 0;
    /* font-family: 'Roboto', sans-serif; */
    font-family: 'Ubuntu', sans-serif;
    /* box-sizing: content-box; */
    box-sizing: border-box;
    text-decoration: none;
    /* font-weight: 400; */
}

input[type="color"],
input[type="date"],
input[type="datetime"],
input[type="datetime-local"],
input[type="email"],
input[type="month"],
input[type="number"],
input[type="password"],
input[type="search"],
input[type="tel"],
input[type="text"],
input[type="time"],
input[type="url"],
input[type="week"],
select:focus,
textarea {
  font-size: 16px !important;
}

/*.fa, .fas {*/
    
/*}*/

.margem {
    position: relative;
    /* max-width: 1198px; */
    max-width: 1320px;
    margin: 0 auto;
    padding: 12px 16px;
}


body {
    /* Resetting margin, padding, and other properties */
    margin: 0;
    padding: 0;
    /* Resetting font-related properties */
    font-family: initial;
    font-size: initial;
    /* Resetting background and color properties */
    background: initial;
    color: initial;
    /* Add any other properties you want to reset here */
}

</style>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import ProductInfo from '@/components/ProductInfo.vue'

export default {
  name: 'App',
  components: {
    HeaderComponent,
    FooterComponent,
    ProductInfo,
  }
}
</script>
