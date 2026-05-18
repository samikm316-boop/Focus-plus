export const loadStudyData = (key, fallbackData) => {
  try {
    const stored = localStorage.getItem(key);

    if (!stored) {
      return fallbackData;
    }

    return JSON.parse(stored);
  } catch (error) {
    console.error(`Failed to load ${key}`, error);
    return fallbackData;
  }
};

export const saveStudyData = (key, data) => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.error(`Failed to save ${key}`, error);
  }
};
