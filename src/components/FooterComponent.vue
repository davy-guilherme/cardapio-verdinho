<template>
    <footer class="margem">
        <div class="esquerda">
            <strong>&copy; 2023</strong>
            <a href="/">Verdinho Vegano</a>
        </div>
        <div class="direita">
            <small>Desenvolvido por</small>
            <strong><a href="http://www.dguilherme.dev">Davy Guilherme</a></strong>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
/* Footer */

footer {
    margin-top: 32px;
    font-size: .875rem;
    // padding: 2rem 0;
    border-top: 1px solid #eceeef;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}

footer div strong {
    display: block;
}

footer div p {
    display: block;
}

footer div small {
    display: inline;
}

footer .esquerda strong {
    color: #333;
}

footer .esquerda a {
    text-decoration: none;
    color: #8cc740;
}

footer .direita {
    text-align: right;
}

footer .direita a {
    text-decoration: none;
    color: #000;
}
</style>

<script>
export default {
    name: 'FooterComponent',
}
</script>