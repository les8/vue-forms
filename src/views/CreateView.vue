<template>
  <div class="create">
    <CreateUser />
  </div>
</template>

<script>
// @ is an alias to /src
import CreateUser from "@/components/CreateUser.vue";

export default {
  name: "CreateView",
  components: {
    CreateUser,
  },
};
</script>
