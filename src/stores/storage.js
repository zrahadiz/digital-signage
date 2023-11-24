import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useStorageStore = defineStore({
    id: "storage",
    state: () => ({
        defActiveStatus: 'data',
    }),
});
