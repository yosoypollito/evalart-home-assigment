import { Feature } from "@src/types"
import { useEffect, useState } from "react"
import { getFeatures } from "../services/features";


//Use features hook to handle filtering about features with the api and ui loading statements
export default function useFeatures({ filter }: { filter: string }) {

  //Features
  const [features, setFeatures] = useState<Feature[]>([])

  //State for handling ui loading states
  const [loading, setLoading] = useState(true);

  const fetchFeatures = async () => {
    setLoading(true);
    const feats = await getFeatures()

    setFeatures(feats.filter((feat) => {

      if (typeof filter === 'string' && filter.length < 1) {
        return feat;
      }
      const { keywords, description, title } = feat

      const filterLower = filter.toLowerCase()

      //This can be changed to have an array of string to search an do an 'includes' each time.
      if ((typeof filter === 'string' && filter.length > 0) &&
        (String(keywords).toLowerCase().includes(filterLower) || String(description).toLowerCase().includes(filterLower) || String(title).toLowerCase().includes(filterLower))) {
        return feat;
      }
    }));

    setLoading(false);
  }

  //When hook mounts and filter changes, fetch features to server.
  useEffect(() => {
    fetchFeatures()
  }, [filter])

  return {
    features,
    loading
  }
}