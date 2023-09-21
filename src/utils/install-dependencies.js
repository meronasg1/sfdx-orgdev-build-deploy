const core = require('@actions/core')
const execCommand = require('./exec-command.js');

var fnInstallSFDX = function () {
    try {
        core.info('=== Downloading SFDX cli ===');
        execCommand.run('wget', ['https://developer.salesforce.com/media/salesforce-cli/sf/channels/stable/sf-linux-x64.tar.xz']);
        
        core.info('=== Creating Directory ===');
        execCommand.run('mkdir', ['-p', 'sfdx-cli']);
        
        core.info('=== Extracting Tar Archive ===');
        execCommand.run('tar', ['xJf', 'sf-linux-x64.tar.xz', '-C', 'sfdx-cli', '--strip-components', '1']);
        
        core.info('=== Running Install Script ===');
        execCommand.run('./sfdx-cli/install', []);

        core.info('=== SFDX cli installed ===');
    } catch (error) {
        // Log and handle errors for each command separately
        if (error.message) {
            core.error(`An error occurred: ${error.message}`);
        }
        
        // Handle other specific errors here if needed
    }
};


module.exports.install = function(command, args) {
    //Installs Salesforce DX CLI
    fnInstallSFDX(); 

};
