import react, { useEffect, useState } from 'react';
import {getImages} from './requestApi';
import ImagesComponent from './ImagesComponent';
import ImageComponent from './ImagesComponent';

const ContainerComp =()=>{

    const   [dataList, setDataList] = useState([]);

    const getImagesData = async ()=>{
        
    const response = await getImages();
    setDataList(response.results);
  

    };

    useEffect(() => {
        console.log("effect");
        getImagesData();
        }, []);

        console.log(dataList);
    return (
        <div>
        <h1>container</h1>
        <ImageComponent data={dataList}/>
        </div>
    );
};
export default ContainerComp;