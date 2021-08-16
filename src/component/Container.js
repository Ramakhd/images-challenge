import react, { useEffect, useState } from "react";
import { getImages } from "../helper/requestApi";
import Images from "./Images";

const Container = () => {
  const [dataList, setDataList] = useState([]);

  const getImagesData = async () => {
    const response = await getImages();
    setDataList(response.results);
  };

  useEffect(() => {
    console.log("effect");
    getImagesData();
  }, []);

  console.log(dataList);
  //   put a condition here to check if there is images or not (conditional render)
  return <Images data={dataList} />;
};
export default Container;
