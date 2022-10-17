export function insertFooter() {
    const rodape =(
`<footer class="text-center text-white">
    <!-- Grid container -->
    <div class="container pt-4">
        <!-- Section: Social media -->
        <section class="mb-4">
        <!-- Facebook -->
        <a
            class="btn btn-link btn-floating btn-lg text-dark m-1"
            href="https://www.facebook.com/skoobnews"
            role="button"
            data-mdb-ripple-color="dark"
            ><i class="fab fa-facebook-f"></i
        ></a>

        <!-- Twitter -->
        <a
            class="btn btn-link btn-floating btn-lg text-dark m-1"
            href="https://twitter.com/skoobnews"
            role="button"
            data-mdb-ripple-color="dark"
            ><i class="fab fa-twitter"></i
        ></a>

        <!-- Instagram -->
        <a
            class="btn btn-link btn-floating btn-lg text-dark m-1"
            href="https://www.instagram.com"
            role="button"
            data-mdb-ripple-color="dark"
            ><i class="fab fa-instagram"></i
        ></a>
        <!-- Github -->
        <a  
            class="btn btn-link btn-floating btn-lg text-dark m-1"
            href="https://github.com/HanielCostaDaSilva/MinhaEstante"
            role="button"
            data-mdb-ripple-color="dark"><i class="fab fa-github"></i></a>
        </section>
        <!-- Section: Social media -->
    </div>
    <!-- Grid container -->

    <!-- Copyright -->
    <div class="text-center text-dark p-3" style="background-color: rgba(0, 0, 0, 0.2);">
        © 2022 Copyright:
        <a class="text-dark" href="https://mdbootstrap.com/">Minha Estante</a>
    </div>
    </footer>
    <!-- Copyright -->`)
    const FinalPage = document.querySelector('main')
    FinalPage.insertAdjacentHTML('afterend',rodape)
}
