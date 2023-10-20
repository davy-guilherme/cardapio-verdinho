<template>
  <router-view/>
</template>

<style lang="scss">
* {
    /* margin: 0;
    padding: 0; */
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
    max-width: 1224px;
    margin: 0 auto;
    padding: 12px;
}

#topo > .margem > *, #header-topo > .margem > * {
    /* Resetting margin, padding, and other properties */
    margin: 0 !important;
    padding: 0 !important;
    /* Resetting font-related properties */
    font-family: initial !important;
    font-size: initial !important;
    /* Resetting background and color properties */
    background: initial !important;
    color: initial;
    /* Add any other properties you want to reset here */
    
    font-family: initial !important;
    font-size: initial !important;
    
    line-height: initial !important;
    
    box-sizing: border-box;
    font-weight: 400;
    box-shadow: none !important;
    
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
