<script setup>
import { useAccountStore } from '@/stores/account';
import { logout } from '@/services/accountService';
import { useRouter } from 'vue-router';

const account = useAccountStore();
//로그아웃
const logoutAccount = async () => {
  if (!confirm('ログアウトしますか？')) {
    return;
  }
  const res = await logout();
  if (res === undefined || res.status !== 200) {
    return;
  }
  account.setLoggedIn(false);
};
</script>

<template>
    <div class="top">
      <span>BOBO</span>

      <template v-if="account.state.loggedIn">
        <div @click="logoutAccount">ログアウト</div>
      </template>

      <template v-else>
        <div class="login">
          <router-link to="/login">ログイン</router-link>
        </div>
      </template>
    </div>

</template>

<style lang="scss" scoped>
.top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 15px;
  background-color: #0d6efd;
  color: #fff;
  span {
    font-size: 30px;
    font-weight: 700;
    // margin:0;
    // padding:0;
  }
}
// header {
//   .menus {
//     a {
//       cursor: pointer;
//       color: #fff;
//       text-decoration: none;
//     }
//   }
// }
</style>