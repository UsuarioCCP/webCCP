import React from 'react';
// import cloud1 from '../../Assets/Images/cloud1.png';
// import cloud2 from '../../Assets/Images/cloud2.png';
// import cloud3 from '../../Assets/Images/cloud3.png';
// import cloud4 from '../../Assets/Images/cloud4.png';
// import cloud5 from '../../Assets/Images/cloud5.png';
import './styles.css';

const EfectCloud = () => {
    return (
        <div className="banner">
            <div className="clouds">
                <img src="https://i.postimg.cc/wvcRrmKF/cloud1.png" alt="cloud1" style={{ '--i': 2 }} />
                <img src="https://i.postimg.cc/ZRhyjLQC/cloud2.png" alt="cloud2" style={{ '--i': 4 }} />
                <img src="https://i.postimg.cc/4yfHRxsG/cloud3.png" alt="cloud3" style={{ '--i': 6 }} />
                <img src="https://i.postimg.cc/zXfHdvxS/cloud4.png" alt="cloud4" style={{ '--i': 8 }} />
                <img src="https://i.postimg.cc/GmWBhQdq/cloud5.png" alt="cloud5" style={{ '--i': 10 }} />
            </div>
        </div>
    );
}

export { EfectCloud };
