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
      <router-link to="/">
        <span>BOBO</span>
      </router-link>

      <template v-if="account.state.loggedIn">
        <div class="menus">
          <router-link to="/">MY本棚</router-link>
          <div @click="logoutAccount">ログアウト</div>
        </div>
      </template>

      <template v-else>
          <router-link to="/login">ログイン</router-link>
      </template>
    </div>

</template>

<style lang="scss" scoped>
.top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 40px;
  background-color: #0d6efd;
  color: #fff;
  span {
    font-size: 30px;
    font-weight: 700;
    // margin:0;
    // padding:0;
  }
}
.menus{
  display: flex;
  gap: 20px;
  a {
    cursor: pointer;
    color: #fff;
    text-decoration: none;
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