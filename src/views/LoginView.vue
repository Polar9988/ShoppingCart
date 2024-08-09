<script>
import { RouterLink, RouterView } from 'vue-router'
import backgroundPic from '@/assets/img/大圖.jpg'

export default {
    data() {
        return {
            backgroundpicStyle: {
                backgroundImage: `url(${backgroundPic})`,
                backgroundSize: 'cover'
            }
        }
    }
}


</script>
<template>
    <div class="container-full w-100">

        <div class="row h-100 mx-0 login-picture" :style="backgroundpicStyle">
            <div class="col-6 h-100"></div>
            <div class="col-6 h-100 bg-light right">
            </div>

        </div>
    </div>
    <section class="container-xxl py-lg-5 py-2 px-xxl-5 row login">
        <main class="form-signin m-auto row p-4 align-items-center rounded-3 border shadow-lg col bg-light">
            <form action="./購物車第1頁1920.html">
                <img class="mb-4" src="@/assets/img/餃子精靈.jpg" alt="" width="72" height="57">
                <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

                <div class="form-floating mb-3">
                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" required>
                    <label for="floatingInput">Email address</label>
                </div>
                <div class="form-floating">
                    <input type="password" class="form-control" id="floatingPassword" placeholder="Password" required>
                    <label for="floatingPassword">Password</label>
                </div>

                <div class="form-check text-start my-3">
                    <input class="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault">
                    <label class="form-check-label" for="flexCheckDefault">
                        Remember me
                    </label>
                </div>
                <button class="btn btn-primary w-100 py-2" type="submit">Sign in</button>
                <p class="mt-5 mb-3 text-body-secondary">&copy; 2017–2024</p>
            </form>
        </main>
    </section>
    <footer class="my-footer py-5"
        style="background:linear-gradient(to right, #e4afcb 0%, #b8cbb8 0%, #b8cbb8 0%, #e2c58b 30%, #c2ce9c 64%, #7edbdc 100%);">
        <div class="container-xxl">
            <div class="row">
                <div class="col-sm-12 col-md-12 col-lg-4 mb-3">
                    <div class="text-center">
                        <img src="@/assets/img/皮皮挫.jpg" alt="" width="100" height="152" class="rounded">
                        <h5>皮皮挫!!!</h5>
                    </div>

                </div>
                <div class="col-12 col-md-6 col-lg-2 mb-3 text-center">
                    <h5>Section</h5>
                    <ul class="nav flex-column">
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Home</a></li>
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Features</a></li>
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Pricing</a></li>
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">FAQs</a></li>
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">About</a></li>
                    </ul>
                </div>

                <div class="col-12 col-md-6 col-lg-2 mb-3 text-center">
                    <h5>Section</h5>
                    <ul class="nav flex-column">
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Home</a></li>
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Features</a></li>
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Pricing</a></li>
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">FAQs</a></li>
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">About</a></li>
                    </ul>
                </div>

                <div class="col-12 col-md-6 col-lg-2 mb-3 text-center">
                    <h5>Section</h5>
                    <ul class="nav flex-column">
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Home</a></li>
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Features</a></li>
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Pricing</a></li>
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">FAQs</a></li>
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">About</a></li>
                    </ul>
                </div>

                <div class="col-12 col-md-6 col-lg-2 mb-3 text-center">
                    <h5>Section</h5>
                    <ul class="nav flex-column">
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Home</a></li>
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Features</a></li>
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Pricing</a></li>
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">FAQs</a></li>
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">About</a></li>
                    </ul>
                </div>
            </div>

            <div class="d-flex flex-column flex-sm-row justify-content-between pt-0 py-0 my-0 border-top">
                <p>&copy; 2024 Company, Inc. All rights reserved.</p>
                <ul class="list-unstyled d-flex">
                    <li class="ms-3"><a class="link-body-emphasis" href="#"><i class="bi bi-facebook"></i></a></li>
                    <li class="ms-3"><a class="link-body-emphasis" href="#"><i class="bi bi-instagram"></i></a></li>
                    <li class="ms-3"><a class="link-body-emphasis" href="#"><i class="bi bi-twitter"></i></a></li>
                </ul>
            </div>
        </div>
        <a id="bottom"></a>
    </footer>
</template>
<style scoped>
.my-bg-gray {
    background-color: rgba(209, 213, 219, 1);
    background-color: lightgray;
}

.container-full {
    width: 100%;
    height: 100vh;


}

.login-picture {
    background-size: cover;
}

.nav-link.dropdown-toggle::after {
    display: none;
}

.nav-center {
    line-height: 3.3;
}

.login {
    position: absolute;
    left: calc(77% - 300px);
    top: 25%;
    max-width: 600px;
}
</style>