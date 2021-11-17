<template>
  <div id="loadingIndicator" v-if="loading">
    <div class="spinner-grow" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
  <qr-stream @init="onInit" @decode="onDecode"></qr-stream>
</template>

<script>
import { QrStream } from 'vue3-qr-reader';
import {roomsDb} from "@/rooms-db";
import Cookies from 'js-cookie';

export default {
  name: "Scanner",
  components: {
    QrStream
  },
  data() {
    return {
      loading: true
    }
  },
  methods: {
    onInit(promise) {
      promise.finally(() => this.loading = false)
    },
    onDecode(decodedString) {
      console.log(decodedString);
      if (!decodedString) {
        return  // false positive
      }

      roomsDb.putRoom({url: decodedString})
      if (Cookies.get("openLink")) {
        window.open(decodedString, '_blank');
      }
      this.$router.push('/');
    },
  },
}
</script>

<style scoped>
#loadingIndicator {
  width: 100%;
  height: 100%;
  text-align: center;
  padding-top: 25%;
}

</style>