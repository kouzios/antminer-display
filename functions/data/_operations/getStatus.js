const formattedReturn = require("../../_config/formattedReturn")
const DigestFetch = require('digest-fetch')

module.exports = async (index) => {
    const client = new DigestFetch(process.env.ANT_USERNAME, process.env.ANT_PASSWORD, {basic:false});
    const res = await client.fetch("http://192.168.1.65/cgi-bin/minerStatus.cgi");
    let statusInfo = await res.text();
    statusInfo = statusInfo.replaceAll("\"", "&quot;"); //Prevents extra quotes
    statusInfo = statusInfo.replaceAll("\n", "&#10;"); //Prevents extra quotes
    return formattedReturn(200, statusInfo);
}
