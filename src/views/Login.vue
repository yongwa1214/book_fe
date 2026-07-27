<script setup>
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import { login } from '@/services/accountService';


const router = useRouter();


const state = reactive({
    form: {
        loginId: '',
        loginPw: ''
    }
});

const submit = async () => {
    const res = await login(state.form);
    //console.log('res:', res);


    switch(res.status) {
        case 200:
            await router.push('/');
            localStorage.setItem("username",res.data.name)
            break;
        case 404:
            alert('ID/パスワードをご確認ください。');
            break;
    }
}

</script>

<template>
  <div class="login">
    <div class="title">
        <router-link to="/">BOBO</router-link>
    </div>
    
    <form @submit.prevent="submit">
      <div class="mb-4">
        <label for="loginId" class="form-label">ID</label>
        <input type="loginId" class="form-control"  placeholder="IDを入力してください" v-model="state.form.loginId">
      </div>
      <div class="mb-4">
        <label for="password" class="form-label">Password</label>
        <input type="password" class="form-control" id="password" placeholder="パスワードを入力してください" v-model="state.form.loginPw" autocomplete="off">
      </div>
      <div class="button">
        <button type="submit" class="btn btn-primary">ログイン</button>
        <router-link to="/new-account">会員登録</router-link>
      </div>
    </form>
    
  </div>
</template>

<style lang="scss" scoped>
.title {
    display: flex;
    justify-content: center;
    margin-top:50px;
    font-size: 75px;
    font-weight: 900;
    color:#0d6efd
}
form {
    //display: flex;
    border-radius: var(--radius-xl);
    height: auto;
    margin: 0 auto;
    min-height: 460px;
    padding: 49px;
    width: 520px;
    
//   maring
  flex-direction: column; /* 세로 방향 정렬 */
//   justify-content: center; /* 세로 중앙 정렬 */
  align-items: center; /* 가로 중앙 정렬 */
//   height: 100vh;


}
.button {
    display: flex;
    flex-direction: column;
    align-items: center; /* 横方向中央整列 */
}
.button .btn {
    margin-top: 20px;
    width: 100%;
    display: block;

}

.button span {
    margin-top: 15px;
    color: #737373;
}
</style>
