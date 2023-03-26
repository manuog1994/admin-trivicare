<template>
    <div class="breadcrumb-area bg-dark pt-3 pb-3">
        <div class="container">
            <div class="breadcrumb-content text-center">
                <div class="pro-sidebar-search d-flex align-items-center">
                    <input v-model="search" type="text" placeholder="Buscar...">
                    <i class="pe-7s-search fs-1 ms-2 text-light"></i>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

input {
    border: none;
    border-radius: 0;
    background: #fff;
    padding: 0.5rem 1rem;
    width: 100%;
    font-size: 1rem;
    color: #000;
}

</style>

<script>
    export default {
        data() {
            return {
                search: ''
            }
        },

        watch: {
            search() {
                this.$emit('search', this.search);
            }
        }

    };
</script>