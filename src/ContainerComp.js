import react, { useEffect, useState } from "react";
import { getImages } from "./requestApi";
import ImageComponent from "./ImagesComponent";

const ContainerComp = () => {
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
  return <ImageComponent data={dataList} />;
};
export default ContainerComp;
