<script setup>
import { reactive, ref } from 'vue';
import { check, sameId, join } from '@/services/accountService';
import { useRouter } from 'vue-router';

const status =
    reactive({
    email: '',
    password: '',
    password2: '',
    isEmailValid: null,
    isPasswordValid: null,
    isPassword2Valid: null,
    check : false
    },

);

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

const checkId = async() =>{
    const res = await sameId(status.email)
    console.log(res)
    if(res.data < 1){
        status.check = true
        return;
    }
    alert("重複IDです。")
    status.check = false
}


const submitForm = async() => {
    if(!status.check){
        alert("重複確認をしてください")
        return
    }
    
    const dto ={
        name: status.email,
        loginId : status.email,
        loginPw : status.password
    }
    const res = await join(dto)
    if(res.status =200){
        alert("会員登録ありがとうございます。")
        router.push('/')
    }

 
};

</script>

<template>
  <div class="login">
    <div class="title">
        <router-link to="/">BOBO</router-link>
    </div>
    
    <form @submit.prevent="submitForm">
        <label for="id" class="form-label">ID</label>
        <div class="mb- id">
            <input type="id" class="form-control" id="id" placeholder="IDを入力してください" v-model="status.email" >
            <button type="button" class="btn btn-primary" @click.stop="checkId">重複確認</button>
            
      </div>
      <span v-if="status.check" class="mb-3">
                IDを使えます。
            </span>
      <div class="mb-4 mt-3">
        <label for="password" class="form-label">Password</label>
        <input type="password" class="form-control mb-3" id="password" placeholder="パスワードを入力してください" v-model="status.password">
        <input type="password" class="form-control" id="password２" placeholder="パスワード確認" v-model="status.password2">
      </div>
      <div class="button">
        <button type="button" class="btn btn-primary" 
                @click.stop="submitForm" @keyup.enter.stop="submitForm">
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

span{
        color: rgb(47, 224, 130);
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