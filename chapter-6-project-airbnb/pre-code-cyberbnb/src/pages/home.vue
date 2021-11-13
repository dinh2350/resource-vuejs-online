<template>
  <!-- Wrapper -->
  <div id="wrapper">
    <!-- Banner
================================================== -->
    <div class="home-search-carousel carousel-not-ready">
      <!-- Item -->
      <div
        class="home-search-slide"
        style="background-image: url(images/home-carousel-01.jpg)"
      >
        <div class="home-search-slider-headlines">
          <div class="container">
            <div class="col-md-12">
              <h3>Find <a href="#">things you'll love</a></h3>
              <h3>Support independent sellers.</h3>
            </div>
          </div>
        </div>
      </div>

      <!-- Item -->
      <div
        class="home-search-slide"
        style="background-image: url(images/home-carousel-02.jpg)"
      >
        <div class="home-search-slider-headlines">
          <div class="container">
            <div class="col-md-12">
              <h3>Best <a href="#">Cosy Apartments</a> to Stay</h3>
            </div>
          </div>
        </div>
      </div>

      <!-- Item -->
      <div
        class="home-search-slide"
        style="background-image: url(images/home-carousel-03.jpg)"
      >
        <div class="home-search-slider-headlines">
          <div class="container">
            <div class="col-md-12">
              <h3>Scenic places to camp</h3>
              <h3>Inspire <a href="#">your next nature trip</a></h3>
            </div>
          </div>
        </div>
      </div>

      <!-- Search -->
      <div class="container search-cont">
        <div class="col-md-12">
          <div class="main-search-input">
            <div class="main-search-input-item">
              <input
                type="text"
                placeholder="What are you looking for?"
                value=""
              />
            </div>

            <div class="main-search-input-item location">
              <div id="autocomplete-container">
                <input
                  id="autocomplete-input"
                  type="text"
                  placeholder="Location"
                />
              </div>
              <a href="#"><i class="fa fa-map-marker"></i></a>
            </div>

            <div class="main-search-input-item">
              <select data-placeholder="All Categories" class="chosen-select">
                <option>All Categories</option>
                <option>Shops</option>
                <option>Hotels</option>
                <option>Restaurants</option>
                <option>Fitness</option>
                <option>Events</option>
              </select>
            </div>

            <button
              class="button"
              onclick="window.location.href='listings-half-screen-map-list.html'"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Content
