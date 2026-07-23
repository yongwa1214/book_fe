<script setup>
import Header from '@/components/Header.vue'
import { watch, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useAccountStore } from '@/stores/account';
import { check } from '@/services/accountService';
import home from '@/views/home.vue';

const route = useRoute();
const account = useAccountStore();

//로그인 여부 확인
const checkAccount = async () => {
    const res = await check();
    console.log('check:', res);

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
    <template v-if="account.state.checked">
        <Header />
        <home />
        <router-view></router-view>
    </template>
     <template v-else>
        서버 통신 오류
     </template>
</template>
<style lang="scss" scoped></style>  