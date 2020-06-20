<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import home from "./views/Home";
export default {
  components: {
    // home
  }
};
</script>

<style lang="less">
@import url("//at.alicdn.com/t/font_1426139_jm7n2373nlh.css");
* {
  margin: 0;
  padding: 0;
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
</style>
