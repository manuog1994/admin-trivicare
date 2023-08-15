<template>
    <client-only>
        <div class="d-block bg-dark">
            <div>
                <div class="">
                    <div class="custom-banner">
                        <span>MODO EDICIÓN EN ADMIN TRIVICARE</span>
                    </div>
                </div>
            </div>
        </div>
    </client-only>
</template>

<style lang="scss">
.custom-banner{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    font-size: 14px;
    color: #ff0000;
}

.vue-typer {
  /* Styles for the vue-typer container
     e.g. font-family, font-size  */
 
    .custom.char {
    /* Styles for each character
        e.g. color, background-color */
        color: white;

        &.typed {
            /* Styles specific to typed characters
                i.e. characters to the left of the caret */
        }
        &.selected {
            /* Styles specific to selected characters
                i.e. characters to the right of the caret while VueTyper's
                    'eraseStyle' is set to a selection-based style */
        }
        &.erased {
            /* Styles specific to erased characters
                i.e. characters to the right of the caret while VueTyper's
                    'eraseStyle' is set to a non-selection-based style */
        }
    }
}

.bg-banner {
    background-color: #dd88b8df;
}

</style>