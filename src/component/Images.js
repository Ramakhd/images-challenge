import react from "react";
import { useState } from "react";
import ImgCard from "./ImgCard";

// This is easier to read and better for the performance, no need to create a component
// for the image, you can use thte HTML tag directly here

const Images = ({ data }) => {

  const [Img, setImg] = useState();

  const onSelectImg=(item)=>{
    console.log("on select",item);
    setImg(item);
    console.log("//// ",Img);
}

  console.log(data);
  return (
    <div>
    <div className="images-list">
      {data.length > 0 &&
        data.map((image) => {
          return (
            <img
              key={image.id}
              className="img-style"
              alt="alt"
              src={image.urls.thumb}
              onClick={()=>onSelectImg(image)}
            />
          );
        })}
    </div>
  
    <div>
    { Img  &&
      <ImgCard image={Img}/>}
    </div>
    </div>
  );
};

// const Image = (props) => {
//   console.log("img comp log", props.data);
//   const images = props.data.map((image) => {
//     return <ImgCard key={image.id} image={image.urls.regular} />;
//   });

//   return <div className="images-list">{images}</div>;
// };
export default Images;
