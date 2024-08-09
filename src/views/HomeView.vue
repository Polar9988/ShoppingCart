<script setup>
import { RouterLink, RouterView } from 'vue-router'

import catImage from '@/assets/img/貓罐子.jfif'

const circleStyle = {
  width: '140px',
  height: '140px',
  backgroundImage: `url(${catImage})`,
  backgroundSize: 'cover'
};

</script>

<template>

  <body>

    <!-- </div> -->
    <header class="mb-5">
      <div id="carouselExampleCaptions" class="carousel slide">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
            aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
            aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
            aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="@/assets/img/大圖.jpg" class="d-block w-100 my-max-h-75" alt="...">
            <div class="carousel-caption d-none d-md-block text-start">
              <h1>First slide label</h1>
              <p>Some representative placeholder content for the first slide.</p>
              <button type="button" class="btn btn-primary btn-lg">Sign up today</button>
            </div>
          </div>
          <div class="carousel-item">
            <img src="@/assets/img/異獸眼睛.jpg" class="d-block w-100 my-max-h-75" alt="...">
            <div class="carousel-caption d-none d-md-block">
              <h1>Second slide label</h1>
              <p>Some representative placeholder content for the second slide.</p>
              <button type="button" class="btn btn-primary btn-lg">Sign up today</button>
            </div>
          </div>
          <div class="carousel-item">
            <img src="@/assets/img/Dai Dark Cover.jpg" class="d-block w-100 my-max-h-75" alt="...">
            <div class="carousel-caption d-none d-md-block text-end">
              <h1>Third slide label</h1>
              <p>Some representative placeholder content for the third slide.</p>
              <button type="button" class="btn btn-primary btn-lg">Sign up today</button>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </header>

    <main>

    </main>
    <main class="container py-5">
      <div class="container">
        <h3 class="text-center">Raw Denim Heirloom Man Braid</h3>
        <div class="px-5">
          <div class="px-5">
            <p class="text-center">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub
              indxgo juice poutine, ramps microdosing banh mi pug.</p>
          </div>
          <br>
        </div>
      </div>
      <section class="row">
        <div class="col-12 col-lg-4 px-3 py-5 text-center">
          <div class="mx-auto my-circle rounded-circle bg-secondary" :style="circleStyle"></div>
          <h2 class="">Heading</h2>
          <h5 class="">
            Some representative placeholder content for the three columns of text below the carousel. This is the first
            column.
          </h5>
          <button type="button" class="btn btn-secondary">View details »</button>
        </div>
        <div class="col-12 col-lg-4 px-3 py-5 text-center">
          <div class="mx-auto my-circle rounded-circle bg-secondary" :style="circleStyle"></div>
          <h2 class="">Heading</h2>
          <h5 class="">
            Some representative placeholder content for the three columns of text below the carousel. This is the first
            column.
          </h5>
          <button type="button" class="btn btn-secondary">View details »</button>
        </div>
        <div class="col-12 col-lg-4 px-3 py-5 text-center">
          <div class="mx-auto my-circle rounded-circle bg-secondary" :style="circleStyle"></div>
          <h2 class="">Heading</h2>
          <h5 class="">
            Some representative placeholder content for the three columns of text below the carousel. This is the first
            column.
          </h5>
          <button type="button" class="btn btn-secondary">View details »</button>
        </div>
      </section>
      <div class="woodear"></div>
      <br>
      <br>
      <div class="d-flex justify-content-center">
        <button type="button" class="btn btn-primary btn-lg">Button</button>
      </div>

      <br>
      <br>
      <br>
      <br>
      <section class="row">
        <div class="col-4">
          <h1>Master Cleanse Reliac Heirloom.</h1>
        </div>
        <div class="col-8">
          <h4>
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table.
            Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom.
          </h4>
        </div>
      </section>
      <section>
        <div class="container mt-5">
          <div class="row">
            <div class="col-6">
              <div class="row">
                <div class="col p-1" data-aos="fade-down" data-aos-duration="3000">
                  <img class="w-100 img-fluid" src="@/assets/img/空腹蟲門口.jfif" alt="Placeholder Image">
                </div>
                <div class="col p-1 w-100 img-fluid" data-aos="fade-down" data-aos-duration="3000">
                  <img class="w-100" src="@/assets/img/空腹蟲門口.jfif" alt="Placeholder Image">
                </div>
              </div>
              <div class="row">
                <div class="col p-1 w-100" data-aos="fade-up" data-aos-duration="3000">
                  <img class="w-100" src="@/assets/img/魔都大頭貼.jfif" alt="Placeholder Image">
                </div>
              </div>
            </div>
            <div class="col-6">
              <div class="row">
                <div class="col p-1 w-100" data-aos="fade-down" data-aos-duration="3000">
                  <img class="w-100" src="@/assets/img/魔都大頭貼.jfif" alt="Placeholder Image">
                </div>
              </div>
              <div class="row">
                <div class="col p-1" data-aos="fade-up" data-aos-duration="3000">
                  <img class="w-100" src="@/assets/img/空腹蟲門口.jfif" alt="Placeholder Image">
                </div>
                <div class="col p-1 w-100" data-aos="fade-up" data-aos-duration="3000">
                  <img class="w-100" src="@/assets/img/空腹蟲門口.jfif" alt="Placeholder Image">
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <section>
        <div class="container">
          <h3 class="text-center">Pricing</h3>
          <div class="px-5">
            <br>
            <div class="px-5">
              <p class="text-center">Banh mi cornhole echo park skateboard authentic crucifix neutra tilde lyft
                biodiesel
                artisan direct trade mumblecore 3 wolf moon twee.</p>
            </div>
            <br>
          </div>
        </div>
      </section>
      <section class="px-lg-5 px-0">
        <table class="table caption-top px-5">
          <!-- <caption>List of users</caption> -->
          <thead class="table-secondary">
            <tr class="text-center ">
              <th scope="col">Plan</th>
              <th scope="col">Speed</th>
              <th scope="col">Storage</th>
              <th scope="col">Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr class="text-center">
              <td scope="row">Start</td>
              <td>5 Mb/s</td>
              <td>15 GB</td>
              <td>Free</td>
              <td>
                <input class="form-check-input me-1 border-3" type="radio" name="listGroupRadio" value=""
                  id="firstRadio" checked>
                <!-- <label class="form-check-label" for="firstRadio"></label> -->
              </td>
            </tr>
            <tr class="text-center">
              <td scope="row">Pro</td>
              <td>25 Mb/s</td>
              <td>20 GB</td>
              <td>$24</td>
              <td>
                <input class="form-check-input me-1 border-3" type="radio" name="listGroupRadio" value=""
                  id="secondRadio">
                <!-- <label class="form-check-label" for="secondRadio">Second radio</label> -->
              </td>
            </tr>
            <tr class="text-center">
              <td scope="row">Busniess</td>
              <td>36 Mb/s</td>
              <td>40 GB</td>
              <td>$50</td>
              <td>
                <input class="form-check-input me-1 border-3" type="radio" name="listGroupRadio" value=""
                  id="thirdRadio">
                <!-- <label class="form-check-label" for="thirdRadio">Third radio</label> -->
              </td>
            </tr>
            <tr class="text-center">
              <td scope="row">Exclusive</td>
              <td>48 Mb/s</td>
              <td>120 GB</td>
              <td>$72</td>
              <td>
                <input class="form-check-input me-1 border-3" type="radio" name="listGroupRadio" value=""
                  id="firstRadio" checked>
                <!-- <label class="form-check-label" for="firstRadio">First radio</label> -->
              </td>
            </tr>
          </tbody>
        </table>
      </section>
      <section class="px-lg-5 px-0 d-flex justify-content-between flex-wrap">
        <button type="button" class="btn btn-light btn-outline-primary">Learn-more →</button>
        <button type="button" class="btn btn-primary">Button</button>
      </section>
      <br>
      <br>
      <section class="row px-lg-5 px-0 py-5">
        <div class="col-6">
          <h1>Pitchfork Kickstarter Taxidermy</h1>
        </div>
        <div class="col-6">
          <p>
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table.
            Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid
            celiac humblebrag.
          </p>
        </div>
      </section>
      <section class="px-2 px-lg-5">
        <div class="px-lg-5 px-0">
          <div class="">
            <div class="row g-4">
              <div class="col-lg-3 col-12">
                <div class="col p-2 bg-secondary-subtle" data-aos="flip-left" data-aos-easing="ease-out-cubic"
                  data-aos-duration="2000" data-aos-delay="500">
                  <div class="card h-100 border border-0 bg-secondary-subtle">
                    <img src="@/assets/img/木耳.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">Card title</h5>
                      <p class="card-text">This is a longer card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-12">
                <div class="col p-2 bg-secondary-subtle" data-aos="flip-left" data-aos-easing="ease-out-cubic"
                  data-aos-duration="2000" data-aos-delay="1000">
                  <div class="card h-100 border border-0 bg-secondary-subtle">
                    <img src="@/assets/img/木耳.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">Card title</h5>
                      <p class="card-text">This is a longer card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-12">
                <div class="col p-2 bg-secondary-subtle" data-aos="flip-left" data-aos-easing="ease-out-cubic"
                  data-aos-duration="2000" data-aos-delay="1500">
                  <div class="card h-100 border border-0 bg-secondary-subtle">
                    <img src="@/assets/img/木耳.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">Card title</h5>
                      <p class="card-text">This is a longer card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-12">
                <div class="col p-2 bg-secondary-subtle" data-aos="flip-left" data-aos-easing="ease-out-cubic"
                  data-aos-duration="2000" data-aos-delay="2000">
                  <div class="card h-100 border border-0 bg-secondary-subtle">
                    <img src="@/assets/img/木耳.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">Card title</h5>
                      <p class="card-text">This is a longer card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br>
      <br>
      <br>
      <section class="px-5">
        <section class="row py-5 px-5 d-flex justify-content-center">
          <div class="col-md-7 d-flex flex-wrap flex-column justify-content-center mb-3 mb-md-0">
            <h4 class="lh-1 py-3">Shooting Stars</h4>
            <div class="fs-5 ">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub
              indxgo
              juice poutine.
            </div>
            <div class="py-3">
              <button type="button" class="btn btn-light btn-outline-primary">Learn more →</button>
            </div>
          </div>
          <div class="col-md-3 d-flex justify-content-center">
            <div class="mx-auto my-circle rounded-circle bg-secondary" :style="circleStyle"></div>
          </div>
        </section>
        <hr>
        <section class="row py-5 px-5 d-flex justify-content-center">
          <div class="col-md-7 d-flex flex-wrap flex-column justify-content-center mb-3 mb-md-0 order-md-2">
            <h4 class="lh-1 py-3">The Catalyzer</h4>
            <h4 class="lh-1">Shooting Stars</h4>
            <div class="fs-5 ">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub
              indxgo
              juice poutine.
            </div>
            <div class="py-3">
              <button type="button" class="btn btn-light btn-outline-primary">Learn more →</button>
            </div>
          </div>
          <div class="col-md-3 order-md-1">
            <div class="mx-auto my-circle rounded-circle bg-secondary" :style="circleStyle"></div>
          </div>
        </section>
        <hr>
        <section class="row py-5 px-5 d-flex justify-content-center">
          <div class="col-md-7 d-flex flex-wrap flex-column justify-content-center mb-3 mb-md-0">
            <h4 class="lh-1 py-3">The Catalyzer</h4>
            <h4 class="lh-1">Shooting Stars</h4>
            <div class="fs-5 ">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub
              indxgo
              juice poutine.
            </div>
            <div class="py-3">
              <button type="button" class="btn btn-light btn-outline-primary">Learn more →</button>
            </div>
          </div>
          <div class="col-md-3">
            <div class="mx-auto my-circle rounded-circle bg-secondary" :style="circleStyle"></div>
          </div>
        </section>
      </section>
      <div class="d-flex justify-content-center">
        <button type="button" class="btn btn-primary btn-lg">Button</button>
      </div>
      <br>
      <br>
      <br>
      <br>
      <section class="px-lg-5 px-1 py-5">
        <div class="row px-lg-5 px-0">
          <div class="col-lg-6 col-12">
            <img class="w-100" src="@/assets/img/菸老大.jfif" alt="">
          </div>
          <div class="col-12 pb-2 col-lg-6">
            <p class="lh-1 py-1 text-secondary">Brand Name</p>
            <h4 class="lh-1">The Catcher in the Rye</h4>
            <div class="d-flex">
              <h5 class="text-primary pt-1"><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i
                  class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star"></i></h5>
              &nbsp;&nbsp;
              <h4 class="text-secondary">4 Reviews</h4>
              &nbsp;&nbsp;
              <h4 class="text-body-tertiary">|</h4>
              <h4 class="text-secondary">&nbsp;&nbsp;<i class="bi bi-facebook"></i> <i class="bi bi-twitter"></i> <i
                  class="bi bi-chat-fill"></i></h4>
            </div>

            <p class="py-2">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia
              microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1
              seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo
              tattooed umami cardigan.
            </p>
            <div class="d-flex">
              <p class="text-secondary pe-3">Color</p>
              <div class="rounded-circle"
                style="width: 20px; height: 20px; background-color: aqua; border: black 2px solid;"></div>&nbsp;
              <div class="rounded-circle"
                style="width: 20px; height: 20px; background-color: rgb(33, 15, 199); border: black 2px solid;"></div>
              &nbsp;
              <div class="rounded-circle"
                style="width: 20px; height: 20px; background-color: rgb(181, 9, 255); border: black 2px solid;"></div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <p class="text-secondary pe-3">Size</p>
              <div>
                <select class="form-select w-100" aria-label="Default select example">
                  <option selected>SM</option>
                  <option value="1">M</option>
                  <option value="2">L</option>
                  <option value="3">XL</option>
                </select>
              </div>
            </div>
            <hr>
            <div class="pt-1 d-flex justify-content-between">
              <h2>$58.00</h2>
              <div class="d-flex">
                <button type="button" class="btn btn-primary btn-lg">Button</button>
                <div>
                  <h4 class="pt-2 px-1"><i class="bi bi-heart-fill"></i></h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="py-5 px-5">
        <div class="row g-5">
          <div class="col-lg-3 col-12">
            <div class="card h-100 border-0">
              <img src="@/assets/img/能井心博士.jfif" class="card-img-top" alt="...">
              <div class="card-body">
                <p class="text-secondary">CATEGORY</p>
                <h5 class="">The Catalyzer</h5>
                <h5 class="card-text">$16.00</h5>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-12">
            <div class="card h-100 border-0">
              <img src="@/assets/img/能井心博士.jfif" class="card-img-top" alt="...">
              <div class="card-body">
                <p class="text-secondary">CATEGORY</p>
                <h5 class="">The Catalyzer</h5>
                <h5 class="card-text">$16.00</h5>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-12">
            <div class="card h-100 border-0">
              <img src="@/assets/img/能井心博士.jfif" class="card-img-top" alt="...">
              <div class="card-body">
                <p class="text-secondary">CATEGORY</p>
                <h5 class="">The Catalyzer</h5>
                <h5 class="card-text">$16.00</h5>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-12">
            <div class="card h-100 border-0">
              <img src="@/assets/img/能井心博士.jfif" class="card-img-top" alt="...">
              <div class="card-body">
                <p class="text-secondary">CATEGORY</p>
                <h5 class="">The Catalyzer</h5>
                <h5 class="card-text">$16.00</h5>
              </div>
            </div>
          </div>
        </div>
        <div class="row g-5">
          <div class="col-lg-3 col-12">
            <div class="card h-100 border-0">
              <img src="@/assets/img/好多木耳.jpg" class="card-img-top" alt="...">
              <div class="card-body">
                <p class="text-secondary">CATEGORY</p>
                <h5 class="">The Catalyzer</h5>
                <h5 class="card-text">$16.00</h5>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-12">
            <div class="card h-100 border-0">
              <img src="@/assets/img/好多木耳.jpg" class="card-img-top" alt="...">
              <div class="card-body">
                <p class="text-secondary">CATEGORY</p>
                <h5 class="">The Catalyzer</h5>
                <h5 class="card-text">$16.00</h5>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-12">
            <div class="card h-100 border-0">
              <img src="@/assets/img/好多木耳.jpg" class="card-img-top" alt="...">
              <div class="card-body">
                <p class="text-secondary">CATEGORY</p>
                <h5 class="">The Catalyzer</h5>
                <h5 class="card-text">$16.00</h5>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-12">
            <div class="card h-100 border-0">
              <img src="@/assets/img/好多木耳.jpg" class="card-img-top h-100" alt="...">
              <div class="card-body">
                <p class="text-secondary">CATEGORY</p>
                <h5 class="">The Catalyzer</h5>
                <h5 class="card-text">$16.00</h5>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    <section>
      <div class="position-relative">
        <div class="ratio ratio-16x9">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d911.5581330539763!2d120.69304851091526!3d23.95221613400721!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346931236b3ded47%3A0x88450d413700c4eb!2z5ZyL56uL5Lit6IiI5aSn5a245a2455Sf5a6_6IiNIOadvuWckjLppKg!5e0!3m2!1szh-TW!2stw!4v1721265712918!5m2!1szh-TW!2stw"
            width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div class="feedback">
          <form class="w-100">
            <div class="modal-content rounded-4 shadow-lg p-4"
              style="width: 350px; height: 440px; background-color: #fff;">
              <div class="modal-header border-bottom-0">
                <h1 class="modal-title fs-5 py-1">Feedback</h1>
                <!-- <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> -->
              </div>
              <div class="py-0">
                <p>我有話想說</p>
              </div>
              <div class="mb-1">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required>
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
              </div>
              <div class="pb-2">
                <!-- <span class="input-group-text">With textarea</span> -->
                <label for="exampleInputEmail1" class="form-label">Message</label>
                <textarea class="form-control" aria-label="With textarea"></textarea>
              </div>
              <div class="modal-footer flex-column align-items-stretch w-100 gap-2 pb-3 border-top-0">
                <button type="submit" class="btn btn-primary">Submit</button>
              </div>
              <div>
                <p>Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
              </div>
            </div>
          </form>

        </div>
      </div>



    </section>

    <footer class="my-footer pt-4 pb-0"
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


  </body>
</template>

<style scoped>
body {
  position: relative;
}

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

.woodear {
  position: absolute;
  width: 50px;
  height: 50px;
  background-size: cover;
  clip-path: polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%);
  top: 50%;
  z-index: 2;
  left: 0%;
}
</style>
