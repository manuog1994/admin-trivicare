<template>
    <client-only>
        <div class="main-search mt-4 mt-md-0">
            <div class="row">
                <div class="col-12">
                    <div class="input-group">
                        <input type="text" class="form-control rounded-0" placeholder="Buscar..." aria-label="Buscar..." aria-describedby="basic-addon1" @input="hidden = false" v-model="search">
                        <span class="input-group-text rounded-0 bg-blue-color" id="basic-addon1">
                            <i class="fa fa-search"></i>
                        </span>
                    </div>
                </div>
                <div class="col-12">
                    <div class="position-relative">
                        <div id="search-box" class="search-box" :class="{'active' : hidden == false}">
                            <div class="box-products" v-for="result in results" :key="result.id">
                                <a :href="url + '/orders-view/' + result.id" class="single-product">
                                    <div class="row w-100">
                                        <div class="col-6">
                                            <span>{{ result.user_profile.name == 'Guest' ? result?.guest?.name : result?.user_profile?.name }} {{ result.user_profile.lastname == 'Guest' ? result?.guest?.lastname : result?.user_profile?.lastname }}</span>
                                        </div>
                                        <div class="col-6">
                                            <span><strong>{{ result.order_date }}</strong></span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </client-only>
</template>

<style lang="scss">
    .d-new{
        display: flex;
    }
    @media only screeen and (max-width: 991px) {
        .d-new{
            display: none;
        }
    }

    .search-box {
        position: absolute;
        top: 45%;
        left: 0;
        width: 100%;
        height: 300px;
        scroll-margin-right: 5px;
        scroll-behavior: auto;
        background: #fff;
        z-index: 999;
        border-radius: 0 0 5px 5px;
        box-shadow: 0 0 10px rgba(0,0,0,0.1);
        padding: 20px;
        visibility: hidden;
        &.active {
            visibility: visible;
            overflow-y: scroll;
        }
    }

    .search-box.box-products {
        position: relative;
        display: flex;
        justify-content: center;
        margin-bottom: 10px;
    }

    .single-product{
        position: relative;
        display: flex;
        align-items: center;
        width: 100%;
        height: 100%;
        text-decoration: none;
        color: #000;
        padding: 10px;
        border-radius: 5px;
        z-index: 1001;
        &:hover {
            background: #f5f5f5;
        }
    }
</style>

<script>
export default {

    data() {
        return {
            searchFather: false,
            products: [],
            search: '',
            url: process.env.url,
            hidden: true,
            results: [],
            resultsMin: [],
        }
    },

    watch: {
        search() {
            if (this.search.length > 0) {
                this.hidden = false;
            } else {
                this.hidden = true;
            }
            this.getOrders();
        },
    },

    methods: {
        async getOrders() {
            await this.$axios.get('/api/search?search=' + this.search)
                .then(response => {
                    this.results = response.data;
                    this.resultsMin = response.data.slice(0, 5);
                })
                .catch(error => {
                    console.log(error);
                });
        }


    },
    

}
</script>
