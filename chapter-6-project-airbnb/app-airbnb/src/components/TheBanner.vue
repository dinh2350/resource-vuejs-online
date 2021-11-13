<template>
  <!-- Banner
================================================== -->
  <div
    class="main-search-container centered"
    data-background-image="images/main-search-background-01.jpg"
  >
    <div class="main-search-inner">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h2>
              Find Nearby
              <!-- Typed words can be configured in script settings at the bottom of this HTML file -->
              <span class="typed-words"></span>
            </h2>
            <h4>Expolore top-rated attractions, activities and more</h4>

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

        <!-- Features Categories -->
        <div class="row">
          <div class="col-md-12">
            <h5 class="highlighted-categories-headline">
              Or browse featured categories:
            </h5>

            <div class="highlighted-categories">
              <!-- Box -->
              <a
                href="listings-list-with-sidebar.html"
                class="highlighted-category"
              >
                <i class="im im-icon-Home"></i>
                <h4>Apartments</h4>
              </a>

              <!-- Box -->
              <a
                href="listings-list-full-width.html"
                class="highlighted-category"
              >
                <i class="im im-icon-Hamburger"></i>
                <h4>Eat &amp; Drink</h4>
              </a>

              <!-- Box -->
              <a
                href="listings-half-screen-map-list.html"
                class="highlighted-category"
              >
                <i class="im im-icon-Electric-Guitar"></i>
                <h4>Events</h4>
              </a>

              <!-- Box -->
              <a
                href="listings-half-screen-map-list.html"
                class="highlighted-category"
              >
                <i class="im im-icon-Dumbbell"></i>
                <h4>Fitness</h4>
              </a>
            </div>
          </div>
        </div>
        <!-- Featured Categories - End -->
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
