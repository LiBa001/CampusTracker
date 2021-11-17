<template>
<ul class="list-group">
  <li v-for="room in rooms" :key="room.url" class="list-group-item d-flex justify-content-between align-items-center">
    {{ room.url || room.name }}
    <a :href="room.url" target="_blank"><i class="bi-box-arrow-up-right stretched-link"></i></a>
  </li>
</ul>
</template>

<script>
import {roomsDb} from "@/rooms-db";

export default {
  name: "RoomList",
  components: {},
  data() {
    return {
      rooms: []
    }
  },
  mounted() {
    roomsDb.getRooms().then((result) => this.rooms = result);
  }
}
</script>

<style scoped>

</style>