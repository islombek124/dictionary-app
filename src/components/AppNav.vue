<<<<<<< HEAD
<script setup lang="ts">
    import {
        Listbox,
        ListboxButton,
        ListboxLabel,
        ListboxOption,
        ListboxOptions,
        Switch,
    } from "@headlessui/vue";
    import { ChevronDownIcon } from "@heroicons/vue/20/solid";

    const emit = defineEmits<{
        (e: "changeFont", c: string): void
    }>();

    const enabled = ref<any>(isDark.value);
    const menus = [{ title: "Sans-serif", class: "font-sans" }, { title: "Serif", class: "font-serif tracking-wider" }, { title: "Mono", class: "font-mono" }];
    const selectedMenu = ref<object>(menus[0]);

    watch(selectedMenu, (val: any) => {
        emit("changeFont", val.class);
    });
</script>

<template>
    <nav class="flex items-center justify-between">
        <div class="flex items-center">
            <a href="/">
                <svg width="34" height="38" viewBox="0 0 34 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.25 33C0.25 33.4142 0.585786 33.75 1 33.75C1.41421 33.75 1.75 33.4142 1.75 33H0.25ZM2.17157 2.17157L1.64124 1.64124L1.64124 1.64124L2.17157 2.17157ZM32.6485 1.35147L32.1181 1.88175L32.1182 1.88186L32.6485 1.35147ZM32.25 28.428C32.25 28.8422 32.5858 29.178 33 29.178C33.4142 29.178 33.75 28.8422 33.75 28.428H32.25ZM5 28.25C4.58579 28.25 4.25 28.5858 4.25 29C4.25 29.4142 4.58579 29.75 5 29.75V28.25ZM33 29.75C33.4142 29.75 33.75 29.4142 33.75 29C33.75 28.5858 33.4142 28.25 33 28.25V29.75ZM5 36.25C4.58579 36.25 4.25 36.5858 4.25 37C4.25 37.4142 4.58579 37.75 5 37.75V36.25ZM33 37.75C33.4142 37.75 33.75 37.4142 33.75 37C33.75 36.5858 33.4142 36.25 33 36.25V37.75ZM1.75 33V5H0.25V33H1.75ZM1.75 5C1.75 4.13804 2.09241 3.3114 2.7019 2.7019L1.64124 1.64124C0.750449 2.53204 0.25 3.74022 0.25 5H1.75ZM2.7019 2.7019C3.3114 2.09241 4.13802 1.75 5 1.75V0.25C3.74018 0.25 2.53204 0.750451 1.64124 1.64124L2.7019 2.7019ZM5 1.75H31.8V0.25H5V1.75ZM31.8 1.75C31.9194 1.75 32.0338 1.79742 32.1181 1.88175L33.1789 0.821187C32.8132 0.455444 32.3172 0.25 31.8 0.25V1.75ZM32.1182 1.88186C32.2026 1.96621 32.25 2.08062 32.25 2.2H33.75C33.75 1.68286 33.5446 1.18683 33.1788 0.821081L32.1182 1.88186ZM32.25 2.2V28.428H33.75V2.2H32.25ZM5 29.75H33V28.25H5V29.75ZM5 37.75H33V36.25H5V37.75Z" fill="#757575" />
                    <path d="M5 37C3.9391 37 2.92172 36.5786 2.17157 35.8284C1.42143 35.0783 1 34.0609 1 33C1 31.9391 1.42143 30.9217 2.17157 30.1716C2.92172 29.4214 3.9391 29 5 29" stroke="#757575" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M11 9H23" stroke="#757575" stroke-width="1.5" stroke-linecap="round" />
                </svg>

            </a>
        </div>
        <div class="flex items-center sm:gap-x-6 gap-x-2 z-50">
            <Listbox v-model="selectedMenu">
                <div class="relative mt-1">
                    <ListboxButton
                        class="relative max-w-32 w-full cursor-pointer rounded-lg py-2 pl-3 pr-10 text-left dark:shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm"
                    >
                        <span class="block truncate text-base" :class="selectedMenu.class">{{ selectedMenu.title }}</span>
                        <span
                            class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
                        >
                            <ChevronDownIcon
                                class="h-5 w-5 text-gray-400"
                                aria-hidden="true"
                            />
                        </span>
                    </ListboxButton>

                    <transition
                        leave-active-class="transition duration-100 ease-in"
                        leave-from-class="opacity-100"
                        leave-to-class="opacity-0"
                    >
                        <ListboxOptions
                            class="absolute -left-1/2 mt-1 max-h-60 w-46 overflow-auto rounded-md dark:bg-black bg-white pl-4 py-4 text-base shadow-lg dark:shadow-violet-900 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                        >
                            <ListboxOption
                                v-for="menu in menus"
                                v-slot="{ active }"
                                :key="menu.title"
                                :value="menu"
                                as="template"
                            >
                                <li
                                    class="relative cursor-pointer text-base select-none p-1" :class="[
                                        active ? 'text-violet-900' : 'text-black dark:text-white',
                                    ]"
                                >
                                    <span
                                        class="block whitespace-nowrap font-semibold" :class="[
                                            `${menu.class}`,
                                        ]"
                                    >{{ menu.title }}</span>
                                </li>
                            </ListboxOption>
                        </ListboxOptions>
                    </transition>
                </div>
            </Listbox>
            <span>
                <svg width="1" height="32" viewBox="0 0 1 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="1" height="32" fill="#E9E9E9" />
                </svg>
            </span>
            <div class="py-16 flex items-center gap-x-5">
                <Switch
                    v-model="enabled"
                    :class="enabled ? 'bg-violet-700' : 'bg-gray-700 hover:bg-violet-900'"
                    class="relative inline-flex h-[28px] w-[54px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                    @click="toggleDark()"
                >
                    <span
                        aria-hidden="true"
                        :class="enabled ? 'translate-x-6.5' : 'translate-x-0'"
                        class="pointer-events-none inline-block h-[24px] w-[24px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out"
                    />
                </Switch>
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1 10.449C0.998458 12.8283 1.80169 15.1383 3.27914 17.0033C4.75659 18.8683 6.82139 20.1788 9.13799 20.7218C11.4545 21.2647 13.8866 21.0082 16.039 19.994C18.1912 18.9797 19.9373 17.2673 20.9931 15.1352C11.5442 15.1352 6.85799 10.4479 6.85799 1C5.09842 1.87311 3.61767 3.22033 2.58266 4.88981C1.54765 6.5593 0.999502 8.48469 1 10.449Z" :stroke="isDark ? '#6D28D9' : '#757575'" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </div>
=======
<template>
    <nav class="w-full flex items-center justify-between border-b  border-gray-700/20 py-3">
        <div class="flex items-center space-x-1 text-lg font-bold">
            <font-awesome-icon icon="fa-solid fa-circle-check" class="text-2xl" /><span>Pomodoro App</span>
        </div>
        <div>
            <slot name="modal" />
>>>>>>> 758e20fb8a5b0e6bcded8f413d2b39ec4d042f5f
        </div>
    </nav>
</template>
