import './styles.css';

const CardFlip = ({textOne, textTwo}) => {
    return(
        <div className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front text-white">
                    <p className="title">{textOne}</p>
                </div>
                <div className="flip-card-back ">
                    <p className="title">{textOne} :</p>
                    <p className="mt-4">{textTwo}</p>
                </div>
            </div>
        </div>
    )
};

export {CardFlip}