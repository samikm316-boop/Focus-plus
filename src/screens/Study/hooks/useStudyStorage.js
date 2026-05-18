import { useEffect, useState } from "react";
import { loadStudyData, saveStudyData } from "../utils/studyStorage";

export default function useStudyStorage(key, initialData) {
  const [data, setData] = useState(() =>
    loadStudyData(key, initialData)
  );

  useEffect(() => {
    saveStudyData(key, data);
  }, [key, data]);

  return [data, setData];
}
