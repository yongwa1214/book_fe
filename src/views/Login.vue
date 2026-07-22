<script setup>
</script>

<template>
  <div class="login">
    <div class="title">
        <router-link to="/bobo">BOBO</router-link>
    </div>
    
    <form>
      <div class="mb-4">
        <label for="email" class="form-label">ID</label>
        <input type="email" class="form-control" id="email" placeholder="IDを入力してください">
      </div>
      <div class="mb-4">
        <label for="password" class="form-label">Password</label>
        <input type="password" class="form-control" id="password" placeholder="パスワードを入力してください">
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
