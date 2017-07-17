var util = require('util'),
    events = require('events'),
    fs = require('fs');

class RerunReporter extends events.EventEmitter {
    constructor (baseReporter, config, options = {}) {
        super()
        try {
            fs.unlinkSync("test/reports/rerun-fail.txt")
        } catch (err) {
            console.error("Error deleting rerun-fail.txt: "+err)
        }
        this.on('test:fail', function(test) {
            fs.appendFileSync("test/reports/rerun-fail.txt", test.file+"\n")
        })
    }
}
/**
 * Expose Rerun Reporter
 */
exports = module.exports = RerunReporter;
