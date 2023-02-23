import React, { useState } from "react";
import dummyData from "../store/dummy-data";
import ProductItem from "./ProductItem";
import classes from "./ProductCategory.module.css";

const ProductCategory = (props) => {
  const [showStory, setShowStory] = useState(false);

  const showStoryToggler = () => {
    setShowStory((prev) => !prev);
  };

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <div>{props.style.toUpperCase()} </div>
        {showStory ? (
          <svg
            onClick={showStoryToggler}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 9V4.5M9 9H4.5M9 9L3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5l5.25 5.25"
            />
          </svg>
        ) : (
          <svg
            onClick={showStoryToggler}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
            />
          </svg>
        )}
      </div>
      {showStory && (
        <div className={classes.story}>
          Once upon a time, in a land ruled by dogs, eight majestic breeds
          fought for the throne. The Golden Retriever, with his intelligence and
          loyalty, was a strong contender for the crown. The Husky, with his
          strength and endurance, was also a formidable opponent. The French
          Bulldog, with his charm and wit, hoped to win the hearts of the
          people. The Beagle, with his determination and sense of smell, had his
          own claim to the throne. The Bernese Mountain Dog, with his grandeur
          and strength, was also a top candidate. The German Shepherd, with his
          courage and protectiveness, was determined to keep the kingdom safe.
          The Australian Border Collie, with his agility and herding instincts,
          aimed to lead the kingdom to prosperity. And the Samoyed, with his
          playful and friendly nature, hoped to bring joy to all the citizens.
          In the end, the dogs decided to form a council to rule the kingdom
          together, with each breed bringing their unique strengths to the
          table. The Golden Retriever was appointed as the council's leader, and
          under his guidance, the kingdom flourished. The Husky protected the
          borders, the French Bulldog charmed the people, the Beagle tracked
          down criminals, the Bernese Mountain Dog served as a symbol of the
          kingdom's power, the German Shepherd protected the citizens, the
          Australian Border Collie guided the kingdom's economy, and the Samoyed
          spread happiness throughout the land. Together, they ruled justly and
          fairly, leading the kingdom to a golden age.
        </div>
      )}
      <div className={classes.items}>
        {dummyData.map((item) => {
          if (item.style === props.style) {
            return (
              <div key={item.id}>
                {
                  <>
                    <ProductItem item={item} />
                  </>
                }
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default ProductCategory;
