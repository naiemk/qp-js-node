"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SystemLock = void 0;
const fs_1 = require("fs");
const contracts_1 = require("./contracts");
class SystemLock {
    /**
     * Wait for the lock file to be released (either deleted or cleared).
     */
    static async waitForLock() {
        while (true) {
            try {
                // Check if the file exists and read its content
                const content = await fs_1.promises.readFile(this.SystemLockFilePath, 'utf-8');
                if (!content.trim()) {
                    // File exists but is empty, consider the lock released
                    return;
                }
            }
            catch (err) {
                if (err.code === 'ENOENT') {
                    // File does not exist, lock is released
                    return;
                }
                throw err; // Re-throw other errors
            }
            // Wait a bit before checking again
            contracts_1.log.info('Waiting for lock to be released...');
            await new Promise((resolve) => setTimeout(resolve, 10000));
        }
    }
    /**
     * Clear the lock file's content and delete it.
     */
    static async releaseLock() {
        try {
            // Clear the content of the lock file
            await fs_1.promises.writeFile(this.SystemLockFilePath, '', 'utf-8');
            // Delete the file
            await fs_1.promises.unlink(this.SystemLockFilePath);
        }
        catch (err) {
            if (err.code !== 'ENOENT') {
                // Ignore if the file does not exist, otherwise re-throw
                throw err;
            }
        }
    }
}
exports.SystemLock = SystemLock;
SystemLock.SystemLockFilePath = '/tmp/mine-finalize.lock';
exports.default = SystemLock;
