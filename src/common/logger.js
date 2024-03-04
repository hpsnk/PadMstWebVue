//----------------------------------------------------
// logger.js 
//----------------------------------------------------

let level = 1; // LV_DEBUG;

export default {
    LV_TRACE : 1,
    LV_DEBUG : 2,
    LV_INFO  : 3,
    LV_WARN  : 4,
    LV_ERROR : 5,
    setLevel(nLogLevel) {
        level = nLogLevel;
    },
    trace(strMessage, obj) {
        outputLog(this.LV_TRACE, "TRACE", strMessage, obj);
    },
    debug(strMessage, obj) {
        outputLog(this.LV_DEBUG, "DEBUG", strMessage, obj);
    },
    info(strMessage, obj) {
        outputLog(this.LV_INFO, "INFO ", strMessage, obj);
    },
    warn(strMessage, obj) {
        outputLog(this.LV_WARN, "WARN ", strMessage, obj);
    },
    error(strMessage, obj) {
        outputLog(this.LV_ERROR, "ERROR", strMessage, obj);
    },
}

function outputLog(nLogLevel, strLevel, strMessage, obj) {
    if (nLogLevel < level) {
        return;
    }

    console.log("[%s][%s][%s]%s", 
        strLevel, 
        obj.$options == undefined || obj.$options.name == undefined  ? "" : obj.$options.name, 
        obj.name == undefined ? "" : obj.name, 
        strMessage);
}
