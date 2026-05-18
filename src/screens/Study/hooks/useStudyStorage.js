import { useState, useEffect } from "react";

export default function useStudyStorage(key, defaultValue) {
  const [value, setValue] = useState(() => {
    try {
      const saved = localStorage.getItem(key);

      if (saved) {
        return JSON.parse(saved);
      }

      return defaultValue;
    } catch (error) {
      console.error("Storage parse error:", error);
      return defaultValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error("Storage save error:", error);
    }
  }, [key, value]);

  return [value, setValue];
}
