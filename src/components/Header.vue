<script setup>
// import { useAccountStore } from '@/stores/account';
// import { logout } from '@/services/accountService';
// import { useRouter } from 'vue-router';

// const router = useRouter();
// const account = useAccountStore();
// //로그아웃
// const logoutAccount = async () => {
//   if (!confirm('로그아웃 하시겠습니까?')) {
//     return;
//   }
//   const res = await logout();
//   if (res === undefined || res.status !== 200) {
//     return;
//   }
//   account.logout();
//   await router.push('/');
// };
</script>

<template>
    <div class="top">
        <span>BOBO</span>

        <div class="login">
           <router-link to="/login">ログイン</router-link>
        </div>
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