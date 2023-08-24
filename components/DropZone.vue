<template>
    <dropzone 
    @vdropzone-file-added="onFileAdded"
    @vdropzone-error="onError"
    @vdropzone-success="onSuccess"
    @vdropzone-complete="onComplete"
    ref="images" id="dropzone" :options="dropzoneOptions" />
</template>

<script>

export default {
    data() {
        return {
            dropzoneOptions: {
                url: 'http://api.trivicare.test/api/images-post',
                paramName: 'file',
                maxFilesize: 2,
                acceptedFiles: 'image/*',
                dictDefaultMessage: 'Arrastra las imágenes aquí para subirlas',
            }
        }
    },
    methods: {
        onFileAdded(e) {
            console.log(e);
        },
        onError(e) {
            console.log(e);
        },
        onSuccess(e) {
            console.log(e);
        },
        async onComplete(e) {
            console.log(e);
        },
    }
}

</script>

