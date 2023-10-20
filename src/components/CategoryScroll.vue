<template>

    <div id="h-scroll-externo">

        <nav id="hscroll">
            <div class="margem h-scroll-interno">
                <a class="active-cat" href="#">Tudo</a>
                <a href="#">Bebidas</a>
                <a href="#">Bebidas</a>
            </div>
        </nav>

        <div id="h-scroll-trasnparencia">
            <div class="h-scroll-left"></div>
            <div class="h-scroll-right"></div>
        </div>

    </div>
</template>

<style scoped>
/* começa scroll */

#h-scroll-externo {
    position: relative;
    width: 100%;
}

#h-scroll-trasnparencia {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 888;
}

#h-scroll-trasnparencia .h-scroll-left {
    position: absolute;
    
    top: 4px;
    left: 0;
    height: 60px;
    width: 32px;
    background: linear-gradient(to right, rgb(255, 255, 255), rgba(255, 255, 255, 0));
}

#h-scroll-trasnparencia .h-scroll-right {
    position: absolute;
    top: 4px;
    right: 0;
    height: 60px;
    width: 32px;
    background: linear-gradient(to left, rgb(255, 255, 255), rgba(255, 255, 255, 0));
}

#hscroll {
    width: 100%;
    position: relative;
    height: auto;
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
    scrollbar-width: none; /* Firefox 64 */
    -ms-overflow-style: none; /* IE 11 */
}

#hscroll::-webkit-scrollbar {
    display: none; /* for Chrome, Safari, and Opera */
}


#hscroll .h-scroll-interno {
    margin-top: 8px !important;
    margin-bottom: 8px !important;
    position: relative;

    
}





#hscroll .h-scroll-interno a {
    font-size: 1.05rem !important;
    margin: 0 6px !important;
    background: #fff !important;
    padding: 4px 6px !important;
    border-radius: 6px !important;
    color: green !important;
    box-shadow: 0 4px 2px -2px rgba(0, 0, 0, .1) !important;
    font-weight: 300 !important;
    border: 1px solid green !important;
    transition: .5s !important;
}

#hscroll .h-scroll-interno a:first-child {
    margin: 0 6px 0 0 !important;
}

#hscroll .h-scroll-interno a:last-child {
    margin: 0 18px 0 6px !important;
}


#hscroll .h-scroll-interno a.active-cat {
    background: green !important;
    color: #fff !important;
}



#hscroll .h-scroll-interno a:hover {
    background-color: #8cc740 !important;
    color: #111 !important;
}



/* acaba scroll */
</style>

<script>
export default {
    name: 'CategoryScroll',
}
</script>