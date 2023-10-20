<template>
    <footer class="margem">
        <div>
            <strong>&copy; 2023</strong>
            <a href="/">Verdinho Vegano</a>
        </div>
        <div>
            <small>Desenvolvido por</small>
            <stron><a href="http://www.dguilherme.dev"></a>Davy Guilherme</stron>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
/* Footer */

footer {
    margin-top: 32px;
    font-size: .875rem;
    padding: 2rem 0;
    border-top: 1px solid #eceeef;
}

footer strong {
    display: block;
}

footer p {
    display: block;
}
</style>

<script>
export default {
    name: 'FooterComponent',
}
</script>