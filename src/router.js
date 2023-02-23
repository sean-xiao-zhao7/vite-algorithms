import { createRouter, createWebHistory } from "vue-router";
import BinarySearchTree from "./components/data_structures/BinarySearchTree.vue";
import Queue from "./components/data_structures/Queue.vue";
import HashTable from "./components/data_structures/HashTable.vue";

const routes = [
    { path: "/", component: BinarySearchTree },
    { path: "/bst", component: BinarySearchTree },
    { path: "/queue", component: Queue },
    { path: "/hash-table", component: HashTable },
];

export const router = createRouter({
    history: createWebHistory(),
    routes,
});
