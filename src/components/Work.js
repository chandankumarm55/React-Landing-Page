import React from "react";
import PickMeals from "../assets/pick-meals-image.png";
import ChooseMeals from "../assets/choose-image.png";
import DeliveryMeals from "../assets/delivery-image.png";

const Work = () => {
    const workInfoData = [{
            image: PickMeals,
            title: "Pick Meals",
            text: "Choose from a variety of mouthwatering meals. Our chefs craft each dish with care, ensuring a delightful dining experience.",
        },
        {
            image: ChooseMeals,
            title: "Choose How Often",
            text: "Customize your meal plan to fit your lifestyle. Select how often you want delicious, freshly prepared meals delivered to your doorstep.",
        },
        {
            image: DeliveryMeals,
            title: "Fast Deliveries",
            text: "Experience swift and reliable deliveries. Our efficient service ensures that your carefully chosen meals arrive promptly, ready to enjoy.",
        },
    ];

    return ( <
        div className = "work-section-wrapper" >
        <
        div className = "work-section-top" >
        <
        p className = "primary-subheading" > Work < /p> <
        h1 className = "primary-heading" > How It Works < /h1> <
        p className = "primary-text" >
        Discover the simplicity of our service.Choose from our diverse menu, tailor your delivery frequency, and enjoy fast, reliable deliveries
        for a delightful dining experience. <
        /p> <
        /div> <
        div className = "work-section-bottom" > {
            workInfoData.map((data) => ( <
                div className = "work-section-info"
                key = { data.title } >
                <
                div className = "info-boxes-img-container" >
                <
                img src = { data.image }
                alt = "" / >
                <
                /div> <
                h2 > { data.title } < /h2> <
                p > { data.text } < /p> <
                /div>
            ))
        } <
        /div> <
        /div>
    );
};

export default Work;