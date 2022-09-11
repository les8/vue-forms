<template>
  <VForm formName="Upgrade" class="upgrade" @onSubmit="update" />
</template>

<script>
import VForm from "@/components/Form.vue";

export default {
  name: "UpgrageUser",
  components: {
    VForm,
  },
  methods: {
    update(data) {
      console.log(data);
    },
  },
};
</script>
