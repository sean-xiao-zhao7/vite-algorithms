<template>
    <div>
        <header>
            <h1>Algorithms</h1>
            <nav>
                <router-link to="/bst">Binary search tree</router-link>
                <router-link to="/queue">Queue</router-link>
            </nav>
        </header>
        <router-view></router-view>
    </div>
</template>

<style scoped>
nav {
    display: grid;
    grid-column-gap: 1rem;
    grid-template-columns: repeat(2, 1fr);
}
</style>
