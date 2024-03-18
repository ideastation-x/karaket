<template>
    <div class="flex pt-10 flex-col justify-center items-center bg-[url('@/assets/bg-6.webp')] bg-cover">
        <div class="lg:container px-10 2xl:px-24">
            <div class="flex flex-col justify-center items-center gap-4 font-light text-white">
                <div class="text-4xl font-medium">
                    เปิดบ้านนวดแก้อาการโดยอาจารย์มากประสบการณ์กว่า {{ year.number.toFixed(0) }} ปี
                </div>
                <div class="text-4xl">
                    นวดรักษาลูกค้าเคสหนักๆหายมาแล้วกว่า {{ tweened.number.toFixed(0) }} คน
                </div>
                <div class="text-2xl italic text-blue-300">
                    คุณตระเวนนวดมาหลายร้านแต่ยังไม่หาย
                    <span class="font-normal underline underline-offset-8">
                        คุณเจอปัญหานี้ใช่ไหม ?
                    </span>
                </div>
            </div>
        </div>
        <div class="xl:container 2xl:px-24">
            <div class="flex flex-col md:flex-row items-end lg:items-center lg:gap-10 text-white text-sm md:text-base">
                <div class="rounded-xl overflow-hidden">
                    <img src="@/assets/bg-person-1.webp" width="800">
                </div>
                <div class="flex flex-col gap-5 2xl:gap-5 text-sm 2xl:text-base">
                    <div class="flex items-center gap-1.5">
                        <svg xmlns="http://www.w3.org/2000/svg" class="fill-green-500 h-5"
                            viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                            <path
                                d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z" />
                        </svg>
                        ไปนวดแก้อาการมาแล้วหลายร้าน แต่ไม่เจอหมอดี
                    </div>
                    <div class="flex items-center gap-1.5">
                        <svg xmlns="http://www.w3.org/2000/svg" class="fill-green-500 h-5"
                            viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                            <path
                                d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z" />
                        </svg>
                        นวดร้านเดิมแต่ต้องเปลี่ยนหมอ เพราะ ไม่รู้ว่าหมอคนไหนนวดดี นวดหาย
                    </div>
                    <div class="flex items-center gap-1.5">
                        <svg xmlns="http://www.w3.org/2000/svg" class="fill-green-500 h-5"
                            viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                            <path
                                d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z" />
                        </svg>
                        หมอปฎิเสธเคสหนัก เพราะ ไม่กล้านวดจุดสำคัญหรือลูกค้ามีโรคประจำตัว เช่น อัมพฤต อัมพาต
                    </div>
                    <div class="flex items-center gap-1.5">
                        <svg xmlns="http://www.w3.org/2000/svg" class="fill-green-500 h-5"
                            viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                            <path
                                d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z" />
                        </svg>
                        ไปนวดร้านนวดแก้อาการ แต่เจอหมอที่เน้นนวดหนัก ไม่นวดแก้อาการจริง ทำให้ไม่หาย
                    </div>
                    <div class="flex items-center gap-1.5">
                        <svg xmlns="http://www.w3.org/2000/svg" class="fill-green-500 h-5"
                            viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                            <path
                                d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z" />
                        </svg>
                        หาหมอแผนปัจจุบัน หมอบอกหาสาเหตุโรคไม่เจอ กินยามานานแต่ยังไม่หาย
                    </div>
                    <div class="flex items-center gap-1.5">
                        <svg xmlns="http://www.w3.org/2000/svg" class="fill-green-500 h-5"
                            viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                            <path
                                d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z" />
                        </svg>
                        ผ่าตัดมา เกิดพังผืดเกาะ หมอให้ทำกายภาพเท่าไหร่ก็ไม่ดีขึ้น นวดร้านไหนก็ไม่ดีขึ้น
                    </div>
                    <div class="flex gap-2">
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
        <div class="xl:container 2xl:px-24">
            <div
                class="flex flex-col py-5 bg-zinc-900 text-white w-full font-normal justify-center items-center text-sm lg:text-lg">
                <div>
                    ด้วยความเชี่ยวชาญการนวดแก้อาการที่สั่งสมมากว่า 30 ปี ของอาจารย์
                </div>
                <div>
                    ถ้าคุณเป็นเยอะ มีอาการเรื้อรัง นวดที่ไหนก็ไม่หายสักที มาที่นี่
                    <span class="underline underline-offset-8 italic font-medium">
                        นวดบ้านอาจารย์ กล้าการันตี
                    </span>
                </div>
            </div>
        </div>
    </div>
    <div class="bg-zinc-400">
        <ExampleView />
        <CaseView />
        <FeatureView />
        <BottomView />
    </div>
</template>

<script setup>
import { reactive, onMounted } from 'vue'
import gsap from 'gsap'
import ExampleView from '@/views/ExampleView.vue'
import CaseView from '@/views/CaseView.vue'
import FeatureView from '@/views/FeatureView.vue'
import BottomView from '@/views/BottomView.vue'

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