<script setup lang="ts">
<<<<<<< HEAD
    const systemFont = ref<string>("font-sans");

    function changeFont(c: string): void {
        systemFont.value = c;
=======
    import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/vue";
    import clickSound from "~/components/assets/click.mp3";

    const activeTab = ref<0 | 1 | 2>(0);
    const currentPomodorro = ref<number>(0);

    function playSound(): void {
        const audio = new Audio(clickSound);
        audio.play();
    }

    function onTimerEnd(name?: "pomodorro" | "short-break" | "long-break"): void {
        if (!name)
            return;

        if (name !== "pomodorro") {
            activeTab.value = 0;
            return;
        }

        currentPomodorro.value++;
        activeTab.value = currentPomodorro.value && currentPomodorro.value % 4 === 0 ? 2 : 1;
>>>>>>> 758e20fb8a5b0e6bcded8f413d2b39ec4d042f5f
    }
</script>

<template>
<<<<<<< HEAD
    <main class="max-w-3xl mx-auto p-3 pb-10 text-gray-700 dark:text-gray-200">
        <AppNav @change-font="changeFont" />
        <AppSearch />
        <AppResult :font-class="systemFont" />
=======
    <main class="h-screen flex justify-center text-center text-white">
        <div class="mx-auto max-w-xl w-full space-y-9 mt-3">
            <header>
                <AppNav>
                    <template #modal>
                        <AppModal />
                    </template>
                </AppNav>
            </header>
            <div class="mx-auto max-w-lg w-full space-y-5">
                <div class="rounded-lg bg-white/10 p-10 w-full mx-auto shadow-lg">
                    <TabGroup :selected-index="activeTab" @change="playSound">
                        <TabList class="flex items-center space-x-7 text-base justify-center">
                            <Tab v-slot="{ selected }" as="template">
                                <button
                                    class="rounded px-4 py-2 text-white"
                                    :class="{ 'bg-gray-600/50': selected, '': !selected }" @click="activeTab = 0"
                                >
                                    Pomodoro
                                </button>
                            </Tab>
                            <Tab v-slot="{ selected }" as="template">
                                <button
                                    class="rounded px-4 py-2 text-white"
                                    :class="{ 'bg-gray-600/50 ': selected, '': !selected }" @click="activeTab = 1"
                                >
                                    Short break
                                </button>
                            </Tab>
                            <Tab v-slot="{ selected }" as="template">
                                <button
                                    class="rounded px-4 py-2 text-white"
                                    :class="{ 'bg-gray-600/50': selected, '': !selected }" @click="activeTab = 2"
                                >
                                    Long break
                                </button>
                            </Tab>
                        </TabList>
                        <TabPanels class="mt-5">
                            <TabPanel>
                                <AppTimer :time="1500" @end="onTimerEnd('pomodorro')" />
                            </TabPanel>
                            <TabPanel>
                                <AppTimer :time="300" @end="onTimerEnd('short-break')" />
                            </TabPanel>
                            <TabPanel>
                                <AppTimer :time="900" @end="onTimerEnd('long-break')" />
                            </TabPanel>
                        </TabPanels>
                    </TabGroup>
                </div>
            </div>
        </div>
>>>>>>> 758e20fb8a5b0e6bcded8f413d2b39ec4d042f5f
    </main>
</template>

<style>
* {
    outline: none;
}
</style>
