<script setup>
import { watch, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();


onMounted(() => {
    router.push('/bobo');
})

</script>

<template>
  <router-view />
</template>

<style lang="scss" >
a {
  text-decoration: none;
  color: inherit;
}
.app .container {  max-width: 576px; }
</style>