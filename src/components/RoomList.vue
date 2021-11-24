<template>
<div>
<ul class="list-group">
  <li v-for="room in rooms" :key="room.url" class="list-group-item">
    <Room :data="room" @delete="deletionWarn"></Room>
  </li>
</ul>
<div class="toast-container">
  <DeletionWarning v-for="tId in warnings" :timeoutId="tId">Deleted a room.</DeletionWarning>
</div>
</div>
</template>

<script>
import {roomsDb} from "@/rooms-db";
import Room from "@/components/Room";

export default {
  name: "RoomList",
  components: {Room},
  data() {
    return {
      rooms: [],
      warnings: []
    }
  },
  mounted() {
    roomsDb.getRooms().then((result) => this.rooms = result);
  },
  methods: {
    deletionWarn(timeoutId) {
      this.warnings.append(timeoutId);
    }
  }
}
</script>

<style scoped>

</style>