================================================== -->
    <section
      class="fullwidth margin-top-0 padding-top-0 padding-bottom-70 background-gradient"
    >
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h3 class="headline centered margin-top-0">
              <strong class="headline-with-separator"
                >Popular Categories</strong
              >
            </h3>
          </div>

          <div class="col-md-12">
            <div
              class="categorxies-boxes-container-alt margin-top-5 margin-bottom-30"
            >
              <!-- Box -->
              <a
                href="listings-list-with-sidebar.html"
                class="category-small-box-alt"
              >
                <i class="im im-icon-Hamburger"></i>
                <h4>Eat & Drink</h4>
                <span class="category-box-counter-alt">12</span>
                <img src="images/category-box-01.jpg" />
              </a>

              <!-- Box -->
              <a
                href="listings-list-with-sidebar.html"
                class="category-small-box-alt"
              >
                <i class="im  im-icon-Sleeping"></i>
                <h4>Hotels</h4>
                <span class="category-box-counter-alt">32</span>
                <img src="images/category-box-02.jpg" />
              </a>

              <!-- Box -->
              <a
                href="listings-list-with-sidebar.html"
                class="category-small-box-alt"
              >
                <i class="im im-icon-Shopping-Bag"></i>
                <h4>Shops</h4>
                <span class="category-box-counter-alt">11</span>
                <img src="images/category-box-03.jpg" />
              </a>

              <!-- Box -->
              <a
                href="listings-list-with-sidebar.html"
                class="category-small-box-alt"
              >
                <i class="im im-icon-Cocktail"></i>
                <h4>Nightlife</h4>
                <span class="category-box-counter-alt">15</span>
                <img src="images/category-box-04.jpg" />
              </a>

              <!-- Box -->
              <a
                href="listings-list-with-sidebar.html"
                class="category-small-box-alt"
              >
                <i class="im im-icon-Electric-Guitar"></i>
                <h4>Events</h4>
                <span class="category-box-counter-alt">21</span>
                <img src="images/category-box-05.jpg" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Category Boxes / End -->
  </div>

  <!-- Listings -->
  <div class="container margin-top-70">
    <div class="row">
      <div class="col-md-12">
        <h3 class="headline centered margin-bottom-45">
          <strong class="headline-with-separator">Featured Listings</strong>
          <span>Discover Top-Rated Local Businesses</span>
        </h3>
      </div>

      <div class="col-md-12">
        <div class="simple-slick-carousel dots-nav">
          <!-- Listing Item -->
          <div class="carousel-item">
            <a href="listings-single-page.html" class="listing-item-container">
              <div class="listing-item">
                <img src="images/listing-item-01.jpg" alt="" />

                <div class="listing-badge now-open">Now Open</div>

                <div class="listing-item-content">
                  <span class="tag">Eat & Drink</span>
                  <h3>Tom's Restaurant</h3>
                  <span>964 School Street, New York</span>
                </div>
                <span class="like-icon"></span>
              </div>
              <div class="star-rating" data-rating="3.5">
                <div class="rating-counter">(12 reviews)</div>
              </div>
            </a>
          </div>
          <!-- Listing Item / End -->

          <!-- Listing Item -->
          <div class="carousel-item">
            <a href="listings-single-page.html" class="listing-item-container">
              <div class="listing-item">
                <img src="images/listing-item-02.jpg" alt="" />
                <div class="listing-item-details">
                  <ul>
                    <li>Friday, August 10</li>
                  </ul>
                </div>
                <div class="listing-item-content">
                  <span class="tag">Events</span>
                  <h3>Sticky Band</h3>
                  <span>Bishop Avenue, New York</span>
                </div>
                <span class="like-icon"></span>
              </div>
              <div class="star-rating" data-rating="5.0">
                <div class="rating-counter">(23 reviews)</div>
              </div>
            </a>
          </div>
          <!-- Listing Item / End -->

          <!-- Listing Item -->
          <div class="carousel-item">
            <a href="listings-single-page.html" class="listing-item-container">
              <div class="listing-item">
                <img src="images/listing-item-03.jpg" alt="" />
                <div class="listing-item-details">
                  <ul>
                    <li>Starting from $59 per night</li>
                  </ul>
                </div>
                <div class="listing-item-content">
                  <span class="tag">Hotels</span>
                  <h3>Hotel Govendor</h3>
                  <span>778 Country Street, New York</span>
                </div>
                <span class="like-icon"></span>
              </div>
              <div class="star-rating" data-rating="2.0">
                <div class="rating-counter">(17 reviews)</div>
              </div>
            </a>
          </div>
          <!-- Listing Item / End -->

          <!-- Listing Item -->
          <div class="carousel-item">
            <a href="listings-single-page.html" class="listing-item-container">
              <div class="listing-item">
                <img src="images/listing-item-04.jpg" alt="" />

                <div class="listing-badge now-open">Now Open</div>

                <div class="listing-item-content">
                  <span class="tag">Eat & Drink</span>
                  <h3>Burger House</h3>
                  <span>2726 Shinn Street, New York</span>
                </div>
                <span class="like-icon"></span>
              </div>
              <div class="star-rating" data-rating="5.0">
                <div class="rating-counter">(31 reviews)</div>
              </div>
            </a>
          </div>
          <!-- Listing Item / End -->

          <!-- Listing Item -->
          <div class="carousel-item">
            <a href="listings-single-page.html" class="listing-item-container">
              <div class="listing-item">
                <img src="images/listing-item-05.jpg" alt="" />
                <div class="listing-item-content">
                  <span class="tag">Other</span>
                  <h3>Airport</h3>
                  <span>1512 Duncan Avenue, New York</span>
                </div>
                <span class="like-icon"></span>
              </div>
              <div class="star-rating" data-rating="3.5">
                <div class="rating-counter">(46 reviews)</div>
              </div>
            </a>
          </div>
          <!-- Listing Item / End -->

          <!-- Listing Item -->
          <div class="carousel-item">
            <a href="listings-single-page.html" class="listing-item-container">
              <div class="listing-item">
                <img src="images/listing-item-06.jpg" alt="" />

                <div class="listing-badge now-closed">Now Closed</div>

                <div class="listing-item-content">
                  <span class="tag">Eat & Drink</span>
                  <h3>Think Coffee</h3>
                  <span>215 Terry Lane, New York</span>
                </div>
                <span class="like-icon"></span>
              </div>
              <div class="star-rating" data-rating="4.5">
                <div class="rating-counter">(15 reviews)</div>
              </div>
            </a>
          </div>
          <!-- Listing Item / End -->
        </div>
      </div>
    </div>
  </div>
  <!-- Listings / End -->

  <section
    class="fullwidth taxonomy-gallery-container margin-top-70 padding-top-75 padding-bottom-70"
    data-background-color="#f9f9f9"
  >
    <!-- Info Section -->
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <!-- Infobox -->
          <div class="taxonomy-gallery-text">
            <h2>
              Find Your Ultimate <br />
              Local Weekend
            </h2>
            <p>
              A curated collection of stays and experiences to inspire your next
              trip.
            </p>
            <a
              href="listings-list-with-sidebar.html"
              class="button margin-top-25"
              >Discover Places</a
            >
          </div>
          <!-- Infobox / End -->
        </div>
      </div>
    </div>
    <!-- Info Section / End -->

    <div class="gallery-wrap">
      <a href="#" class="item">
        <h3>New York <span>3 listings</span></h3>
        <img src="images/popular-location-01.jpg" alt="" />
      </a>

      <a href="#" class="item">
        <h3>Los Angeles <span>2 listings</span></h3>
        <img src="images/popular-location-02.jpg" alt="" />
      </a>

      <a href="#" class="item">
        <h3>San Francisco <span>4 listings</span></h3>
        <img src="images/popular-location-03.jpg" alt="" />
      </a>

      <a href="#" class="item">
        <h3>Miami <span>6 listings</span></h3>
        <img src="images/popular-location-04.jpg" alt="" />
      </a>
    </div>
  </section>

  <div class="container margin-top-80">
    <div class="row">
      <div class="col-md-12">
        <h3 class="headline margin-top-0 margin-bottom-40">
          <strong class="headline-with-separator">How It Works?</strong>
        </h3>
      </div>
      <div class="col-md-5">
        <a href="#" class="icon-box-v3">
          <div class="ibv3-icon">
            <i class="im im-icon-Add-User"></i>
          </div>
          <div class="ibv3-content">
            <h4>Creata an Account</h4>
            <p>
              Integer dapibus purus sit amet metus scelerisque hendrerit non a
              urna
            </p>
          </div>
        </a>
        <a href="#" class="icon-box-v3">
          <div class="ibv3-icon">
            <i class="im im-icon-Add-File"></i>
          </div>
          <div class="ibv3-content">
            <h4>Add Listings</h4>
            <p>
              Phasellus id nulla id tortor laoreet tempor et non risus class
              aptent taciti
            </p>
          </div>
        </a>
        <a href="#" class="icon-box-v3">
          <div class="ibv3-icon">
            <i class="im im-icon-Queen"></i>
          </div>
          <div class="ibv3-content">
            <h4>Get Exposure</h4>
            <p>
              Vestibulum pretium massa in bibendum nam mollis quam et feugiat
              consectetur
            </p>
          </div>
        </a>
      </div>
      <div class="col-md-7">
        <div class="svg-alignment">
          <img src="images/image_placeholder.svg" style="width: 60%;" alt="" />
        </div>
      </div>
    </div>
  </div>

  <section
    class="fullwidth border-top padding-bottom-80 padding-top-80 margin-top-80"
  >
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="boxed-photo-banner">
            <!-- Infobox -->
            <div class="boxed-photo-banner-text">
              <h2>Join Our Community</h2>
              <p>
                Earn extra income and unlock new opportunities by advertising
                your business
              </p>
              <a
                href="listings-list-with-sidebar.html"
                class="button margin-top-25"
                >Become a Host</a
              >
            </div>
            <!-- Infobox / End -->
            <img src="images/slider-bg-02.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Footer
