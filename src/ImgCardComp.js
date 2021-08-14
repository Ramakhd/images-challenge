import react from 'react';

const ImgCardComp = ({image}) =>{
    
    console.log("img" ,image);
    return(<img className="imgStyle" src={image}/>);
    
};

export default ImgCardComp;