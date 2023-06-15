<script setup lang="ts">
    import { dbStore } from "~/stores/db";

    const props = defineProps<{ fontClass: string }>();

    const store = dbStore();

    function player(src: string): void {
        new Audio(src).play();
    }
</script>

<template>
    <div v-if="store.status === 200" class="mt-5 w-full mx-auto space-y-7" :class="[store.loading ? 'hidden' : '']">
        <div class="flex items-center justify-between">
            <div>
                <h1 class="text-5xl font-bold mb-2" :class="props.fontClass">
                    {{ store.dt[0].word }}
                </h1>
                <span class="text-violet-600 text-lg">{{ store.dt[0].phonetic }}</span>
            </div>
            <button class="rounded-full bg-violet-600/20 p-6 flex items-center justify-center" @click="player(store.dt[0].phonetics[store.dt[0].phonetics.length - 1].audio)">
                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0V21L21 10.5L0 0Z" fill="#A445ED" />
                </svg>
            </button>
        </div>
        <div class="space-y-7">
            <div class="space-y-7">
                <div class="flex items-center justify-between gap-x-3">
                    <h3 class="text-lg">
                        noun
                    </h3>
                    <div class="w-full h-px bg-[#3A3A3A]" />
                </div>
                <div class="space-y-7">
                    <h2 class="text-[#757575] text-lg" :class="props.fontClass">
                        Meaning
                    </h2>
                    <ul class="list-disc list-violet-600 space-y-2 mt-5 ml-10">
                        <li v-for="(definition, index) in store.dt[0].meanings[0].definitions" :key="index">
                            {{ definition.definition }}
                        </li>
                    </ul>
                    <div class="text-[#757575] text-lg flex items-center gap-x-7" :class="props.fontClass">
                        {{ store.dt[0].meanings[0].synonyms.length ? 'Synonyms' : null }}
                        <h3 v-for="(synonym, index) in store.dt[0].meanings[0].synonyms" :key="index" class="text-violet-600 font-bold">
                            {{ synonym }}
                        </h3>
                    </div>
                </div>
            </div>
            <div class="space-y-7">
                <div class="flex items-center justify-between gap-x-3">
                    <h3 class="text-lg">
                        verb
                    </h3>
                    <div class="w-full h-px bg-[#3A3A3A]" />
                </div>
                <div>
                    <h2 class="text-[#757575] text-lg" :class="props.fontClass">
                        Meaning
                    </h2>
                    <ul class="list-disc list-violet-600 space-y-2 mt-5 ml-10">
                        <li v-for="(definition, index) in store.dt[0].meanings[1].definitions" :key="index">
                            {{ definition.definition }}
                        </li>
                        <h2 v-for="(definition, index) in store.dt[0].meanings[1].definitions" :key="index" class="text-[#757575] text-lg" :class="props.fontClass">
                            {{ definition.example === "" ? null : definition.example }}
                        </h2>
                    </ul>
                </div>
            </div>
            <div class="w-full h-px bg-[#3A3A3A]" />
            <div class="underline text-[#757575] flex sm:items-center flex-col sm:gap-x-7 gap-y-3" :class="props.fontClass">
                Source
                <a v-for="(url, index) in store.dt[0].sourceUrls" :key="index" class="dark:text-white text-black flex items-center gap-x-3" :href="url">
                  {{ url }} 
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.09091 4.29545C6.50512 4.29545 6.84091 3.95967 6.84091 3.54545C6.84091 3.13124 6.50512 2.79545 6.09091 2.79545V4.29545ZM1.42603 3.97148L1.95635 4.50182L1.95637 4.50181L1.42603 3.97148ZM1.42603 12.574L1.95638 12.0437L1.95637 12.0436L1.42603 12.574ZM11.2045 7.90909C11.2045 7.49488 10.8688 7.15909 10.4545 7.15909C10.0403 7.15909 9.70455 7.49488 9.70455 7.90909H11.2045ZM4.83331 8.10603C4.54041 8.39893 4.54041 8.8738 4.83331 9.16669C5.1262 9.45959 5.60107 9.45959 5.89397 9.16669L4.83331 8.10603ZM13.1667 1.89397C13.4596 1.60107 13.4596 1.1262 13.1667 0.833306C12.8738 0.540413 12.3989 0.540413 12.106 0.833306L13.1667 1.89397ZM12.6364 2.11364C13.0506 2.11364 13.3864 1.77785 13.3864 1.36364C13.3864 0.949423 13.0506 0.613636 12.6364 0.613636V2.11364ZM9 0.613636C8.58579 0.613636 8.25 0.949423 8.25 1.36364C8.25 1.77785 8.58579 2.11364 9 2.11364V0.613636ZM13.3864 1.36364C13.3864 0.949423 13.0506 0.613636 12.6364 0.613636C12.2221 0.613636 11.8864 0.949423 11.8864 1.36364H13.3864ZM11.8864 5C11.8864 5.41421 12.2221 5.75 12.6364 5.75C13.0506 5.75 13.3864 5.41421 13.3864 5H11.8864ZM6.09091 2.79545H2.45455V4.29545H6.09091V2.79545ZM2.45455 2.79545C1.86987 2.79545 1.30913 3.02771 0.895692 3.44116L1.95637 4.50181C2.08849 4.36968 2.26769 4.29545 2.45455 4.29545V2.79545ZM0.895706 3.44115C0.482259 3.85458 0.25 4.41532 0.25 5H1.75C1.75 4.81314 1.82423 4.63394 1.95635 4.50182L0.895706 3.44115ZM0.25 5V11.5455H1.75V5H0.25ZM0.25 11.5455C0.25 12.1301 0.482269 12.6908 0.895685 13.1043L1.95637 12.0436C1.82422 11.9115 1.75 11.7323 1.75 11.5455H0.25ZM0.895678 13.1043C1.30913 13.5178 1.86988 13.75 2.45455 13.75V12.25C2.26768 12.25 2.08849 12.1758 1.95638 12.0437L0.895678 13.1043ZM2.45455 13.75H9V12.25H2.45455V13.75ZM9 13.75C9.58466 13.75 10.1454 13.5177 10.5588 13.1043L9.49818 12.0436C9.36603 12.1758 9.18683 12.25 9 12.25V13.75ZM10.5588 13.1043C10.9723 12.6908 11.2045 12.1301 11.2045 11.5455H9.70455C9.70455 11.7323 9.63033 11.9115 9.49818 12.0436L10.5588 13.1043ZM11.2045 11.5455V7.90909H9.70455V11.5455H11.2045ZM5.89397 9.16669L13.1667 1.89397L12.106 0.833306L4.83331 8.10603L5.89397 9.16669ZM12.6364 0.613636H9V2.11364H12.6364V0.613636ZM11.8864 1.36364V5H13.3864V1.36364H11.8864Z" fill="#757575" />
                  </svg>
                </a>
            </div>
        </div>
    </div>
    <div v-else-if="store.status === undefined || store.status === 404" class="mx-auto">
        <div class="content text-center space-y-7 mt-20">
            <h1 class="text-5xl">
                😕
            </h1>
            <h3 class="text-xl font-black tracking-wider">
                No Definitions Found
            </h3>
            <p>Sorry pal, we couldn't find definitions for the word you were looking for. You can try the search again at later time or head to the web instead.</p>
        </div>
    </div>
    <span v-else />
</template>
