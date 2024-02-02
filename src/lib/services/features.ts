import { Feature } from "@src/types"
import fetcher from "./fetcher"

export const getFeatures = async (): Promise<Feature[]> => {
  const { data } = await fetcher<Array<Feature>>("/features", {
    method: "GET"
  })
  return data;
}