<template>
  <div class="singcard">
    <div class="sing-img" @click.prevent="getSinger(cards.id)">
      <img :src="cards.picUrl" alt="404" width="200" height="200"/>
    </div>
    <div class="sing-bottom">
      <p style="color:black; text-align: center;" @click.prevent="getSinger(cards.id)">
        {{cards.name}}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "singcard",
  props: {
    cards: {
      type:Object,
      default() {
        return {};
      },
    },
  },
  methods:{
    //跳转到歌手页
      getSinger(id){
          console.log(id);
          this.$router.push("/singer" + id)
      },
      //跳转到歌手详情页 无接口暂未做
      getSingerMenu(id){
          console.log(id);
      }
  },
};
</script>

<style>
.singcard{
    width: 17%;
    margin-top: 15px;
    margin-right: 5px;
}
.singcard>div{
    width: 100%;
}
.sing-img{
    cursor: pointer;
}
.sing-img img{
    width: 100%;
}
.sing-bottom{
    width: 200px;
    margin-top: 8px;
    font-size: 13px;
    display: flex;
    justify-content: space-between;
}
.sing-bottom p {
  align-items: center;
  text-align: center;
  padding: 20px;
}
.s-user{
    width: 15px;
    height: 15px;
    border-radius: 50%;
    border: 1px solid #5292fe;
    text-align: center;
    line-height: 15px;
}