const formattedReturn = require("../../_config/formattedReturn")
const DigestFetch = require('digest-fetch')

module.exports = async (index) => {
    const client = new DigestFetch(process.env.ANT_USERNAME, process.env.ANT_PASSWORD, {basic:false});
    const res = await client.fetch("http://192.168.1.65/cgi-bin/minerStatus.cgi");
    const statusInfo = await res.text();
    return formattedReturn(200, statusInfo);
}