================================================== -->
  <div id="footer" class="sticky-footer">
    <!-- Main -->
    <div class="container">
      <div class="row">
        <div class="col-md-5 col-sm-6">
          <img class="footer-logo" src="images/logo.png" alt="" />
          <br /><br />
          <p>
            Morbi convallis bibendum urna ut viverra. Maecenas quis consequat
            libero, a feugiat eros. Nunc ut lacinia tortor morbi ultricies
            laoreet ullamcorper phasellus semper.
          </p>
        </div>

        <div class="col-md-4 col-sm-6 ">
          <h4>Helpful Links</h4>
          <ul class="footer-links">
            <li><a href="#">Login</a></li>
            <li><a href="#">Sign Up</a></li>
            <li><a href="#">My Account</a></li>
            <li><a href="#">Add Listing</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>

          <ul class="footer-links">
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Our Partners</a></li>
            <li><a href="#">How It Works</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
          <div class="clearfix"></div>
        </div>

        <div class="col-md-3  col-sm-12">
          <h4>Contact Us</h4>
          <div class="text-widget">
            <span>12345 Little Lonsdale St, Melbourne</span> <br />
            Phone: <span>(123) 123-456 </span><br />
            E-Mail:<span> <a href="#">office@example.com</a> </span><br />
          </div>

          <ul class="social-icons margin-top-20">
            <li>
              <a class="facebook" href="#"><i class="icon-facebook"></i></a>
            </li>
            <li>
              <a class="twitter" href="#"><i class="icon-twitter"></i></a>
            </li>
            <li>
              <a class="gplus" href="#"><i class="icon-gplus"></i></a>
            </li>
            <li>
              <a class="vimeo" href="#"><i class="icon-vimeo"></i></a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Copyright -->
      <div class="row">
        <div class="col-md-12">
          <div class="copyrights">© 2019 Listeo. All Rights Reserved.</div>
        </div>
      </div>
    </div>
  </div>
  <!-- Footer / End -->

  <!-- Back To Top Button -->
  <div id="backtotop"><a href="#"></a></div>
</template>

<script>
export default {};
</script>

<style></style>
