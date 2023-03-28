import { createIPX, createIPXMiddleware } from "ipx";
const ipx = createIPX({"dir":"/var/www/admin.trivicare.com/static","domains":[],"sharp":{},"alias":{}});
export default createIPXMiddleware(ipx);
