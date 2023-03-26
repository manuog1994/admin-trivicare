<template>
<div>    
    <ul class='mobile-menu mb-2 border-bottom-1'>
        <client-only>
            <li v-for='(link, i) in menus' :key='i'>
                <n-link :to="link.url">
                    {{ link.title }}
                </n-link>
                <span class='submenu-toggle' v-if="link.submenu">
                    <i class="pe-7s-angle-down"></i>
                </span>
                <ul class="submenu" v-if="link.submenu">
                    <client-only>
                        <li v-for='(link, i) in link.submenu' :key='i' class="title">
                            <n-link :to="link.url"> {{ link.title }} </n-link>
                            <span class='submenu-toggle' v-if="link.submenu">
                                <i class="pe-7s-angle-down"></i>
                            </span> 
                            <ul class="submenu" v-if="link.submenu">
                                <client-only>
                                    <li v-for='(link, i) in link.submenu' :key='i'>
                                        <n-link :to="link.url"> {{ link.title }} </n-link>
                                    </li>
                                </client-only>
                            </ul>
                        </li>
                    </client-only>
                </ul>
            </li>
        </client-only>
    </ul>
    <div class="mt-4">
        <a v-if="$auth.loggedIn == false" class="text-center" href="/login">Iniciar sesión</a>
        <div v-else class="mt-2">
            <p>Hola, <strong>{{ getName() }}</strong></p>
            <ul class="ms-2">
                <li v-if="role == 'admin'">
                    <a href="/crud">PDC</a>
                </li>
                <li>
                    <a href="/my-account">Mi cuenta</a>
                </li>
                <li>
                    <a href="/my-orders">Mis pedidos</a>
                </li>
                <li>
                    <a @click="logout">Cerrar sesión</a>
                </li>
            </ul>
        </div>
    </div>
    <div class="mt-4">
        <n-link to="/wishlist">Lista de deseos</n-link>
        <span class="ms-2 bg-blue-color p-2 rounded-5">{{ wishlistItemCount }}</span>
    </div>
    <div v-if="$auth.loggedIn == true" class="mt-4">
        <n-link to="/notifications-center">
            Notificaciones
        </n-link>
        <span class="ms-2 bg-blue-color p-2 rounded-5">{{ notifications }}</span>
    </div>
</div>
</template>

<script>
    export default {
        data() {
            return {
                menus: [
                    {
                        url: '/',
                        title: 'Inicio',

                    },
                    {
                        url: '/shop',
                        title: 'Ver Todo',

                    },
                    {
                        url: '/shop?category=facial',
                        title: 'Facial',

                    },
                    {
                        url: '/shop?category=hidratante',
                        title: 'Hidratante',

                    },
                    {
                        url: '/shop?category=corporal',
                        title: 'Corporal',

                    },
                    {
                        url: '/shop?category=accesorios',
                        title: 'Accesorios',

                    },

                    {
                        url: '/contact',
                        title: 'Contacto',
                    }
                ],
                role: '',
                notifications: 0
            }
        },

        computed: {
            wishlistItemCount() {
                return this.$store.getters.wishlistItemCount;
            }
        },

        mounted() {
            let getSiblings = function (e) {
                let siblings = []; 
                if(!e.parentNode) {
                    return siblings;
                }
                let sibling  = e.parentNode.firstChild;
                while (sibling) {
                    if (sibling.nodeType === 1 && sibling !== e) {
                        siblings.push(sibling);
                    }
                    sibling = sibling.nextSibling;
                }
                return siblings;
            };

            this.getRoles();

            const subMenuToggle = document.querySelectorAll('.submenu-toggle');
            subMenuToggle.forEach(function(btn) {
                btn.addEventListener('click', function() {
                    if(!this.classList.contains('active')) {
                        this.classList.add('active')
                        this.nextElementSibling.classList.add('active')
                        this.closest('li').classList.add('active')
                        getSiblings(this.closest('li')).forEach(function(item) {
                            item.classList.remove('active')
                            item.querySelectorAll('li, .submenu-toggle, .submenu').forEach(function(child) {
                                child.classList.remove('active')
                            })
                        })
                    } else {
                        this.closest('li').classList.remove('active')
                        this.closest('li').querySelectorAll('li, .submenu-toggle, .submenu').forEach(function(child) {
                            child.classList.remove('active')
                        })
                    }
                })
            });

            this.countNotifications();
        },

        methods: {
            
            async logout() {
                await this.$auth.logout();
                window.location.reload();
                this.$notify({ title: 'Has cerrado sesión!'})

            },

            getRoles() {
                if(this.$auth.loggedIn == true) {
                    const roles = this.$auth.user.roles;
                    if(roles != null) {
                        roles.map(role => {
                            this.role = role.name;
                        });
                    }else {
                        this.role = '';
                    }
                }
            },

            getName() {
                if(this.$auth.loggedIn == true) {
                    const space = ' ';
                    const name = this.$auth.user.name;
                    const arr = name.split(space);

                    return arr[0];
                }
            },

            countNotifications() {
                if(this.$auth.loggedIn == true) {
                    const notifications = this.$auth.user.notifications;
                    if (notifications.read == false) {
                        this.notifications = notifications.length;
                    }
                }
            }
        }
    }
</script>



<style lang='scss' scoped>
    .mobile-menu {
        li:not(:last-child) {
            margin-bottom: 5px;
        }
        li {
            position: relative;
            a {
                font-weight: 600;
                line-height: 35px;
                text-transform: capitalize;
            }
        }
        .submenu {
            display: none;
            padding-top: 5px;
            padding-left: 15px;
            &.active {
                display: block;
            }
            li {
                margin-bottom: 5px;
                
                &.title > {
                    a {
                        font-weight: 500;
                    }
                }
                .submenu {
                    li {
                        a {
                            line-height: 25px;
                            font-weight: 400;
                        }
                    }
                }
            }
        }
        .submenu-toggle {
            width: 35px;
            height: 35px;
            background-color: #f3f3f3;
            text-align: center;
            font-size: 28px;
            display: inline-block;
            position: absolute;
            right: 0;
            top: 0;
            cursor: pointer;

            i {
                transition: 0.3s;
                line-height: 35px;
            }
            &.active {
                i {
                    transform: rotate(-180deg);
                }
            }
        }
    }
</style>