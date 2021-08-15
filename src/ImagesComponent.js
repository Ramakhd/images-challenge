import react from "react";
import ImgCardComp from "./ImgCardComp";

// This is easier to read and better for the performance, no need to create a component
// for the image, you can use thte HTML tag directly here

// const ImageComponent = ({ data }) => {
//   return (
//     <div className="ImagesListStyle">
//       {data.length > 0 &&
//         data.map((image) => {
//           return (
//             <img
//               key={image.id}
//               className="imgStyle"
//               alt="alt"
//               src={image.urls.regular}
//             />
//           );
//         })}
//     </div>
//   );
// };

const ImageComponent = (props) => {
  console.log("img comp log", props.data);
  const images = props.data.map((image) => {
    return <ImgCardComp key={image.id} image={image.urls.regular} />;
  });

  return <div className="ImagesListStyle">{images}</div>;
};
export default ImageComponent;
