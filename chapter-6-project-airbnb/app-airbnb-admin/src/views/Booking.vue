<template>
  <!-- Content
	================================================== -->
  <div class="dashboard-content">
    <!-- Titlebar -->
    <div id="titlebar">
      <div class="row">
        <div class="col-md-12">
          <h2>Bookings</h2>
          <!-- Breadcrumbs -->
          <nav id="breadcrumbs">
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Dashboard</a></li>
              <li>Bookings</li>
            </ul>
          </nav>
        </div>
      </div>
    </div>

    <div class="row">
      <!-- Listings -->
      <div class="col-lg-12 col-md-12">
        <div class="dashboard-list-box margin-top-0">
          <!-- Booking Requests Filters  -->
          <div class="booking-requests-filter">
            <!-- Sort by -->
            <div class="sort-by">
              <div class="sort-by-select">
                <select
                  data-placeholder="Default order"
                  class="chosen-select-no-single"
                >
                  <option>All Listings</option>
                  <option>Burger House</option>
                  <option>Tom's Restaurant</option>
                  <option>Hotel Govendor</option>
                </select>
              </div>
            </div>

            <!-- Date Range -->
            <div id="booking-date-range">
              <span></span>
            </div>
          </div>

          <!-- Reply to review popup -->
          <div id="small-dialog" class="zoom-anim-dialog mfp-hide">
            <div class="small-dialog-header">
              <h3>Send Message</h3>
            </div>
            <div class="message-reply margin-top-0">
              <textarea
                cols="40"
                rows="3"
                placeholder="Your Message to Kathy"
              ></textarea>
              <button class="button">Send</button>
            </div>
          </div>

          <h4>Booking Requests</h4>
          <ul v-if="ticketList.length > 0">
            <li
              v-for="(ticket, index) in ticketList"
              :key="index"
              class="pending-booking"
            >
              <div class="list-box-listing bookings">
                <div class="list-box-listing-img">
                  <img :src="ticket?.userId?.avatar" alt="" />
                </div>
                <div class="list-box-listing-content">
                  <div class="inner">
                    <h3>
                      {{ ticket?.roomId?.name }}
                      <span class="booking-status pending">Pending</span
                      ><span class="booking-status unpaid">Unpaid</span>
                    </h3>

                    <div class="inner-booking-list">
                      <h5>Booking Date:</h5>
                      <ul class="booking-list">
                        <li class="highlighted">
                          {{ ticket.checkIn }} - {{ ticket.checkOut }}
                        </li>
                      </ul>
                    </div>

                    <div class="inner-booking-list">
                      <h5>Booking Details:</h5>
                      <ul class="booking-list">
                        <li class="highlighted">2 Adults</li>
                      </ul>
                    </div>

                    <div class="inner-booking-list">
                      <h5>Price:</h5>
                      <ul class="booking-list">
                        <li class="highlighted">$147</li>
                      </ul>
                    </div>

                    <div class="inner-booking-list">
                      <h5>Client:</h5>
                      <ul class="booking-list">
                        <li>John Smith</li>
                        <li>john@example.com</li>
                        <li>123-456-789</li>
                      </ul>
                    </div>

                    <a
                      href="#small-dialog"
                      class="rate-review popup-with-zoom-anim"
                      ><i class="sl sl-icon-envelope-open"></i> Send Message</a
                    >
                  </div>
                </div>
              </div>
              <div class="buttons-to-right">
                <a href="#" class="button gray reject"
                  ><i class="sl sl-icon-close"></i> Reject</a
                >
                <a href="#" class="button gray approve"
                  ><i class="sl sl-icon-check"></i> Approve</a
                >
              </div>
            </li>
          </ul>
        </div>
      </div>

      <!-- Copyrights -->
      <div class="col-md-12">
        <div class="copyrights">© 2021 Listeo. All Rights Reserved.</div>
      </div>
    </div>
  </div>
  <!-- Content / End -->
</template>

<script>
import { computed } from "@vue/reactivity";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    store.dispatch("ticket/getAllTicketAction");
    const ticketList = computed(() => store.state.ticket.ticketList);
    return {
      ticketList,
    };
  },
};
</script>

<style></style>
