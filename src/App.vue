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
                        <b-card-header>
                            <b-nav pills>
                                <b-nav-item active>Paint</b-nav-item>
                            </b-nav>
                        </b-card-header>
                        <pixel-grid class="card-img-bottom"></pixel-grid>
                    </b-card>

                <b-col col auto>
                    <b-card no-body>
                        <b-tabs card>
                            <b-tab title="Caps" active>
                                <character-picker
                                characters="ABCDEFGHIJKLMNOPQRSTUVWXYZ" :activeCharacters="openCharacters" v-on:toogleChar="openCharacters.add($event)"></character-picker>
                            </b-tab>
                            <b-tab title="Small">
                                <character-picker
                                characters="abcdefghijklmnopqrstuvwxyz" :activeCharacters="openCharacters" v-on:toogleChar="openCharacters.add($event)"></character-picker>
                            </b-tab>
                            <b-tab title="Numbers">
                                <character-picker
                                        characters="0123456789" :activeCharacters="openCharacters" v-on:toogleChar="openCharacters.add($event)"></character-picker>
                            </b-tab>
                            <b-tab title="Special">
                                <character-picker
                                        characters="@ !&quot;#$%&'()*+,-./" :activeCharacters="openCharacters" v-on:toogleChar="openCharacters.add($event)"></character-picker>
                            </b-tab>
                        </b-tabs>
                    </b-card>
                </b-col>
            </b-row>
            <b-row>
            </b-row>
            <b-navbar fixed="top" >
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
                openCharacters: new Set()
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
