<script>
import { RouterLink, } from 'vue-router'
export default {
    data() {
        return {
            shoppingList: [],

        };
    },
    created() {
        this.loadLocalStorage();
    },
    methods: {
        loadLocalStorage() {
            try {
                const storedList = localStorage.getItem('shoppingList');
                this.shoppingList = storedList ? JSON.parse(storedList) : [];
            } catch (error) {
                console.error("Error loading shopping list from localStorage:", error);
                this.shoppingList = [];  // Set to empty array if there's an error
            }
        }
    }
}

</script>

<template>
    <main class="container-xxl py-lg-5 py-2 px-xxl-5">
        <div class="container my-5 my-bg-pic">
            <div class="row p-4 pe-lg-5 pt-lg-5 align-items-center rounded-3 border shadow-lg">
                <div class="col-lg-12 p-3 p-lg-12 pt-lg-12">
                    <h1 class="display-4 fw-bold lh-1 pb-5">購物車</h1>
                    <div class="col d-flex ps-2 ps-lg-5 me-0">
                        <div class="col-1"></div>
                        <div class="col-3 position-relative px-4 m-4 ms-0 me-0">
                            <div class="progress " style="height: 10px;">
                                <div class="progress-bar rounded" role="progressbar" style="width: 100%;"
                                    aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <div class="d-flex flex-column">
                                <button type="button"
                                    class="position-absolute mt-1 top-0 start-0 translate-middle btn btn-sm btn-primary rounded-pill buy-process-circle">
                                    1
                                </button>
                                <div class="my-process-text position-absolute top-0 start-0 translate-middle mt-5">確認購物車
                                </div>
                            </div>


                            <!-- <button type="button" class="position-absolute top-0 start-100 translate-middle btn btn-sm btn-primary rounded-pill" style="width: 2rem; height:2rem;">2</button> -->

                        </div>
                        <div class="col-3 position-relative px-4 m-4 ms-0 me-0">
                            <div class="progress " style="height: 10px;">
                                <div class="progress-bar rounded" role="progressbar" style="width: 100%;"
                                    aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>

                            <!-- <button type="button" class="position-absolute top-0 start-0 translate-middle btn btn-sm btn-primary rounded-pill" style="width: 2rem; height:2rem;">3</button> -->
                            <div>
                                <button type="button"
                                    class="position-absolute mt-1 top-0 start-0 translate-middle btn btn-sm btn-primary rounded-pill buy-process-circle">2</button>
                                <div class="my-process-text position-absolute top-0 start-0 translate-middle mt-5">
                                    付款與運送方式</div>
                            </div>

                        </div>

                        <div class="col-3 position-relative px-4 m-4 ms-0 me-0">
                            <div class="progress " style="height: 10px;">
                                <div class="progress-bar rounded" role="progressbar" style="width: 45%;"
                                    aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>

                            <!-- <button type="button" class="position-absolute top-0 start-0 translate-middle btn btn-sm btn-primary rounded-pill" style="width: 2rem; height:2rem;">3</button> -->
                            <div>
                                <button type="button"
                                    class="position-absolute mt-1 top-0 start-0 translate-middle btn btn-sm btn-primary rounded-pill buy-process-circle">3</button>
                                <div class="my-process-text position-absolute mt-1 top-0 start-0 translate-middle mt-5">
                                    填寫資料</div>
                            </div>
                        </div>
                        <div class="col position-relative px-4 m-4 ms-0 me-0">
                            <div class="progress px-4 my-noshow" style="height: 5px;">
                                <div class="progress-bar rounded " role="progressbar" style="width: 0%;"
                                    aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>

                            <!-- <button type="button" class="position-absolute top-0 start-0 translate-middle btn btn-sm btn-primary rounded-pill" style="width: 2rem; height:2rem;">3</button> -->
                            <div class="d-flex flex-column">
                                <button type="button"
                                    class="position-absolute mt-1 top-0 start-0 translate-middle btn btn-sm btn-secondary rounded-pill buy-process-circle">4</button>
                                <div class="my-process-text position-absolute top-0 start-0 translate-middle mt-5">完成訂購
                                </div>
                            </div>

                        </div>
                        <div class="col-1"></div>
                    </div>
                    <br>
                    <hr>
                    <p class="h3 lh-1 pb-2 text-secondary">寄送資料</p>
                    <br>
                    <div>
                        <div class="row py-3 justify-content-between ps-0">
                            <div class="h4">
                                <div for="name" class="py-4">姓名</div>

                                <label class="row px-3">
                                    <input type="text" id="name" placeholder="&nbsp;&nbsp;王小明">
                                </label>

                                <div class="py-4">手機號碼</div>

                                <label for="tel" class="row px-3">
                                    <input type="tel" id="tel" placeholder="&nbsp;&nbsp;0912345678">
                                </label>

                                <div class="py-4">電子郵件</div>

                                <label for="email" class="row px-3">
                                    <input type="email" id="email" placeholder="&nbsp;&nbsp;aabbcc@gmail.com">
                                </label>

                                <div class="py-4">地址</div>

                                <div class="row px-3">
                                    <div class="col d-flex px-0 py-2">
                                        <label class="col-6 pe-1">

                                            <input type="address" id="addressCity" placeholder="&nbsp;&nbsp;城市"
                                                style="width: 100%; padding-left:12px;">

                                        </label>
                                        <label class="col-6 ps-1">
                                            <input type="address" id="addressPost" placeholder="&nbsp;&nbsp;郵遞區號"
                                                style="width: 100%;padding-left:12px;">
                                        </label>

                                    </div>
                                    <label for="addressLocation" class="row px-0 ms-0">
                                        <input type="address" id="addressLocation" placeholder="&nbsp;&nbsp;地址">
                                    </label>

                                </div>



                            </div>


                        </div>
                        <hr>



                    </div>
                    <div class="row py-3 justify-content-between">
                        <div class="col d-flex">
                            <div class="col-6"></div>
                            <div class="col-3 col-lg-3 align-items-center d-flex justify-content-center">
                                <div class="">
                                    <p class="mb-0">數量：</p>
                                    <p class="mb-0">小記：</p>
                                    <p class="mb-0">運費：</p>
                                    <p class="mb-0">總計：</p>
                                </div>

                            </div>
                            <div class="col-3 col-lg-3 align-items-center d-flex text-center justify-content-center">
                                <div class="">
                                    <p class="mb-0">{{ shoppingList[0].quantity }} + {{ shoppingList[1].quantity
                                        }} + {{ shoppingList[2].quantity }} = {{ shoppingList[0].quantity +
                                            shoppingList[1].quantity + shoppingList[2].quantity }}</p>
                                    <p class="mb-0">$ {{ shoppingList[0].price * shoppingList[0].quantity +
                                        shoppingList[1].price * shoppingList[1].quantity + shoppingList[2].price
                                        * shoppingList[2].quantity }}</p>
                                    <p class="mb-0">$ 120</p>
                                    <p class="mb-0">$ {{ shoppingList[0].price * shoppingList[0].quantity +
                                        shoppingList[1].price * shoppingList[1].quantity + shoppingList[2].price
                                        * shoppingList[2].quantity + 120 }}</p>
                                </div>

                            </div>
                        </div>

                    </div>
                    <hr>

                    <div class="d-grid gap-2 d-flex justify-content-between mb-4 mb-lg-3 pe-lg-5">

                        <router-link to="/cart2">
                            <button type="button" class="btn btn-outline-secondary btn-lg px-4">
                                <i class="bi bi-arrow-left"></i>上一步
                            </button>
                        </router-link>

                        <router-link to="/cart4">
                            <button type="button" class="btn btn-primary btn-lg px-4 me-md-0 fw-bold">前往付款
                            </button>
                        </router-link>
                    </div>
                </div>

            </div>

        </div>

    </main>
    <footer class="my-footer py-5 pb-3"
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

<style></style>