import DATA from '../../data.json';

export const listContacts = async () => {
  try {
    const result = await new Promise((resolve, reject) => {
      setTimeout(() => resolve(DATA), 2000);
    });
    return result;
  } catch (error) {
    throw new Error('Failed to list contacts');
  }
};
