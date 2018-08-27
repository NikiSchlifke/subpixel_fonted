<template>
    <b-form>
        <b-button
                class="btn-lg m-2 square"
                variant="outline-primary"
                v-for="(character,index) in characterList"
                @click="$emit('toggle-char', character)"
        >
            {{character}}
        </b-button>
    </b-form>
</template>

<script>

    export default {
        name: "CharacterPicker",

        props: {
            'characters': {default: "ABCDEFGHIJKLMNOPQRSTUVWXYZ"},
            'activeCharacters': {}
        },
        computed: {
            characterList() {
                return this.characters.split('')
            }
        }
    }
</script>

<style scoped>
    .square {
        width: 2.5em;
        height: 2.5em;
    }
</style>