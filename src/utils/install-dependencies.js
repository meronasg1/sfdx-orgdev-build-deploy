const core = require('@actions/core')
const execCommand = require('./exec-command.js');

var fnInstallSFDX = function () {
    
        core.info('=== Downloading SFDX cli ===');
        execCommand.run('wget', ['https://developer.salesforce.com/media/salesforce-cli/sf/channels/stable/sf-linux-x64.tar.xz']);
        
        core.info('=== Creating Directory ===');
        execCommand.run('mkdir', ['-p', 'sfdx-cli']);
        
        core.info('=== Extracting Tar Archive ===');
        execCommand.run('tar', ['xJf', 'sf-linux-x64.tar.xz', '-C', 'sfdx-cli', '--strip-components', '1']);
        
        core.info('=== Running Install Script ===');
        
       const path = require('path');
        const newPath = path.join(__dirname, 'sfdx-cli', 'bin');
        process.env.PATH = `${newPath}:${process.env.PATH}`;

        core.info('=== SFDX cli installed ===');
    
};


module.exports.install = function(command, args) {
    //Installs Salesforce DX CLI
    fnInstallSFDX(); 

};
