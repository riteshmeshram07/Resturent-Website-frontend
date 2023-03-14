import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Pick Meals",
      text: "Choose the meal plan that best suits your health goal",
    },
    {
      image: ChooseMeals,
      title: "Choose How Often",
      text: 	
"Customize your meals with different cuisines or portion sizes "},
    {
      image: DeliveryMeals,
      title: "Fast Deliveries",
      text: "Freshly cooked meals are delivered in trays with nutrition count for each meal",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
        Our restaurants serve everything from breakfast, lunch and dinner to various other food and menu items. Some of the most popular foods that are served at restaurants are tacos, pizza, hamburgers and chicken, making American, Mexican and Italian . </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;