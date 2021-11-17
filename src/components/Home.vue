<template>
<div>
  <div style="text-align: center">
    <h1>Welcome to KIT CampusTracker!</h1>
    <p>Simplifying contact tracing.</p>
  </div>
  <div class="container">
    <div class="row">
        <router-link to="/scan" class="btn btn-primary" role="button" style="margin: 1em">Scan QR Code</router-link>
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

</style>