import react from 'react';

const ImgCard = ({image}) =>{
    
    console.log("img" ,image);
    return(<img className="img-style" src={image}/>);
    
};

export default ImgCard;