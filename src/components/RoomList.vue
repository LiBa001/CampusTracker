<template>
<div>
<ul class="list-group">
  <li v-for="room in rooms" :key="room.url" class="list-group-item">
    <Room :data="room" @delete="deletionWarn"></Room>
  </li>
</ul>
<div class="toast-container">
  <DeletionWarning v-for="w in warnings" :timeoutId="w.tId" :url="w.url" v-bind:key="w.tId">Deleted a room.</DeletionWarning>
</div>
</div>
</template>

<script>
import {roomsDb} from "@/rooms-db";
import Room from "@/components/Room";
import DeletionWarning from "@/components/DeletionWarning";

export default {
  name: "RoomList",
  components: {Room, DeletionWarning},
  data() {
    return {
      rooms: [],
      warnings: []
    }
  },
  mounted() {
    roomsDb.getRooms().then(rooms => this.rooms = rooms);
  },
  methods: {
    deletionWarn(url, timeoutId) {
      this.warnings.push({timeoutId, url});
      this.rooms.splice(url, 1);

    },
    undoDelete(url) {
      roomsDb.getRoom(url).then(room => this.rooms.push(room));
    }
  }
}
</script>

<style scoped>

</style>
