<template>
    <svg :viewBox="boundingBox" :width="pixelWidth" :height="pixelHeight">
        <g stroke="white" stroke-width="1">
            <rect @click="$emit('toggle-red', red)" :x="0" :y="0" :width="subPixelWidth" :height="3*subPixelWidth" :fill="getRed(red)"></rect>
            <rect @click="$emit('toggle-green', green)" :x="subPixelWidth" y="0" :width="subPixelWidth" :height="3*subPixelWidth" :fill="getGreen(green)"></rect>
            <rect @click="$emit('toggle-blue', blue)" :x="2*subPixelWidth" y="0" :width="subPixelWidth" :height="3*subPixelWidth" :fill="getBlue(blue)"></rect>
        </g>

    </svg>
</template>

<script>
    export default {
        name: "PixelRGB",
        props: {
            subPixelWidth: {default: 10},
            showColor: { default: false },
            red: { default: 255 },
            green: { default: 255 },
            blue: { default: 255 }
        },
        computed: {
            pixelWidth() {
                return 3 * this.subPixelWidth
            },
            pixelHeight() {
                return 3 * this.subPixelWidth
            },
            brightValue() {
                return this.showColor ? this.brightValues.color : this.brightValues.monochrome
            },
            boundingBox() {
                return "0 0 "+this.pixelWidth+" "+this.pixelHeight
            }

        },
        data() {
            return {

            }
        },
        methods: {
            getRed(value) {
                return this.showColor ? this.$chroma(value,0,0) : this.$chroma(value,0,0).desaturate(100);
            },
            getGreen(value) {
                return this.showColor ? this.$chroma(0,value,0) : this.$chroma(0,value,0).desaturate(100);
            },
            getBlue(value) {
                return this.showColor ? this.$chroma(0,0,value) : this.$chroma(0,0,value).desaturate(100);
            },

        }
    }
</script>

<style scoped>
    .z-back {
        z-index: -1000;
    }
</style>