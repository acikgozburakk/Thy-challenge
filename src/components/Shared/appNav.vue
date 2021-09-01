<template>
<div class="defaultNav" :style="{'color': this.color ? this.color : 'black'}" >
    <p>turkishairlines.com</p>
    <p>searchFlight Challenge</p>
</div>
</template>

<script>
export default {
props: ['color'],

}
</script>

<style>
.defaultNav{
    border-bottom: 1px solid;
    display: flex;
    justify-content: space-between;
}
</style>