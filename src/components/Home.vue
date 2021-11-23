<template>
<div>
  <div class="dropdown">
    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
      <i class="bi-info-circle-fill"></i>
    </button>
    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
      <li>
        <a class="dropdown-item" href="https://github.com/LiBa001/CampusTracker" target="_blank">
          <i class="bi-github"></i>
          GitHub
        </a>
      </li>
      <li>
        <a class="dropdown-item" href="https://libasoft.de/imprint" target="_blank">
          <i class="bi-box-arrow-up-right"></i>
          Imprint / Impressum
        </a>
      </li>
    </ul>
  </div>

  <div style="text-align: center">
    <h1>Welcome to KIT CampusTracker!</h1>
    <p>Simplifying contact tracing.</p>
  </div>
  <div class="container">
    <div class="row">
        <router-link to="/scan" class="btn btn-primary" role="button" style="margin: 1em">
          Scan QR Code
          <span id="scanQrCodeBtn"><i class="bi-qr-code-scan"></i></span>
        </router-link>
    </div>
    <div class="form-check form-switch">
      <input class="form-check-input" type="checkbox" role="switch" id="openLinkToggle" v-model="openLink">
      <label class="form-check-label" for="openLinkToggle">Automatically open link</label>
    </div>

    <div style="height: 2em"></div>

    <h2>Rooms</h2>
    <room-list></room-list>

  </div>
</div>
</template>

<script>
import RoomList from "@/components/RoomList";
import Cookies from "js-cookie";

export default {
  name: "Home",
  components: {RoomList},
  data() {
    return {
      openLink: false
    }
  },
  watch: {
    openLink() {
      Cookies.set("openLink", this.openLink)
    }
  }
}
</script>

<style scoped>
#scanQrCodeBtn {
  margin-left: 1em;
}
.dropdown {
  text-align: right;
  margin: 0.5em;
}
</style>