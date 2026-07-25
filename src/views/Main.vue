<script setup>
import Header from '@/components/Header.vue'
import { watch, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useAccountStore } from '@/stores/account';
import { check } from '@/services/accountService';
import home from '@/views/home.vue';

const route = useRoute();
const account = useAccountStore();

</script>
<template>
    <template v-if="account.state.checked">
        <home />
    </template>
     <template v-else>
        서버 통신 오류
     </template>
</template>
<style lang="scss" scoped></style>  