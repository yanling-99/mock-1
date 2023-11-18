<template>
  <div class="flex-col-center bg-bg-asInverse-04 m-p-inner xl:p-inner">
    <h2 class="m-headline-semibold-xl c-text-asSecondary m-y-30px lg:headline-bold">{{ title }}</h2>
    <div
      class="w-300px flex-col-center gap-30px mb-50px lg:w-full lg:justify-center lg:gap-50px xl:justify-between"
    >
      <div
        class="flex flex-col items-start lg:w-full lg:flex-row lg:justify-center lg:gap-90px lg:items-center"
      >
        <img
          class="w-300px h-180px object-cover b-rd-10px shadow-image self-center lg:w-450px lg:h-270px"
          src="/images/service_1.png"
          alt="service-1"
        />
        <div class="lg:w-450px lg:h-200px">
          <h3
            class="m-headline-regular c-text-asInverse-02 mb-0 lg:headline-semibold-regular lg:m-0"
          >
            {{ service_1 }}
          </h3>
          <p class="m-paragraph-regular c-text-asPrimary tracking-widest lg:paragraph-regular">
            {{ desc_1 }}
          </p>
          <a
            @click="() => open()"
            class="cursor-pointer m-paragraph-regular text-12px c-text-asInverse-02 decoration-none font-semibold b-1 b-solid b-b-asInverse-02 py-5px px-15px lg:py-10px lg:px-25px hover:bg-bg-asInverse-02 hover:c-text-asInverse-04"
            >{{ detail }}</a
          >
        </div>
      </div>

      <div
        class="flex flex-col items-start lg:w-full lg:flex-row lg:justify-center lg:gap-90px lg:items-center"
      >
        <img
          class="w-300px h-180px object-cover b-rd-10px shadow-image self-center lg:w-450px lg:h-270px"
          src="/images/service_2.png"
          alt="service-1"
        />
        <div class="lg:w-450px lg:h-200px">
          <h3
            class="m-headline-regular c-text-asInverse-02 mb-0 lg:headline-semibold-regular lg:m-0"
          >
            {{ service_2 }}
          </h3>
          <p class="m-paragraph-regular c-text-asPrimary tracking-widest lg:paragraph-regular">
            {{ desc_2 }}
          </p>
          <a
            @click="() => open()"
            class="cursor-pointer m-paragraph-regular text-12px c-text-asInverse-02 decoration-none font-semibold b-1 b-solid b-b-asInverse-02 p-y-5px p-x-15px lg:p-y-10px lg:p-x-25px hover:bg-bg-asInverse-02 hover:c-text-asInverse-04"
            >{{ detail }}</a
          >
        </div>
      </div>

      <div
        class="flex flex-col items-start lg:w-full lg:flex-row lg:justify-center lg:gap-90px lg:items-center"
      >
        <img
          class="w-300px h-180px object-cover b-rd-10px shadow-image self-center lg:w-450px lg:h-270px"
          src="/images/service_3.png"
          alt="service-1"
        />
        <div class="lg:w-450px lg:h-200px">
          <h3
            class="m-headline-regular c-text-asInverse-02 mb-0 lg:headline-semibold-regular lg:m-0"
          >
            {{ service_3 }}
          </h3>
          <p class="m-paragraph-regular c-text-asPrimary tracking-widest lg:paragraph-regular">
            {{ desc_3 }}
          </p>
          <a
            @click="() => open()"
            class="cursor-pointer m-paragraph-regular text-12px c-text-asInverse-02 decoration-none font-semibold b-1 b-solid b-b-asInverse-02 p-y-5px p-x-15px lg:p-y-10px lg:p-x-25px hover:bg-bg-asInverse-02 hover:c-text-asInverse-04"
            >{{ detail }}</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import BasicModal from './BasicModal.vue'
import { ModalsContainer, useModal } from 'vue-final-modal'

const title = '服務介紹'
const service_1 = '我是標題'
const desc_1 =
  '擅長使用簡單的媒材營造可愛繽紛的風格，享受將日常生活創作成一篇篇值得回味的畫面。也期許找出手帳更多元的使用方法，希望能讓大家體會到寫手帳的樂趣，著有《人生接軌手帳書：給每一天都'
const service_2 = '我是標題'
const desc_2 =
  '擅長使用簡單的媒材營造可愛繽紛的風格，享受將日常生活創作成一篇篇值得回味的畫面。也期許找出手帳更多元的使用方法，希望能讓大家體會到寫手帳的樂趣，著有《人生接軌手帳書：給每一天都'
const service_3 = '我是標題'
const desc_3 =
  '擅長使用簡單的媒材營造可愛繽紛的風格，享受將日常生活創作成一篇篇值得回味的畫面。也期許找出手帳更多元的使用方法，希望能讓大家體會到寫手帳的樂趣，著有《人生接軌手帳書：給每一天都'
const detail = '詳細資訊'

const { open, close } = useModal({
  component: BasicModal,
  attrs: {
    title: 'Hello World!',
    onConfirm() {
      close()
    }
  },
  slots: {
    default: '<p>這是詳細資訊</p>'
  }
})
</script>

<style scoped></style>
