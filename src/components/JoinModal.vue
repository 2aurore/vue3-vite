<template>
  <!-- MODAL popup layout -->
  <div class="black-bg" v-if="show">
    <div class="white-bg">
      <div style="width: 75%">
        <h2>JOIN US</h2>
        <ul>
          <li>email <input type="email" v-model="email" /></li>
          <li>name <input v-model="name" /></li>
          <li>password <input type="password" v-model="password" /></li>
          <li><input type="password" v-model="passwordCheck" /></li>
          <li>
            <span style="font-size: small">{{ pwCheckAlert }}</span>
            <v-btn small @click="onPwSecurityCheck" class="ckBtn">check</v-btn>
          </li>
          <li>city <input v-model="city" /></li>
          <li>street <input v-model="street" /></li>
          <li>post code <input v-model="zipcode" /></li>
        </ul>
        <v-btn large @click="!show" class="vBtn">CANCEL</v-btn>
        <v-btn large @click="onClickJoin" class="vBtn">SUBMIT</v-btn>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  show: {
    type: Boolean,
    required: false,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div {
  box-sizing: border-box;
  width: 100%;
}

.black-bg {
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  padding: 20px;
}

.white-bg {
  background-color: white;
  /* width: 60%; */
  border-radius: 8px;
  padding: 20px;
}

.login {
  position: static;
  height: 100%;
}

.vBtn {
  margin: 20px;
}

.ckBtn {
  margin-left: 5px;
}

ul {
  list-style-type: none;
  margin: auto;
  padding: 0;
  text-align: right;
  width: 50%;
}

li {
  display: block;
  margin: 10px 0;
  list-style: none;
}
</style>
