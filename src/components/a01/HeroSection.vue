<template>
  <div
    class="flex-col-center bg-bg-asInverse-03 m-p-inner md:flex-row md:justify-center md:gap-12 lg:gap-28 lg:p-100px"
  >
    <img
      src="/images/personal_pic.png"
      alt="personal_picture"
      class="w-300px m-[50px_0_30px_0] b-rd-10px shadow-image lg:w-350px lg:m-0"
    />
    <!-- Intro -->
    <div class="w-300px md:w-350px lg:w-470px">
      <h1 class="m-headline-bold-xxl c-text-asSecondary m-0 tracking-widest lg:headline-bold-xl">
        {{ name }}
      </h1>

      <h2
        class="m-headline-semibold-xl c-text-asInverse-02 tracking-widest lg:headline-semibold-regular"
      >
        {{ hashTag }}
      </h2>

      <p class="m-paragraph-regular c-text-asPrimary tracking-widest lg:paragraph-regular">
        {{ p1 }}
      </p>
      <p class="m-paragraph-regular c-text-asPrimary tracking-widest lg:paragraph-regular">
        {{ p2 }}
      </p>
      <p
        class="m-paragraph-regular c-text-asPrimary tracking-widest mb-30px md:mb-0 lg:paragraph-regular"
      >
        {{ p3 }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
const name = '小荷'
const hashTag = '熱愛文具的美術女子。'
const p1 =
  '從小就喜歡畫畫、逛文具店，在升大學時掉入手帳坑，開始了我的手帳人生，並在 instagram 上分享自己的作品和手帳裝飾技巧，推坑無數網友。'
const p2 = '擅長使用簡單的媒材營造可愛繽紛的風格，享受將日常生活創作成一篇篇值得回味的畫面。'
const p3 =
  '也期許找出手帳更多元的使用方法，希望能讓大家體會到寫手帳的樂趣，並藉由手帳協助每個人朝理想的目標邁進。著有《人生接軌手帳書：給每一天都很認真的自己》。'
</script>

<style scoped></style>
