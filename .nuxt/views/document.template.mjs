export default (params) => `<!DOCTYPE html>
<html ${params.HTML_ATTRS} lang="es">
  <head ${params.HEAD_ATTRS}>
    ${params.HEAD}
    <!-- add cache control con max-age-->
    <meta http-equiv="Cache-Control" content="max-age=3600" />
  </head>
  <body ${params.BODY_ATTRS}>
    ${params.APP}
  </body>
</html>`