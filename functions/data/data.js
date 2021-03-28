const formattedReturn = require('../_config/formattedReturn');
const getStatus = require('./_operations/getStatus');
require('dotenv').config();

exports.handler =  async (event) => {
    if (event.httpMethod === 'GET') {
        //TODO: Change IP based on the antminer requested
        return await getStatus(null);
    } else {
        return formattedReturn(405, {});
    }
}