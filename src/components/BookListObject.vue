<script setup>
</script>

<template>
    <div class="box">
        <div class="book-image">
            <div class="img">
                <!-- <img :src="book.image" alt="Book Image" /> -->
            </div>
        </div>    
        <div class="content">
            <p class="title">test</p>
            <span class="author">test</span>
            <span class="publisher">test</span>
            <div class="description">test</div>
        </div>
        <div class="button">
            <button class="btn btn-primary">
                ＋
            </button>
        </div>
    </div>
    
</template>

<style lang="scss" scoped>
.box {
    gap: 20px;
    display: flex;
    height: 200px;
    padding: 20px 0;
    border-bottom: 1px solid #ccc;
    

    .img{
        width: 130px;
        height: 100%;
        background-color: #ec8f8f;
        
    }
    
    .content {
        width: 100%;
       p{
            font-size: 20px;
            font-weight: 700;
            margin-bottom: 0;
            
       }
       span{
        margin-right: 10px;
       }
    }

    .description {
        margin-top: 20px;
        font-size: 14px;
        color: #666;
    }

    .button {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;

        .btn {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            font-size: 40px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .btn-primary {
            border: none;
            background-color: #eff5ff;
            color: #5174fe;
        }

        .btn:hover {
            background-color: #cfe1ff;
        
        }
    }
}
</style>