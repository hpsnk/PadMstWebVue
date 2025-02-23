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

    // 1 log level
    // 2 source
    // 3 component info
    // 4 log message

    console.log("%s[%s][%s][%s]%s", 
        getDisplayDateTime(),
        strLevel, 
        obj.$options == undefined || obj.$options.name == undefined  ? "" : obj.$options.name, 
        obj.name == undefined ? "" : obj.name, 
        strMessage);
}

function rightString(str, length) {
    return str.substring(str.length - length);
}

function getDisplayDateTime() {
    let now = new Date();
  
    let strYear = "" + now.getFullYear();
    let strMonth = rightString("00" + (now.getMonth() + 1), 2);
    let strDate = rightString("00" + now.getDate(), 2);
    let strHour = rightString("00" + now.getHours(), 2);
    let strMinute = rightString("00" + now.getMinutes(), 2);
    let strSecond = rightString("00" + now.getSeconds(), 2);
    let strMilliseconds = "" + now.getMilliseconds();
  
    return "[" + strYear + "/" +
      strMonth + "/" +
      strDate + "][" +
      strHour + ":" +
      strMinute + ":" +
      strSecond + "." +
      strMilliseconds + "]";
  }
  