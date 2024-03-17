<template>
    <div
        class=" flex h-[calc(100vh-92px)] flex-col justify-center items-center gap-10 bg-[url('@/assets/bg-2.jpg')] bg-cover">
        <div class="flex flex-col justify-center items-center gap-4 font-light text-white">
            <div class="text-5xl font-medium">
                นวดแก้อาการโดยอาจารย์มากประสบการณ์กว่า {{ year.number.toFixed(0) }} ปี
            </div>
            <div class="text-3xl">
                นวดรักษาลูกค้าเคสหนักๆหายมาแล้วกว่า {{ tweened.number.toFixed(0) }} คน
            </div>
            <div class="text-3xl italic text-blue-300">
                คุณตระเวนนวดมาหลายร้านแต่ยังไม่หาย
                <span class="font-normal">
                    คุณเจอปัญหานี้ใช่ไหม ?
                </span>
            </div>
        </div>
        <div class="flex items-center gap-10 text-white">
            <div class="rounded-xl overflow-hidden">
                <img src="@/assets/thai-msg-1.webp" width="500">
            </div>
            <div class="flex flex-col gap-6">
                <div class="flex items-center gap-1.5">
                    <svg xmlns="http://www.w3.org/2000/svg" height="1.5rem" fill="#AAFF00"
                        viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                        <path
                            d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z" />
                    </svg>
                    ไปนวดแก้อาการมาแล้วหลายร้าน แต่ไม่เจอหมอดี
                </div>
                <div class="flex items-center gap-1.5">
                    <svg xmlns="http://www.w3.org/2000/svg" height="1.5rem" fill="#AAFF00"
                        viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                        <path
                            d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z" />
                    </svg>
                    นวดร้านเดิมแต่ต้องเปลี่ยนหมอ เพราะ ไม่รู้ว่าหมอคนไหนนวดดี นวดหาย
                </div>
                <div class="flex items-center gap-1.5">
                    <svg xmlns="http://www.w3.org/2000/svg" height="1.5rem" fill="#AAFF00"
                        viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                        <path
                            d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z" />
                    </svg>
                    หมอปฎิเสธเคสหนัก เพราะ ไม่กล้านวดจุดสำคัญหรือลูกค้ามีโรคประจำตัว เช่น อัมพฤต อัมพาต
                </div>
                <div class="flex items-center gap-1.5">
                    <svg xmlns="http://www.w3.org/2000/svg" height="1.5rem" fill="#AAFF00"
                        viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                        <path
                            d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z" />
                    </svg>
                    ไปนวดร้านนวดแก้อาการ แต่เจอหมอที่เน้นนวดหนัก ไม่นวดแก้อาการจริง ทำให้ไม่หาย
                </div>
                <div class="flex items-center gap-1.5">
                    <svg xmlns="http://www.w3.org/2000/svg" height="1.5rem" fill="#AAFF00"
                        viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                        <path
                            d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z" />
                    </svg>
                    หาหมอแผนปัจจุบัน หมอบอกหาสาเหตุโรคไม่เจอ กินยามานานแต่ยังไม่หาย
                </div>
                <div class="flex items-center gap-1.5">
                    <svg xmlns="http://www.w3.org/2000/svg" height="1.5rem" fill="#AAFF00"
                        viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                        <path
                            d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z" />
                    </svg>
                    ผ่าตัดมา เกิดพังผืดเกาะ หมอให้ทำกายภาพเท่าไหร่ก็ไม่ดีขึ้น นวดร้านไหนก็ไม่ดีขึ้น
                </div>
                <div class="flex items-center gap-2">
                    <button class="p-2 border border-white rounded-lg hover:bg-white hover:text-black transition">
                        แชร์ประสบการณ์
                    </button>
                    <button class="p-2 border border-white rounded-lg hover:bg-white hover:text-black transition">
                        ประวัติอาจารย์
                    </button>
                </div>
            </div>
        </div>
    </div>
    <div class=" flex bottom-0 flex-col h-20 bg-zinc-900 text-white w-full font-normal justify-center items-center">
        <div>
            นวดบ้านอาจารย์ นวดโดยอาจารย์ชำนาญนวดแก้อาการประสบการณ์กว่า 30 ปี ถ้าคุณนวดมาทุกที่แต่ไม่หาย
        </div>
        <div>
            นวดบ้านอาจาย์จะเป็นร้านสุดท้ายและคุณจะไม่ไปเสียเวลานวดที่ไหนอีกเลย เพราะ ไม่เคยมีเคสหนักๆ
            เคสไหนที่อาจารย์นวดรักษาแล้วไม่ดีขึ้น
        </div>
    </div>
    <div class="bg-white sm:py-20">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div
                class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-gray-200 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                <article class="flex max-w-xl flex-col items-start justify-between">
                    <div class="group relative">
                        <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                            <a href="#">
                                <span class="absolute inset-0"></span>
                                Boost your conversion rate
                            </a>
                        </h3>
                        <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">Illo sint voluptas. Error
                            voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus
                            unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.</p>
                    </div>
                    <div class="relative mt-8 flex items-center gap-x-4">
                        <img src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt="" class="h-10 w-10 rounded-full bg-gray-50">
                        <div class="text-sm leading-6">
                            <p class="font-semibold text-gray-900">
                                <a href="#">
                                    <span class="absolute inset-0"></span>
                                    Michael Foster
                                </a>
                            </p>
                            <p class="text-gray-600">Co-Founder / CTO</p>
                        </div>
                    </div>
                </article>
                <article class="flex max-w-xl flex-col items-start justify-between">
                    <div class="group relative">
                        <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                            <a href="#">
                                <span class="absolute inset-0"></span>
                                Boost your conversion rate
                            </a>
                        </h3>
                        <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">Illo sint voluptas. Error
                            voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus
                            unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.</p>
                    </div>
                    <div class="relative mt-8 flex items-center gap-x-4">
                        <img src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt="" class="h-10 w-10 rounded-full bg-gray-50">
                        <div class="text-sm leading-6">
                            <p class="font-semibold text-gray-900">
                                <a href="#">
                                    <span class="absolute inset-0"></span>
                                    Michael Foster
                                </a>
                            </p>
                            <p class="text-gray-600">Co-Founder / CTO</p>
                        </div>
                    </div>
                </article>
                <article class="flex max-w-xl flex-col items-start justify-between">
                    <div class="group relative">
                        <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                            <a href="#">
                                <span class="absolute inset-0"></span>
                                Boost your conversion rate
                            </a>
                        </h3>
                        <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">Illo sint voluptas. Error
                            voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus
                            unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.</p>
                    </div>
                    <div class="relative mt-8 flex items-center gap-x-4">
                        <img src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt="" class="h-10 w-10 rounded-full bg-gray-50">
                        <div class="text-sm leading-6">
                            <p class="font-semibold text-gray-900">
                                <a href="#">
                                    <span class="absolute inset-0"></span>
                                    Michael Foster
                                </a>
                            </p>
                            <p class="text-gray-600">Co-Founder / CTO</p>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    </div>
</template>

<script setup>
import { reactive, onMounted } from 'vue'
import gsap from 'gsap'

const tweened = reactive({
    number: 0
});

const year = reactive({
    number: 0
});

onMounted(() => {
    gsap.to(tweened, { duration: 1, number: 20000 })
    gsap.to(year, { duration: 1, number: 30 })
});

</script>