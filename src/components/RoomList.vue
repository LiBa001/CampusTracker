<template>
<div>
<ul class="list-group">
  <li v-for="room in rooms" :key="room.url" class="list-group-item">
    <Room :data="room" @delete="deletionWarn"></Room>
  </li>
</ul>
<div class="toast-container">
  <DeletionWarning v-for="w in warnings" :timeoutId="w.timeoutId" :url="w.url" :key="w.timeoutId" @undo="undoDelete">Deleted a room.</DeletionWarning>
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
      setTimeout(() => {this.warnings.splice(this.warnings.indexOf({timeoutId, url}), 1)}, 5000); 
      this.rooms.splice(url, 1);
    },
    undoDelete(url) {
      roomsDb.getRoom(url).then(room => this.rooms.push(room));
    }
  }
}
</script>

<style scoped>
.toast-container {
  position: absolute;
  bottom: 1em;
  right: 0.5em;
}
</style>
