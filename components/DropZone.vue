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
                url: process.env.baseUrl + '/api/images-post',
                paramName: 'file',
                maxFilesize: 2,
                acceptedFiles: 'image/*',
                dictDefaultMessage: 'Arrastra las imágenes aquí para subirlas',
                dictSizeError: 'El archivo es muy grande ({{filesize}}MiB). Tamaño máximo: {{maxFilesize}}MiB.',
                dictInvalidFileType: 'No puedes subir archivos de este tipo',
                dictRemoveFile: 'Eliminar',
                dictCancelUpload: 'Cancelar',
                dictCancelUploadConfirmation: '¿Estás seguro de que quieres cancelar esta carga?',
                dictMaxFilesExceeded: 'No puedes subir más archivos',
                addRemoveLinks: true,
                clickable: true
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

