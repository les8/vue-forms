<template>
  <VForm formName="Create" class="create" @onSubmit="create" />
</template>

<script>
import VForm from "@/components/Form.vue";

export default {
  name: "CreateUser",
  components: {
    VForm,
  },
  methods: {
    create(data) {
      console.log(data);
    },
  },
};
</script>
