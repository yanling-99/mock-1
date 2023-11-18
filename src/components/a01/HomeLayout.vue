<template>
  <div class="max-w-1280px mx-auto bg-bg-asInverse-03">
    <NavBar />
    <HomeBanner :currentRoutePath="currentRoutePath" />
    <RouterView />
    <FooterSection />
    <BackToTopButton />
  </div>
  <ModalsContainer />
</template>

<script setup lang="ts">
import NavBar from '@/components/a01/NavBar.vue'
import HomeBanner from '@/components/a01/HomeBanner.vue'
import FooterSection from './FooterSection.vue'
import { ModalsContainer, useModal } from 'vue-final-modal'
import BasicModal from '@/components/a01/BasicModal.vue'
import { useRoute } from 'vue-router'
import { watch, ref, provide, onMounted } from 'vue'
import { usePost } from '@/hooks/usePost'
import BackToTopButton from '@/components/template/buttons/BackToTopButton.vue'

const { getCategoryList } = usePost()
const route = useRoute()
// const routeParams = route.params
const currentRoutePath = ref<string>('')

watch(
  () => route.path,
  (newParams) => {
    currentRoutePath.value = newParams
  }
)

// modal testing
const { open, close } = useModal({
  component: BasicModal,
  attrs: {
    title: 'Hello I am Modal!',
    onConfirm() {
      close()
    }
  },
  slots: {
    default: '<p>Hello insert slot here</p>'
  }
})

onMounted(async () => {
  await getCategoryList()
})
</script>

<style scoped></style>
