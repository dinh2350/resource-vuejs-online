<template>
  <!-- Verified Badge -->
  <div
    class="verified-badge with-tip"
    data-tip-content="Account has been verified and belongs to the person or organization represented."
  >
    <i class="sl sl-icon-user-following"></i> Verified Account
  </div>

  <!-- Contact -->
  <div class="boxed-widget margin-top-30 margin-bottom-50">
    <h3>Contact</h3>
    <ul class="listing-details-sidebar">
      <li><i class="sl sl-icon-phone"></i> (123) 123-456</li>
      <li><i class="fa fa-envelope-o"></i> <a href="#">tom@example.com</a></li>
    </ul>

    <ul class="listing-details-sidebar social-profiles">
      <li>
        <a href="#" class="facebook-profile"
          ><i class="fa fa-facebook-square"></i> Facebook</a
        >
      </li>
      <li>
        <a href="#" class="twitter-profile"
          ><i class="fa fa-twitter"></i> Twitter</a
        >
      </li>
      <!-- <li><a href="#" class="gplus-profile"><i class="fa fa-google-plus"></i> Google Plus</a></li> -->
    </ul>

    <!-- Reply to review popup -->
    <div id="small-dialog" class="zoom-anim-dialog mfp-hide">
      <div class="small-dialog-header">
        <h3>Send Message</h3>
      </div>
      <div class="message-reply margin-top-0">
        <textarea
          cols="40"
          rows="3"
          placeholder="Your message to Tom"
        ></textarea>
        <button class="button">Send Message</button>
      </div>
    </div>

    <a
      href="#small-dialog"
      class="send-message-to-owner button popup-with-zoom-anim"
      ><i class="sl sl-icon-envelope-open"></i> Send Message</a
    >
  </div>
  <!-- Contact / End-->
</template>

<script>
export default {};
</script>

<style></style>
