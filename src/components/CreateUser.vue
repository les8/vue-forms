<template>
  <VForm formName="Create" class="create" @onSubmit="create" />
</template>

<script>
import VForm from "@/components/Form.vue";
import axios from "axios";

export default {
  name: "CreateUser",
  components: {
    VForm,
  },
  created() {
    if (localStorage.getItem("userAuthKey")) {
      this.$router.push("/upgrade");
    }
  },
  methods: {
    async create(obj) {
      try {
        await axios
          .post("https://api.sitemap-generator.ru/test-api/user", obj, {
            headers: {
              "X-Application-Token": "wefiEFv_dwDEvf-12Veda_feadvkJbBgh831",
            },
          })
          .then((response) => {
            localStorage.setItem("userAuthKey", response.data.auth_key);
            localStorage.setItem("userName", response.data.name);
          });
        this.$router.push("/upgrade");
      } catch {
        alert("Incorrect responce");
      }
    },
  },
};
</script>
