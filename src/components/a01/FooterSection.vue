<template>
  <footer class="w-full relative">
    <div class="w-full h-120px bg-bg-asInverse-03 md:h-150px lg:h-200px"></div>

    <div class="bg-footer">
      <div class="h-280px bg-bg-asMask p-10px xl:h-410px lg:p-20px">
        <div
          class="h-full b-b-asInverse04 b-solid b-2 flex items-end justify-center lg:b-3 lg:justify-start"
        >
          <p
            class="w-205px m-paragraph-regular c-text-asInverse-04 tracking-widest md:w-300px md:mb-30px lg:paragraph-medium lg:w-550px lg:mb-50px lg:ml-50px xl:mb-80px xl:ml-80px"
          >
            {{ msg }}
          </p>
        </div>
      </div>
    </div>

    <div
      class="h-110px bg-bg-asPrimary flex-col-center justify-center gap-16px lg:flex-row lg:h-70px"
    >
      <p
        class="c-text-asInverse-04 m-paragraph-regular text-12px w-280px tracking-widest text-center m-0 md:w-full md:text-14px lg:text-16px"
      >
        {{ reserved }}
        {{ reserved_2 }}
      </p>
      <SocialLinks :imageSource="footerSocials" typeComponent="footer" />
    </div>

    <!-- circle -->
    <div
      class="bg-circle w-150px h-150px b-rd-50% bg-bg-asInverse-03 absolute top-50px left-50% translate-x--50% b-2 b-solid b-b-asInverse-04 md:w-200px md:h-200px md:top-50px lg-top-100px lg:left-75% lg:b-5 xl:w-300px xl:h-300px xl:top-80px"
    ></div>
  </footer>
</template>

<script setup lang="ts">
import SocialLinks from '@/components/a01/SocialLinks.vue'

const footerSocials = {
  mail: '/images/icons8-mail-100-white.png',
  facebook: '/images/icons8-fb-100-white.png',
  instagram: '/images/icons8-instagram-100-white.png'
}

const msg =
  '與你分享我的擅長使用簡單的媒材營造可愛繽紛的風格，享受將日常生活創作成一篇篇值得回味的畫面'
const reserved = '小荷的手帳教室 Copyright © 2023 保留一切權利｜本網站由'
const reserved_2 = '建置維護'
</script>

<style scoped>
.bg-footer {
  background: url(/images/bg_footer.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.bg-circle {
  background: url(/images/bg_footer.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
