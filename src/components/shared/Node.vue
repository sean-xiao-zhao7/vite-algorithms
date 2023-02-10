<script>
export default {
    props: ["value"],
};
</script>

<template>
    <div id="node">
        {{ this.value }}
    </div>
</template>

<style scoped>
#node {
    border: solid 1px black;
    padding: 1.2rem;
    width: 1.2rem;
    height: 1.2rem;
    border-radius: 3rem;
    font-size: 1rem;
}
</style>
