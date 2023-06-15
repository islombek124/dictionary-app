import { acceptHMRUpdate, defineStore } from "pinia";
import axios from "axios";

export const dbStore = defineStore("db", () => {
    const url = ref<string>("https://api.dictionaryapi.dev/api/v2/entries/en/");
    const term = ref<string>("");
    const ct = ref<string>("no");
    const dt = ref([]);
    const loading = ref<boolean>(false);
    const status = ref<number | undefined>(0);

    async function getData(): Promise<any> {
        if (term.value === "")
            return ct.value = "";

        ct.value = "no";
        loading.value = true;

        try {
            const res = await axios(url.value + term.value);
            status.value = res.status;
            dt.value = res.data;
        }
        catch (err: any) {
            status.value = undefined;
        }

        loading.value = false;
    }

    return { loading, getData, term, ct, dt, status };
});

if (import.meta.hot)
    import.meta.hot.accept(acceptHMRUpdate(dbStore, import.meta.hot));
