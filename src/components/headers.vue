<template>
  <div id="header">
    <header>
      <span class="title grow">
        <router-link class="grow" to="/">YEVPT</router-link>
      </span>
      <span class="link grow">
        <router-link :class="{ 'checked': checked == '/' }" to="/">首页</router-link>
        <router-link to="/">留言</router-link>
        <router-link to="/">友邻</router-link>
      </span>
      <span class="login grow">
        <span class="model">
          <img src="../assets/moon.png">
        </span>
        <router-link class="button" to="/">登录</router-link>
      </span>
    </header>
  </div>
</template>

<script>
export default {
  computed: {
    checked() {
      return this.$route.path;
    },
  },
};
</script>

<style lang="scss" scoped>
.grow {
  display: inline-block;
  flex: 0 1 auto;
}

.checked {
  background: #d8d8d8;
}

#header {
  background-color: #fff;
  height: 56px;
  header {
    width: 1420px;
    margin: 0 auto;
    height: 56px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .title {
      padding-left: 80px;
      width: 176.39px;
      a {
        padding: 0 16px;
        border-radius: 3px;
        line-height: 36px;
        height: 36px;
        flex-grow: 0;
        font-weight: 500;
        color: rgba(0, 0, 0, 0.87);
        font-size: 1.25rem;
        font-family: Roboto, sans-serif !important;
        letter-spacing: 0.0125em !important;
        &:hover {
          background: #f1f1f1;
        }
      }
    }
    .link {
      line-height: 56px;
      font-size: 14px;
      color: rgba(0, 0, 0, 0.87);
      a {
        display: inline-block;
        width: 80px;
        height: 56px;
        text-align: center;
        &:hover {
          background: #f1f1f1;
        }
      }
    }
    .login {
      .model {
        border-radius: 3px;
        cursor: pointer;
        padding: 4px 16px;
        display: inline-block;
        width: 50px;
        height: 28px;
        &:hover {
          background: #f1f1f1;
        }
        img {
          vertical-align: middle;
          width: 19px;
          object-fit: contain;
        }
      }
      .button {
        display: inline-block;
        width: 64px;
        height: 36px;
        line-height: 36px;
        background: #0478be;
        border-radius: 4px;
        text-align: center;
        font-weight: 500;
        font-size: 0.875rem;
        color: #fff;
      }
    }
  }
}
</style>