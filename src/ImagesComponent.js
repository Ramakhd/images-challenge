import react from 'react';
import ImgCardComp from './ImgCardComp';

const ImageComponent =(props) =>{
  console.log("img comp log",props.data);
    const images = props.data.map(image =>{
        // return(<ImgCardComp key={image.id} src={image.urls.regular}/>)
        return(<ImgCardComp key={image.id} image={image.urls.regular}/>)
        
    });
    
    return(<div>{images}</div>)
};
export default ImageComponent;