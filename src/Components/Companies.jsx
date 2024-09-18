import React, { useState } from 'react';
import '../Pages/Home/Home.css'
import img1 from "../assets/samaikya.jpg";
import img2 from "../assets/shared image (12).jfif";
import img3 from "../assets/shared image (2).jfif";
import img4 from "../assets/shared image (20).jfif";
import img5 from "../assets/shared image (28).jfif";
import img6 from "../assets/shared image (29).jfif";
import img7 from "../assets/shared image (8).jfif";

const Companies = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const list = [
        {
            pic: img1,
            line1: "Samadhana Sadan",
            line2: "christian resort centre and most exclusive use venues in Hyderabad",
            line3: "The only christian resort centre and one of the most exclusive use venues in Hyderabad near Shameerpet. Whether you are planning a wedding, a birthday party, an anniversary celebration, an overnight retreat or any other christian event, the stunning backdrop of Samadhana Sadan provides a majestic setting, with 4 acres of private countryside for guests to enjoy",
            link: "http://samadhanasadan.com/index.html"
        },
        {
            pic: img2,
            line1: "Suhana Destination Travels Pvt. Ltd.",
            line2: "Countries Jordan, Israel, Palestin & Egypt.",
            line3: "Explore all that we offer in combination of Jordan, Israel, Palestin & Egypt in our 10 days ultimate tour package. This versatile tour gives travellers the opportunity to visit many of the historical, cultural and religious sites within this region.",
            link: "http://suhanadtour.com/"
        },
        {
            pic: img3,
            line1: "Lorem Ipsom",
            line2: "Lorem ipsum dolor sit amet.",
            line3: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
            link: "#"
        },
        {
            pic: img4,
            line1: "Lorem Ipsom",
            line2: "Lorem ipsum dolor sit amet.",
            line3: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
            link: "#"
        },
        {
            pic: img5,
            line1: "Lorem Ipsom",
            line2: "Lorem ipsum dolor sit amet.",
            line3: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
            link: "#"
        },
        {
            pic: img6,
            line1: "Lorem Ipsom",
            line2: "Lorem ipsum dolor sit amet.",
            line3: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
            link: "#"
        },
        {
            pic: img7,
            line1: "Lorem Ipsom",
            line2: "Lorem ipsum dolor sit amet.",
            line3: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
            link: "#"
        },
    ];

    const handleClick = (index) => {
        setActiveIndex(index);
    };
    return (
        <div>
            <h1>OUR GROUP OF COMPANIES</h1>
            <div className="companies">
                <div className="company-info">
                    <div className='box-info'>
                        <div className="info-data">
                            <h2>{list[activeIndex].line1}</h2>
                            <p>{list[activeIndex].line3}</p>
                            <a href={list[activeIndex].link}>View Website</a>
                        </div>
                        <div className="info-images">
                            <img src={list[activeIndex].pic} alt="" />
                        </div>
                    </div>
                </div>
                <div className="company-list">
                    {list.map((item, index) => (
                        <div
                            className={`company ${activeIndex === index ? 'active' : ''}`}
                            key={index}
                            onClick={() => handleClick(index)}
                        >
                            <img src={item.pic} alt="image" />
                            <span>
                                <h4>{item.line1}</h4>
                                <p>{item.line2}</p>
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Companies