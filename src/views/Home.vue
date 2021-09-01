<template>
  <div class="home">
    <defaultNav color = "white"></defaultNav>
    <div class="content">
      <div class="description">
      <span>
        Merhaba
      </span>
      <span>Nereyi keşfetmek istersiniz?</span>
    </div>
    <div class="selectcard">
      <select-card></select-card>
    </div>
    </div>
  </div>
  
</template>

<script>
import defaultNav from '../components/Shared/appNav.vue';
import selectCard from '../components/Home/selectCard.vue'
export default {
components: {
    defaultNav,
    selectCard
  },
}
</script>

<style lang="scss" scoped>
.home{
  background-color: #063048;
  padding: 10px 15px;
  min-height: 100vh;
  .content{
    position: relative;
    top: 120px;
    .description{
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    span{
      &:nth-child(1){
        font-size: 35px;
      }
      &:nth-child(2){
        font-size: 25px;
      }
    }
  }
  .selectcard{
    margin-top: 35px;
  }
  }
  
}
</style>