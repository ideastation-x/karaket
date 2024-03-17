<template>
    <header class="sticky top-0 bg-black">
        <div class="container mx-auto flex justify-between font-thin text-md p-3 text-white">
            <div class="font-light text-xl flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" height="1.2rem" fill="#fff"
                    viewBox="0 0 576 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                    <path
                        d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
                </svg>
                นวดแก้อาการบ้านการเกด
            </div>
            <div class="">
                โทร 081-111-111 Line: @Karaket
            </div>
            <div class="">
                TH | EN
            </div>
        </div>
        <div class="bg-zinc-600">
            <nav
                class="container mx-auto flex flex-col sm:flex-row items-center gap-10 font-thin py-2 p-3 text-white shadow-lg">
                <RouterLink :to="{ name: 'home' }">
                    <div class="transition hover:underline hover:underline-offset-4">
                        หน้าแรก
                    </div>
                </RouterLink>
                <RouterLink :to="{ name: 'queue' }">
                    <div class="transition hover:underline hover:underline-offset-4">
                        จองคิว
                    </div>
                </RouterLink>
                <RouterLink :to="{ name: 'contact' }">
                    <div class="transition hover:underline hover:underline-offset-4">
                        ติดต่อ
                    </div>
                </RouterLink>
            </nav>
        </div>
    </header>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>
