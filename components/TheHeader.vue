<template>
    <div class="d-lg-none menu-mobile">
        <header class="header-area header-padding-1 sticky-bar header-res-padding clearfix" :class="{'is-sticky': isSticky}">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-4 col-sm-4 col-4 d-flex justify-content-start align-items-center">
                        <div class="same-style mobile-menu-toggler d-flex d-lg-none ms-sm-3">
                            <button class="mobile-aside-button fs-2" @click="navOpen = !navOpen" title="Menu">
                                <i class="pe-7s-menu"></i>
                            </button>
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-4 col-4">
                        <div class="lgo">
                            <n-link to="/">
                                <nuxt-img loading="lazy" provider="customProvider" src="nuxt/TriviCare_byn Round Positivo.svg" style="width:50px; margin:auto;" alt="logo"/>
                            </n-link>
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-4 col-4 d-flex justify-content-end align-items-center">
                        <div class="header-right-wrap">
                            <div class="same-style header-search me-2">
                                <button class="search-active" @click="searchOpen"><i class="pe-7s-search"></i></button>
                            </div>
                            <div class="same-style cart-wrap me-sm-3">
                                <button class="icon-cart" @click="openCart = !openCart" title="Menu Carrito">
                                    <i class="pe-7s-shopbag"></i>
                                    <span class="count-style">{{ cartItemCount }}</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div id="searchMobile" class="col-12 hidden mt-3">
                        <Search />
                    </div>
                </div>
            </div>
        </header>
        <OffCanvasMobileMenu :class="{'show-mobile-menu' : navOpen}" @toggleAsideMenu="navOpen = !navOpen" />
    </div>
</template>

<style lang="scss" scoped>
.lgo{
    display: flex;
    justify-content: center;
    a {
        display: flex;
        justify-content: center;
        align-self: center;
        img {
            width: 100%;
            height: 100%;
        }
    }
}

.button-search-div {
    display: flex;
    justify-content: center;
    align-items: center;
    button {
        background-color: transparent;
        border: none;
        color: #000;
        font-size: 1.5rem;
        cursor: pointer;
        margin-left: 10px;

        &:hover {
            color: $theme-color;
        }
    }
}

</style>

<script>
    export default {
        props: ['searchChildren'],

        components: {
             Search: () => import("@/components/Search"),
        },

        computed: {
            cartItemCount() {
                return this.$store.getters.cartItemCount
            },
            wishlistItemCount() {
                return this.$store.getters.wishlistItemCount
            },
            compareItemCount() {
                return this.$store.getters.compareItemCount
            },
        },

        data() {
            return {
                isSticky: false,
                isOpenSearch: false,
                isOpenAccountSettings: false,
                openCart: false,
                navOpen: false,
                role: '',
                opacity: false,
            }
        },

        beforeMount() {
            this.$root.$on('opacityOther', data => {
                this.opacity = data;
            });
            this.$root.$on('closeMenu', data => {
                this.isOpenAccountSettings = data;
                this.openCart = data;
                this.navOpen = data;
                document.getElementById('searchMobile').classList.add('hidden');
            });
        },

        mounted(){
            window.addEventListener('scroll', () => {
                let scroll = window.scrollY
                if(scroll >= 200){
                    this.isSticky = true
                } else {
                    this.isSticky = false
                }
            });
        }, 

        watch: {
            opacity() {
                this.$emit('opacity', this.opacity)
            }
        },

        methods: {
            searchOpen() {
                if (document.getElementById('searchMobile').classList.contains('hidden')) {
                    document.getElementById('searchMobile').classList.remove('hidden');
                 } else {
                    document.getElementById('searchMobile').classList.add('hidden');
                }
            },
            async logout() {
                await this.$auth.logout();
                window.location.reload();
                this.$notify({ title: 'Has cerrado sesión!'})

            },

        }
    };
</script>
