import react from 'react';

const ImgCardComp = ({image}) =>{
    
    console.log("img" ,image);
    return(<img src={image}/>);
    
};

export default ImgCardComp;