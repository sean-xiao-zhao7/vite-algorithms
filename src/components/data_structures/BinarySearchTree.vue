<script>
import BinarySearchTree from "../../model/BinarySearchTree";
import Node from "../shared/Node.vue";

export default {
    components: { Node },
    data() {
        return {
            binarySearchTree: new BinarySearchTree(1),
        };
    },
};
</script>

<template>
    <h3>Binary search tree</h3>
    <div id="bst">
        <node :value="binarySearchTree.root.value"></node>
    </div>
</template>

<style scoped>
#bst {
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
