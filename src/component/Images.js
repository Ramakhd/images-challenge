import react from "react";


// This is easier to read and better for the performance, no need to create a component
// for the image, you can use thte HTML tag directly here

const Images = ({ data }) => {
  return (
    <div className="images-list">
      {data.length > 0 &&
        data.map((image) => {
          return (
            <img
              key={image.id}
              className="img-style"
              alt="alt"
              src={image.urls.regular}
            />
          );
        })}
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
