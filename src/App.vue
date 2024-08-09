<script>
import { RouterLink, RouterView } from 'vue-router'


export default {
  watch: {
    $route(to) {
      document.title = to.meta.title || '空腹蟲';
    }
  }

}

</script>

<template>

  <head>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
      integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <link rel="stylesheet" href="./BS5-example2.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
  </head>
  <header>
    <nav class="navbar navbar-expand-lg "
      style="background:linear-gradient(to right, #e4afcb 0%, #b8cbb8 0%, #b8cbb8 0%, #e2c58b 30%, #c2ce9c 64%, #7edbdc 100%);">
      <div class="container-xxl">
        <router-link to="/">
          <a class="navbar-brand" href="./BS5-example2.html">
            <img src="@/assets/img/餃子精靈.jpg" alt="Logo" width="80" height="80" class="d-inline-block align-text-top">
          </a>
        </router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item m-auto">
              <a class="nav-link active nav-center" aria-current="page" href="#">
                Blog
              </a>
            </li>
            <li class="nav-item m-auto">
              <a class="nav-link active nav-center" aria-current="page" href="#">
                Portfolio
              </a>
            </li>
            <li class="nav-item m-auto">
              <a class="nav-link active nav-center" aria-current="page" href="#">
                About
              </a>
            </li>
            <li class="nav-item m-auto">
              <a class="nav-link active nav-center" aria-current="page" href="#">
                Contact
              </a>
            </li>
            <li class="nav-item m-auto">
              <RouterLink to="/cart1">
                <a class="nav-link active" aria-current="page" href="#">
                  <i class="bi bi-cart-fill" style="font-size: 35px;"></i>
                </a>
              </RouterLink>

            </li>
            <li class="nav-item dropdown text-center m-auto">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                aria-expanded="false">
                <i class="bi bi-person-circle" style="font-size: 35px;"></i>
              </a>
              <ul id="my-dropdown" class="dropdown-menu login-990">
                <li>
                  <RouterLink to="/login">
                    <div class="dropdown-item" href="#" style="background-color: transparent;">Login</div>
                  </RouterLink>
                </li>
              </ul>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped>
.my-max-h-75 {
  max-height: 75vh;
}

.my-circle {
  width: 140px;
  height: 140px;
  background-size: cover;
}

.nav-link.dropdown-toggle::after {
  display: none;
}

.nav-center {
  line-height: 3.3;
}

#my-dropdown {
  transform: translateX(-72%);
  background: radial-gradient(circle 248px at center, #16d9e3 33%, #30c7ec 77%, #46aef7 100%);
  border: solid 2px #46aef7;
}

@media (max-width:990px) {
  #my-dropdown {
    transform: translateX(0);
  }
}

.feedback {
  position: absolute;
  right: 5%;
  top: 15%;
}

@media(max-width:400px) {
  .feedback {
    position: absolute;
    right: 1%;
  }
}

@media(max-width:990px) {
  .ratio-16x9 {
    --bs-aspect-ratio: 150%;
  }
}

iframe {
  border: 0;
  filter: grayscale(1) contrast(1.2) opacity(0.7);
}
</style>
