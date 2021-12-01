<template>
<div class="d-flex justify-content-between align-items-center">
  <a :href="url" target="_blank" class="btn btn-primary"><i class="bi-box-arrow-up-right"></i></a>

  <span v-if="!editing" class="text-truncate roomIdentifier">{{ name || url }}</span>
  <form v-else @submit.prevent="confirmEdit">
    <input type="text" v-model="name">
  </form>

  <div v-if="!editing">
    <button class="btn btn-secondary" @click="editing=true"><i class="bi-pencil-fill"></i></button>
    <button class="btn btn-danger" @click="deleteRoom"><i class="bi-trash-fill"></i></button>
  </div>
  <div v-else class="editMenu">
    <button class="btn btn-danger" @click="cancelEdit"><i class="bi-x-lg"></i></button>
    <button class="btn btn-success" @click="confirmEdit"><i class="bi-check-lg"></i></button>
  </div>
</div>
</template>

<script>
import {roomsDb} from "@/rooms-db";

export default {
  name: "Room",
  props: ["data"],
  emits: ['delete'],
  data() {
    return {
      url: this.data.url,
      name: this.data.name,
      editing: false
    }
  },
  methods: {
    confirmEdit() {
      roomsDb.putRoom({url: this.url, name: this.name})
          .then(() => {
            this.editing = false;
          });
    },
    cancelEdit() {
      roomsDb.getRoom(this.url)
          .then((data) => {
            this.name = data.name;
            this.editing = false;
          })
    },
    deleteRoom() {
      const timeoutId = setTimeout(() => {
        roomsDb.deleteRoom(this.url);
      }, 5000);
     this.$emit('delete', this.url, timeoutId); 
    }
  }
}
</script>

<style scoped>
.roomIdentifier {
  margin: 0 1em;
}

.editMenu > button {
  margin-left: 0.3em;
}
</style>
