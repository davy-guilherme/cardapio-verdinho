<template>
    <div id="box-topo">
        <small>10% OFF na primeira compra usando VERDIN10</small>
    </div>
    

    <header id="header-topo">
        <div class="margem">

            <div class="logo-menu">
                <a href="/">
                    <img src="@/assets/verdinho-vegano-logo.png" alt="Verdinho Vegano">
                </a>
                <p>Verdinho Vegano <span>todo ser merece ser</span></p>
            </div>

            <input type="checkbox" name="nameu-bar" id="menu-bar">
            <label for="menu-bar">
                <!-- <a id="btn-associe-se-menu-bar" href="<?php # echo get_page_link( get_page_by_path( 'associe-se' ) ); ?>">Cadastre-se</a> -->
                <i id="menu-nav-button" class="fa fa-bars"></i>
            </label>

            <nav id="navbar-principal">
                <ul>
                    <li><a href="<?php echo get_page_link( get_page_by_path( 'loja' ) ); ?>">Loja</a></li>
                    <li><a href="<?php echo wc_get_cart_url(); ?>">Carrinho <span class="cart-items-number">3</span></a></li>
                    <li><a id="btn-associe-se" href="<?php echo wc_get_page_permalink('myaccount'); ?>">Minha Conta</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <div id="tempo-entrega">
        <p><i class="fa fa-clock-o" aria-hidden="true"></i> 15 - 45 min - <span id="btn-horario">Ver Mais</span></p>
        
    </div>

    <div id="topo">
        <div class="margem">

            <!-- <div class="redes-sociais">
                <a href="#" target="_blank"><i class="fa fa-facebook"></i></a>
                <a href="#" target="_blank"><i class="fa fa-instagram"></i></a>
                <a href="#" target="_blank"><i class="fa fa-linkedin-square"></i></a>
                <a href="#" target="_blank"><i class="fa fa-twitter"></i></a>
                <a href="#" target="_blank"><i class="fa fa-youtube-play"></i></a>
                <a href="#" target="_blank"><i class="fa fa-spotify"></i></a>
            </div> -->

            <div class="pesquisa">
                <!--<a class="link-ouvidoria hide-in-mobile" href="<?php # echo get_page_link( get_page_by_path( 'ouvidoria' ) ); ?>"><i class="fa fa-envelope"></i>Ouvidoria</a>-->
                <form method="get" action="<?php esc_url(home_url('/')); ?>">
                    <div id="pesquisa-box">
                        <i class="fa fa-search"></i>
                        <input type="text" name="s" id="s" placeholder="Pesquisar" style="box-shadow: none; margin: 0; padding: 0;" />
                        <input type="hidden" name="post_type" value="product" />
                    </div>
                </form>
            </div>
        </div>
    </div>

    <CategoryScroll />

</template>

<style lang="scss" scoped>

/* header {
    position: relative;
    width: 100%;
    height: 100vh;
    z-index: 99;
} */


/* TOPO */

#box-topo {
    position: relative;
    width: 100%;
    background-color: #8cc740;
    padding: 8px 24px 8px 24px;
    text-align: center;
}

#box-topo small {
    width: 100%;
    text-align: center;
    font-size: 0.92rem;
    color: #000;

}

#topo {
    width: 100%;
    position: relative;
    box-shadow: 0 4px 2px -2px rgba(0, 0, 0, .1);
    position: sticky;
    top: 0;
    z-index: 980;
    background: #fff;
}

#topo .margem {
    padding: 6px 12px !important;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    /* background-color: red; */
}

/* #topo .margem .redes-sociais {
    display: flex;
    flex-direction: row;
    align-items: center;

}

#topo .margem .redes-sociais i {
    margin: 4px 8px;
    cursor: pointer;
    font-size: 1.2rem;
    color: #93d63b;

} */

#topo .margem .pesquisa {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 60%;
}

/* #topo .margem .pesquisa .link-ouvidoria {
    margin: 0 14px 0 0;
    border-bottom: 1px solid #fff;

    font-size: 20px;
    padding: 16px;
    color: #93d63b;
    font-size: 0.84rem;
    display: block;
    transition: .2s;


    display: flex;
    flex-direction: row;
    align-items: center;

}

#topo .margem .pesquisa .link-ouvidoria i {
    margin: 0 4px 0 0;
    font-size: 0.8rem;
} */


#topo .margem .pesquisa form {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    
}

#topo .margem .pesquisa form #pesquisa-box {

    background-color: #f1ffde;
    padding: 8px 16px;
    border-radius: 32px;
    border: 1px solid #93d63b;
    width: 100%;;
}

#pesquisa-box i {
    color: #93d63b;
}

#pesquisa-box input {

    border: none;
    /* background-color: #E2E7EF; */
    background-color: #f1ffde;
    /* color: #93d63b; */
    color: #43454b;
    outline: none;
    width: 85%;
    margin-left: 8px !important;
    
    
}




/* HEADER - MENU PRINCIPAL */

#header-topo {
    /* position: fixed;
    top: 0; 
    left: 0;
    right: 0;
    background: #fff;
    box-shadow: 0 5px 10px rgba(0, 0, 0, .1);
    padding: 0px 7%;
    display: flex;
    align-items: center;
    justify-content: space-between;*/
    z-index: 990; 

    width: 100%;
    position: relative;  
    border-bottom: 1px solid #ccc;
}

