<template>
    <header class="sticky top-0 z-10 bg-zinc-900">
        <div class="container mx-auto 2xl:px-24 flex items-center justify-between font-thin text-md py-3 text-white">
            <img src="@/assets/icon.png" class="h-8">
            <div class="flex items-center gap-5">
                <div class="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-7 fill-white">
                        <path
                            d="M19.95 21q-3.125 0-6.175-1.362t-5.55-3.863q-2.5-2.5-3.862-5.55T3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.238t.325.562l.65 3.5q.05.4-.025.675T9.4 8.45L6.975 10.9q.5.925 1.187 1.787t1.513 1.663q.775.775 1.625 1.438T13.1 17l2.35-2.35q.225-.225.588-.337t.712-.063l3.45.7q.35.1.575.363T21 15.9v4.05q0 .45-.3.75t-.75.3" />
                    </svg>
                    โทร. 081-111-111
                </div>
                <div class="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-7 fill-white">
                        <path
                            d="m5 8.75l-2.75-3.1q-.425-.5-.162-1.075Q2.35 4 3 4h17q.825 0 1.413.588Q22 5.175 22 6v12q0 .825-.587 1.413Q20.825 20 20 20H7q-.825 0-1.412-.587Q5 18.825 5 18ZM9 13h9q.425 0 .712-.288Q19 12.425 19 12t-.288-.713Q18.425 11 18 11H9q-.425 0-.712.287Q8 11.575 8 12t.288.712Q8.575 13 9 13Zm0 3h6q.425 0 .713-.288Q16 15.425 16 15t-.287-.713Q15.425 14 15 14H9q-.425 0-.712.287Q8 14.575 8 15t.288.712Q8.575 16 9 16Zm0-6h9q.425 0 .712-.288Q19 9.425 19 9t-.288-.713Q18.425 8 18 8H9q-.425 0-.712.287Q8 8.575 8 9t.288.712Q8.575 10 9 10Z" />
                    </svg>
                    Line: @Karaket
                </div>
            </div>
            <div class="">
                TH | EN
            </div>
        </div>
        <div class="bg-zinc-500 hidden md:flex shadow-lg">
            <nav
                class="container mx-auto 2xl:px-24 flex flex-col sm:flex-row items-center gap-10 font-thin py-1 text-white">
                <RouterLink :to="{ name: 'home' }">
                    <div class="transition hover:underline hover:underline-offset-4">
                        หน้าแรก
                    </div>
                </RouterLink>
                <span>|</span>
                <RouterLink :to="{ name: 'queue' }">
                    <div class="transition hover:underline hover:underline-offset-4">
                        จองคิว
                    </div>
                </RouterLink>
                <span>|</span>
                <RouterLink :to="{ name: 'contact' }">
                    <div class="transition hover:underline hover:underline-offset-4">
                        ติดต่อ
                    </div>
                </RouterLink>
                <span>|</span>
                <RouterLink :to="{ name: 'story' }">
                    <div class="transition hover:underline hover:underline-offset-4">
                        ประวัติอาจารย์
                    </div>
                </RouterLink>
            </nav>
        </div>
    </header>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>
