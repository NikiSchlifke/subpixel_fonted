<template>
    <b-form>
        <b-button
                class="btn-lg m-1 square"
                :pressed="glyphs[character].selected"
                variant="outline-primary"
                v-for="(character,index) in Object.keys(glyphs)"
                @click="$emit('toggle-char', character)"
        >
            {{character}}
        </b-button>
    </b-form>
</template>

<script>

    export default {
        name: "CharacterPicker",

        props: [
            'glyphs'
        ]
    }
</script>

<style scoped>
    .square {
        width: 2.5em;
        height: 2.5em;
    }
</style>