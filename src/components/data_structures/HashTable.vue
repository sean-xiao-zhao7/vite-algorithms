<script>
import HashTable from "../../model/HashTable";

export default {
    data() {
        return {
            size: 10,
            hashTable: null,
            hashTableData: null,
            key: null,
            value: null,
            getKey: null,
            getResultKey: null,
            getResultValue: null,
        };
    },
    mounted() {
        this.hashTable = new HashTable(this.size);
        this.hashTableData = this.hashTable.data;
    },
    methods: {
        set() {
            if (this.key && this.value) {
                this.hashTable.set(this.key, this.value);
                this.key = null;
                this.value = null;
            } else {
                alert("Enter both key and value.");
            }
        },
        get() {
            if (this.getKey) {
                this.getResultValue = this.hashTable.get(this.getKey);
                this.getResultKey = this.getKey;
                this.getKey = null;
            } else {
                alert("Enter key.");
            }
        },
        entryUpdated(domElement) {
            console.log(domElement);
        },
    },
    watch: {
        hashTableData(oldHashTableData, newHashTableData) {
            console.log(newHashTableData);
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
        <div>
            <input type="text" placeholder="Key" v-model="getKey" />
            <button @click="get">Get</button>
        </div>
        <div id="get-result-container" v-if="getResultKey">
            <p>{{ getResultKey }}:</p>
            <p>{{ getResultValue }}</p>
        </div>
        <div id="hashtable-container">
            <div
                class="hashtable-entry"
                v-for="(entryValue, index) in hashTableData"
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
    padding-top: 0.5rem;
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
#get-result-container {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    padding: 0.5rem;
    background-color: whitesmoke;
    margin-top: 0.5rem;
}
</style>
