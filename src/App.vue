  <script setup>
import { watch, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import Header from '@/components/Header.vue'
import Login from '@/views/Login.vue'
import CreateAccount from '@/views/CreateAccount.vue'
import { useAccountStore } from '@/stores/account';
import { check } from '@/services/accountService';
import Footer from './components/Footer.vue';


const route = useRoute();
const router = useRouter();
const account = useAccountStore();

//로그인 여부 확인
const checkAccount = async () => {
    const res = await check();

    if(res === undefined || res.status != 200) {

        account.setChecked(false);
        return;
    } 

    account.setChecked(true);
    account.setLoggedIn(res.data > 0);  
}

onMounted(() => {
    checkAccount();
})

watch(() => route.path, () => {
    checkAccount();
});



</script>

<template>
  <div v-if="route.path === '/login'">
    <Login />
  </div>
  <div v-else-if="route.path === '/new-account'">
    <CreateAccount />
  </div>
  <div v-else>
       <template v-if="account.state.checked ">
        <Header />
        <router-view />
        <!-- <Footer /> -->
    </template>
     <template v-else>
        서버 통신 오류
     </template>
  </div>

</template>

<style lang="scss" >
a {
  text-decoration: none;
  color: inherit;
}
.app .container {  max-width: 576px; }
</style>