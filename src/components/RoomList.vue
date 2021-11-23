<template>
<ul class="list-group">
  <li v-for="room in rooms" :key="room.url" class="list-group-item">
    <Room :data="room"></Room>
  </li>
</ul>
</template>

<script>
import {roomsDb} from "@/rooms-db";
import Room from "@/components/Room";

export default {
  name: "RoomList",
  components: {Room},
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