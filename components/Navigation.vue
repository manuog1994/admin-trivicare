<template>
    <client-only>
        <div class="d-flex justify-content-around">
            <div class="d-flex col-7">
                <nav>
                    <ul class="d-flex justify-content-around">
                        <li class="p-nav">
                            <n-link to="/shop">Ver Todo</n-link>
                         </li>
                            <li v-for="category in categories" :key="category.id" class="p-nav">
                                <n-link :to="`/shop?category=${category.slug}`">{{ category.name }}</n-link>
                            </li>
                         <li class="p-nav">
                            <n-link to="/contact">Contacto</n-link>
                        </li>
                     </ul>
                </nav>
            </div>
            <div class="col-5">
                <div class="">
                    <div class="d-flex justify-content-end">
                        <p class="p-text">
                            <i class="pe-7s-phone"></i>
                             Atención al cliente 10:00 AM a 20:00 PM || 
                            <a href="tel:+34613036942">613 036 942</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </client-only>
</template>

<style>
    a.link-nav{
        color: #666666;
    }

    .p-nav{
        padding: 20px;
        
    }

    .p-text{
        padding: 20px;
    }

    @media only screen and (max-width: 1088px) {
        .p-nav{
            padding-top: 20px;
            padding-bottom: 20px;
            padding-right: 15px;
            padding-left: 15px;
        }
    }

    @media only screen and (max-width: 1010px) {
        .p-nav{
            padding-top: 30px;
            padding-bottom: 20px;
            padding-right: 10px;
            padding-left: 10px;
        }
    }

    @media only screen and (max-width: 1065px) {
        .p-text{
            padding-top: 20px;
            padding-bottom: 20px;
            padding-right: 10px;
            padding-left: 10px;
            text-align: center;
        }
    }

    @media only screen and (max-width: 1005px) {
        .p-text{
            padding-top: 20px;
            padding-bottom: 20px;
            padding-right: 10px;
            padding-left: 10px;
        }
    }

    @media only screen and (max-width: 991px) {
        .p-nav{
            display: none;
        }
    }

    @media only screen and (max-width: 991px) {
        .p-text{
            display: none;
        }
    }
</style>

<script>
export default {

        data() {
            return {
                categoryId : '',
                url: process.env.url,
            }
        },

        computed: {
            categories() {
                return this.$store.getters.getCategories
            },
        },

        created() {
            this.getCategories();
        },

        methods: {
            getCategories() {
                this.$store.dispatch('getCategories')
            },
        
            redirectHome() {
                this.categoryId = '';
                this.$router.push({ path: '/shop' })
            },
        },

        watch: {
            categoryId() {
                this.$router.push({ path: '/shop', query: { category: this.categoryId } })
            },

        }
        

    }
</script>