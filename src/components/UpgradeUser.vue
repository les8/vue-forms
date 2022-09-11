<template>
  <VForm formName="Upgrade" class="upgrade" :user="user" @onSubmit="update" />
</template>

<script>
import VForm from "@/components/Form.vue";
import axios from "axios";

export default {
  name: "UpgrageUser",
  components: {
    VForm,
  },
  data() {
    return {
      user: {},
    };
  },
  async created() {
    if (!localStorage.getItem("userAuthKey")) {
      this.$router.push("/");
      return;
    }

    try {
      await axios
        .get("https://api.sitemap-generator.ru/test-api/user", {
          headers: {
            Authorization: `${localStorage.getItem(
              "userName"
            )} ${localStorage.getItem("userAuthKey")}`,
          },
        })
        .then((response) => {
          this.user = response.data;
        });
    } catch {
      alert("Bad responce");
    }
  },
  methods: {
    async update(obj) {
      try {
        await axios
          .patch("https://api.sitemap-generator.ru/test-api/user", obj, {
            headers: {
              Authorization: `${localStorage.getItem(
                "userName"
              )} ${localStorage.getItem("userAuthKey")}`,
            },
          })
          .then((response) => console.log(response));
      } catch {
        alert("Incorrect responce");
      }
    },
  },
};
</script>
