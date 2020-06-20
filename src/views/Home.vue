<template>
  <div class="homeContent">
    <div class="u1_div"></div>
    <login></login>
    <div class="u2_div"></div>
  </div>
</template>

<script>
import login from "../components/login.vue";
export default {
  components: {
    login
  }
};
</script>
<style lang="less">
* {
  padding: 0;
  margin: 0;
}
a {
  color: inherit;
}
a:hover {
  text-decoration: none;
}
ul,
li,
ol {
  list-style: none;
}
.homeContent {
  width: 100vw;
  position: relative;
//   overflow: hidden;
}
.u1_div {
  position: sticky;
  width: 100vw;
  height: 6.67vw;
  top: 0;
  background-color: rgb(117, 117, 117);
}
.u2_div {
  position: sticky;
  bottom: 0;
  width: 100vw;
  height: 13.33vw;
  background-color: rgb(0, 0, 0);
}
</style>
