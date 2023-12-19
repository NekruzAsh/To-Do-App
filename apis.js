
const baseURL = 'http://localhost:3001';

/**
 * @typedef {Object} ITask
 * @property {string} id - The task ID.
 * @property {string} title - The task title.
 * @property {boolean} completed - Indicates whether the task is completed or not.
 */

/**
 * Get all notes.
 * @returns {Promise<ITask[]>} A promise that resolves to an array of tasks.
 */
export const getAllnotes = async () => {

    const response = await fetch(`${baseURL}/tasks`);
    const notes = await response.json();

    return notes;
}