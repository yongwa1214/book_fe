<script setup>
import { reactive, ref } from 'vue';
import { login } from '@/services/accountService';
import { useRouter } from 'vue-router';

const status =
    reactive({
    email: '',
    password: '',
    password2: '',
    isEmailValid: null,
    isPasswordValid: null,
    isPassword2Valid: null,
    });

const router = useRouter();

const patterns = {
    email: /^[A-Za-z0-9]{8,}$/,
    password: /^[A-Za-z0-9!@*#]{8,}$/,
};

const regex = (data) =>{
    switch(data) {
        case 'email':
            status.isEmailValid = patterns.email.test(status.email)
            ? null
            : 'IDは8文字以上の英数字で入力してください';
        break;
        case 'password':
            status.isPasswordValid = patterns.password.test(status.password)
            ? null
            : 'パスワードは8文字以上の英数字または記号で入力してください';
            break;
        default:
            return null;
    }
};

const submitForm = async() => {
    const dto ={
        name: status.email,
        loginId : status.email,
        loginPw : status.password
    }
    const res = await join(dto)
    // router.push('/');

    // status.isEmailValid = status.email.length > 0;
    // status.isPasswordValid = regex.test(status.password);
    // status.isPassword2Valid = status.password === status.password2;

    // if (status.isEmailValid && status.isPasswordValid && status.isPassword2Valid) {
    //     // フォームの送信処理をここに追加
    //     console.log('フォームが送信されました');
    // } else {
    //     console.log('フォームの入力が無効です');
    // }
};

</script>

<template>
  <div class="login">
    <div class="title">
        <router-link to="/">BOBO</router-link>
    </div>
    
    <form>
        <label for="id" class="form-label">ID</label>
        <div class="mb-3 id">
            <input type="id" class="form-control" id="id" placeholder="IDを入力してください" v-model="status.email" >
            <button type="submit" class="btn btn-primary">重複確認</button>
      </div>
      <div class="mb-4">
        <label for="password" class="form-label">Password</label>
        <input type="password" class="form-control mb-3" id="password" placeholder="パスワードを入力してください" v-model="status.password">
        <input type="password" class="form-control" id="password２" placeholder="パスワード確認" v-model="status.password2">
      </div>
      <div class="button">
        <button type="submit" class="btn btn-primary" 
                @click="submitForm" @keyup.enter="submitForm">
                登録</button>
      </div>
    </form>
    
  </div>
</template>

<style lang="scss" scoped>
.title {
    display: flex;
    //justify-content: center;
    margin-top:50px;
    margin-bottom: 50px;
    font-size: 30px;
    font-weight: 900;
    color:#0d6efd
}
.login{
    margin: 0 auto;
    width: 520px;
    padding: 49px;
}
form {
    //display: flex;
    border-radius: var(--radius-xl);
    height: auto;
    margin: 0 auto;
    min-height: 460px;

    
//   maring
  flex-direction: column; /* 세로 방향 정렬 */
//   justify-content: center; /* 세로 중앙 정렬 */
  align-items: center; /* 가로 중앙 정렬 */
//   height: 100vh;


}

.id {
    display: flex;
    flex-direction: row;
    gap: 30px;

    button {
        width: 150px;
        height: 38px;
    }
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