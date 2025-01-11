import { promises as fs } from 'fs';
import { log } from './contracts';

export class SystemLock {
  static SystemLockFilePath = '/tmp/mine-finalize.lock';

  /**
   * Wait for the lock file to be released (either deleted or cleared).
   */
  static async waitForLock(): Promise<void> {
    while (true) {
      try {
        // Check if the file exists and read its content
        const content = await fs.readFile(this.SystemLockFilePath, 'utf-8');
        if (!content.trim()) {
          // File exists but is empty, consider the lock released
          return;
        }
      } catch (err) {
        if ((err as any).code === 'ENOENT') {
          // File does not exist, lock is released
          return;
        }
        throw err; // Re-throw other errors
      }

      // Wait a bit before checking again
      log.info('Waiting for lock to be released...');
      await new Promise((resolve) => setTimeout(resolve, 10000));
    }
  }

  /**
   * Clear the lock file's content and delete it.
   */
  static async releaseLock(): Promise<void> {
    try {
      // Clear the content of the lock file
      await fs.writeFile(this.SystemLockFilePath, '', 'utf-8');
      // Delete the file
      await fs.unlink(this.SystemLockFilePath);
    } catch (err) {
      if ((err as any).code !== 'ENOENT') {
        // Ignore if the file does not exist, otherwise re-throw
        throw err;
      }
    }
  }
}

export default SystemLock;
