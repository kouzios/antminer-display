const formattedReturn = require("../../_config/formattedReturn")

module.exports = async (index) => {
    // const res = await fetch("http://192.168.1.65/cgi-bin/minerStatus.cgi");
    // const statusInfo = await res.json();
    // return statusInfo;
    return formattedReturn(200, {
        site: "This site",
        meme: "Bad meme"
    })
}
