<template>
<div class="wrapper">
    <default-nav color="black"></default-nav>
</div>
  
</template>

<script>
import defaultNav from '../components/Shared/appNav.vue';
export default {
components: {
    defaultNav
  }
}
</script>

<style>
.wrapper{
    padding: 10px 15px;
}
</style>