

module.exports = function() {
    this.process = function(filename) {
        const fs = require('fs');
        fs.copyFile('base.pdf', filename + '.pdf' , (err) => {
            if (err) throw err;
            console.log('source.txt was copied to destination.txt');
        });

    };
}