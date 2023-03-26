<template>
    <div class="bg-blue-color">
        <div class="container">
            <div class="d-flex justify-content-center">
                <div class="d-flex justify-content-around align-content-center" style="text-align:end;">
                    <div class="p-4">
                        <ul>
                            <li>
                                <n-link to="/">
                                    <i class="fs-2 fa fa-home"></i>
                                </n-link>
                            </li>
                        </ul>
                    </div>
                    <div class="ps-4 pe-4 d-flex align-items-center">
                        <ul>
                            <li>
                                <h4>Panel de Control</h4>
                            </li>
                        </ul>
                    </div>
                    <div class="p-4">
                        <ul>
                            <li>
                                <a @click="logout">
                                    <i class="fa fa-sign-out fs-2"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        auth: true,

        methods: {
            async logout() {
                await this.$auth.logout();
                this.$router.push('/');
                this.$notify({ title: 'Has cerrado sesión!'})

            },
        }
    };
</script>