<template>
  <div class="flex-col-center bg-bg-asInverse-03 m-p-inner xl:p-inner">
    <h2 class="m-headline-semibold-xl c-text-asSecondary m-y-30px lg:headline-bold">{{ title }}</h2>
    <!-- IG posts -->
    <div class="w-full flex-col-center gap-35px lg:flex-row lg:justify-center xl:justify-between">
      <div
        class="w-270px flex-col-center bg-bg-asInverse-04 b-rd-10px shadow-image p-15px xl:w-300px"
      >
        <img
          src="/images/ig3.png"
          alt=""
          class="w-270px h-270px object-cover b-rd-10px cursor-pointer xl:w-300px xl:h-300px"
        />
        <a
          href="https://www.instagram.com/p/CznxrVDr3Tm/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=="
          target="_blank"
          class="m-paragraph-regular c-text-asInverse-02 decoration-none font-semibold mt-20px mb-5px lg:b-1 lg:b-solid lg:b-b-asInverse-02 lg:p-y-10px lg:p-x-25px lg:hover:bg-bg-asInverse-02 lg:hover:c-text-asInverse-04"
        >
          {{ readMore }} &rsaquo;&rsaquo;
        </a>
      </div>

      <div
        class="w-270px flex-col-center bg-bg-asInverse-04 b-rd-10px shadow-image p-15px xl:w-300px"
      >
        <img
          src="/images/ig4.png"
          alt=""
          class="w-270px h-270px object-cover b-rd-10px cursor-pointer xl:w-300px xl:h-300px"
        />
        <a
          href="https://www.instagram.com/p/CznxrVDr3Tm/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=="
          class="m-paragraph-regular c-text-asInverse-02 decoration-none font-semibold mt-20px mb-5px lg:b-1 lg:b-solid lg:b-b-asInverse-02 lg:p-y-10px lg:p-x-25px lg:hover:bg-bg-asInverse-02 lg:hover:c-text-asInverse-04"
        >
          {{ readMore }} &rsaquo;&rsaquo;
        </a>
      </div>

      <div
        class="w-270px flex-col-center bg-bg-asInverse-04 b-rd-10px shadow-image p-15px xl:w-300px"
      >
        <img
          src="/images/ig5.png"
          alt=""
          class="w-270px h-270px object-cover b-rd-10px cursor-pointer xl:w-300px xl:h-300px"
        />
        <a
          href="https://www.instagram.com/p/CznxrVDr3Tm/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=="
          class="m-paragraph-regular c-text-asInverse-02 decoration-none font-semibold mt-20px mb-5px lg:b-1 lg:b-solid lg:b-b-asInverse-02 lg:p-y-10px lg:p-x-25px lg:hover:bg-bg-asInverse-02 lg:hover:c-text-asInverse-04"
        >
          {{ readMore }} &rsaquo;&rsaquo;
        </a>
      </div>
    </div>
    <a
      href="https://www.instagram.com/can_herji/"
      class="m-paragraph-regular b-1 b-solid b-b-asSecondary decoration-none font-semibold c-text-asSecondary bg-transparent p-x-30px p-y-10px m-y-50px hover:bg-bg-asSecondary hover:c-text-asInverse-04"
      >{{ moreIGpost }}
    </a>
  </div>
</template>

<script setup lang="ts">
const title = '精選IG貼文'
const readMore = '閱讀更多'
const moreIGpost = '瀏覽更多貼文'
</script>

<style scoped></style>
