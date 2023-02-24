<script>
import HashTable from "../../model/HashTable";

export default {
    data() {
        return {
            size: 10,
            key: null,
            value: null,
            hashTable: new HashTable(10),
        };
    },
    methods: {
        set() {
            if (this.key && this.value) {
                this.hashTable.set(this.key, this.value);
            } else {
                alert("Enter both key and value.");
            }
        },
    },
};
</script>

<template>
    <div id="hashtable">
        <div>
            <input type="text" placeholder="Key" v-model="key" />
            <input type="text" placeholder="Value" v-model="value" />
            <button @click="set">Set</button>
        </div>
        <div id="hashtable-container">
            <div
                class="hashtable-entry"
                v-for="(entryValue, index) in hashTable.data"
                :key="index"
            >
                <div class="entry-key">
                    {{ index }}
                </div>
                <div class="entry-value">
                    {{ entryValue ? entryValue : "None" }}
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
#hashtable {
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
}
#hashtable-container {
    padding-top: 2rem;
    border-bottom: solid 1px whitesmoke;
}
.hashtable-entry {
    border: solid 1px whitesmoke;
    border-bottom: 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding: 0.5rem;
}
.entry-key {
    border-right: solid 1px whitesmoke;
}
</style>
