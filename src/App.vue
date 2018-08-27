<template>
    <div id="app">
        <b-container fluid>
            <b-row>
                <b-col col md="2" lg="3" sm="12">
                    <b-card no-body>
                        <b-card-header>
                            Brushes
                        </b-card-header>
                    </b-card>
                </b-col>
                <b-card no-body>
                    <b-tabs card>
                        <b-tab :title="char" v-for="(char, index) in Object.keys(openCharacters)" dismissible></b-tab>
                    </b-tabs>
                    <pixel-grid class="card-img-bottom"></pixel-grid>
                </b-card>

                <b-col col auto>
                    <b-card no-body>
                        <b-tabs card>
                            <b-tab title="Caps" active>
                                <character-picker
                                        :glyphs="characters.caps"
                                        v-on:toggle-char="$event.open()"></character-picker>
                            </b-tab>
                            <b-tab title="Small">
                                <character-picker
                                        :glyphs="characters.small"
                                        v-on:toggle-char="$event.open()">"></character-picker>
                            </b-tab>
                            <b-tab title="Numbers">
                                <character-picker
                                        :glyphs="characters.numbers"
                                        v-on:toggle-char="$event.open()"></character-picker>
                            </b-tab>
                            <b-tab title="Special">
                                <character-picker
                                        :glyphs="characters.special"
                                        v-on:toggle-char="$event.open()">"></character-picker>
                            </b-tab>
                        </b-tabs>
                    </b-card>
                </b-col>
            </b-row>
            <b-row>
            </b-row>
            <b-navbar fixed="top">
            </b-navbar>
        </b-container>

    </div>
</template>

<script>
    import Swatches from 'vue-swatches'
    import CharacterPicker from './components/CharacterPicker'
    import PixelGrid from './components/PixelGrid'

    export default {
        name: 'app',
        components: {
            Swatches,
            PixelGrid,
            CharacterPicker
        },
        props: {
            primaryColor: {default: 'white'},

        },
        data() {
            return {
                characters: {
                    caps: this.makeCharacterList("ABCDEFGHIJKLMNOPQRSTUVWXYZ"),
                    small: this.makeCharacterList("abcdefghijklmnopqrstuvwxyz"),
                    numbers: this.makeCharacterList("0123456789"),
                    special: this.makeCharacterList("@ !&quot;#$%&'()*+,-./"),
                }
            }
        },
        computed: {
            allCharacters() {
                return Object.assign({}, this.characters.caps, this.characters.small, this.characters.numbers, this.characters.special)
            },
            openCharacters() {
                return this.$_.pickBy(this.allCharacters, (item) => item.selected )
            }
        },
        methods: {
            makeCharacterList(chars) {
                return chars.split('').reduce((result, item) => {
                    result[item] = {selected: false, close() { this.selected = false }, open() { this.selected = true }, toggle() { this.selected = !this.selected} };
                    return result
                }, {})
            }
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

    .bg-black {
        background-color: black;
    }
</style>
