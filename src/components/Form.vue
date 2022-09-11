<template>
  <form class="form" :class="classes" @submit.prevent="onSubmit">
    <h3 class="form__title">{{ formName }} user form</h3>
    <div class="form__inputs">
      <input
        v-model="name"
        class="form__name"
        type="text"
        placeholder="enter your name..."
        @input="nameMask"
        required
      />
      <input
        v-model="email"
        class="form__email"
        type="email"
        placeholder="enter your email..."
        required
      />
      <input
        v-if="!isCreateForm"
        v-model="phone"
        class="form__phone"
        type="tel"
        placeholder="enter your phone..."
        :maxlength="lengthForPhoneMask"
        :minlength="lengthForPhoneMask"
      />
      <input type="submit" />
    </div>
  </form>
</template>

<script>
import { maskPhone } from "../script/maskPhone.js";

export default {
  name: "VForm",
  props: {
    formName: {
      type: String,
      required: true,
    },
    class: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      name: "",
      email: "",
      phone: "",
      lengthForPhoneMask: 18,
    };
  },
  computed: {
    classes() {
      return `form-${this.class}`;
    },
    isCreateForm() {
      if (this.class === "create") {
        return true;
      } else return false;
    },
  },
  mounted() {
    maskPhone(".form__phone");
  },
  methods: {
    onSubmit() {
      this.$emit("onSubmit", {
        name: this.name,
        email: this.email,
        phone: this.phone,
      });
    },
    nameMask(e) {
      this.name = e.target.value.replace(/[^A-z,a-z,\s,-]/g, "");
    },
  },
};
</script>

<style lang="scss" scoped>
.form__inputs {
  width: 500px;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