#header-topo .margem {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    /* background-color: red; */
}

#menu-nav-button {
    color: #93d63b;
    margin-right: 16px;
    font-size: 32px;
}

#header-topo .margem .logo-menu {
    height: 98px;
    padding: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}

#header-topo .margem .logo-menu a {
    height: 98px;
    padding: 0;
}

#header-topo .margem .logo-menu img {
    height: 98px;
}

#header-topo .margem p {
    color: green;
    font-size: 1.5rem;
    font-weight: 600;
    margin: 4px;
    padding: 4px;
    line-height: 1.3;
}

#header-topo .margem p span {
    display: block;
    font-size: 0.92rem;
    font-weight: 400;
}


#header-topo .margem #navbar-principal > * {
    margin: 0 !important;
    padding: 0 !important;
}


#header-topo .margem #navbar-principal ul {
    list-style: none;
}

#header-topo .margem #navbar-principal ul li {
    position: relative; /* não precisa do flex */
    float: left;
}

#header-topo .margem #navbar-principal ul li a {
    font-size: 20px;
    padding: 16px;
    /* color: #93d63b; */
    color: #43454b;
    font-size: 0.94rem;
    display: block;
    transition: .2s;

    
}

#header-topo .margem #navbar-principal ul li a i {
    margin-left: 2px;
    font-size: 0.8rem;
    
}


#header-topo .margem #navbar-principal ul li a:hover {
    color: #49994C;
}

/* aqui é no drop down */

#header-topo .margem #navbar-principal ul li ul {
    position: absolute;
    left: 0;
    width: 198px;
    background: #fff;
    display: none; /* vai esconder os submenus !!!!!!!!! */
    /* box-shadow: 0px 4px 6px #333 ; */
    box-shadow: 0px 3px 6px #00000029;
}

#header-topo .margem #navbar-principal ul li ul li {
    width: 100%;
    border-top: 1px solid rgba(0, 0, 0, .1);
}

#header-topo .margem #navbar-principal ul li ul li a {
    padding: 16px;
}

/* aqui é no SEGUNDO drop down */

#header-topo .margem #navbar-principal ul li ul li ul {
    left: 248px;
    top: 0;
}

#header-topo .margem #navbar-principal ul li:focus-within > ul,
#header-topo .margem #navbar-principal ul li:hover > ul {
    display: initial;
}


#menu-bar {
    display: none;
}

#header-topo label {
    display: none;
    font-size: 20px;
    color: #333;
    cursor: pointer;
}


#header-topo label #btn-associe-se-menu-bar {
    background: #49994C;
    padding: 8px 10px;
    border-radius: 6px;
    color: #fff !important;
    font-size: 0.98rem;
    margin: 16px 32px;
    transition: .2s;
}

#header-topo label #btn-associe-se-menu-bar:hover {
    /* background: #245492; */
    background: #93d63b;

}


.cart-items-number {
    font-size: 0.8rem;
    color: #fff;
    background: green;
    border-radius:50%;
    padding: 1px 4px;
    opacity:0.9;
}















#btn-associe-se {
    background: #49994C;
    padding: 8px 10px;
    border-radius: 6px;
    color: #fff !important;
}

#btn-associe-se:hover {
    /* background: #245492; */
    background: #93d63b;

}


#tempo-entrega {
    border-bottom: 1px solid #ccc;
    padding: 6px;
}

#tempo-entrega p {
    text-align: center;
    margin: 0;
    font-size: 0.9rem;
}

#tempo-entrega p span {
    color: #6d6d6d;
    cursor: pointer;

}

#tempo-entrega p span:hover {
    border-bottom: 1px solid #6d6d6d;
    
}

@media (max-width: 1199.98px) {
  

}


@media (max-width: 991px) {

    #header-topo .margem p {
        font-size: 1.4rem;
        line-height: 1.2;
    }

    #header-topo .margem label {
        /* display: initial; */
        
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        /* min-width: 30%; */
    }
    

    #header-topo .margem #navbar-principal {
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        padding: 20px !important;
        background: #fff !important;
        border-top: 1px solid rgba(0, 0, 0, .1);
        display: none; /* vai esconder o menu mobile */ 
    }

    #header-topo .margem #navbar-principal ul li {
        width: 100%;
    }

    #header-topo .margem #navbar-principal ul li ul {
        position: relative;
        width: 100%;
    }

    #header-topo .margem #navbar-principal ul li ul li {
        background: #eee;
    }

    #header-topo .margem #navbar-principal ul li ul li ul {
        width: 100%;
        left: 0;
    }

    #menu-bar:checked ~ #navbar-principal {
        display: initial;
    }

} 


@media (max-width: 768px) {

    #topo .margem .redes-sociais i {
        margin: 4px 5px;
        font-size: 1.06rem;
    }

    #topo .margem .pesquisa {
        width: 84%;
    }


    #header-topo .margem .logo-menu {
        height: 74px;
    }
    
    #header-topo .margem .logo-menu a {
        height: 74px;
    }
    
    #header-topo .margem .logo-menu img {
        height: 74px;
    }

}


</style>

<script>
import CategoryScroll from './CategoryScroll.vue';

export default {
    name: 'HeaderCOmponent',
    components: {
        CategoryScroll
    }
}
</script>