import React, { useState } from 'react';

const meals = {
  Monday: [
    { img: "https://www.jessicagavin.com/wp-content/uploads/2015/05/chia-seed-pudding-with-yogurt-14-1200.jpg", alt: "Greek yogurt with fresh fruits and chia seeds", text: "Breakfast: Greek yogurt with fresh fruits and a tablespoon of chia seeds" },
    { img: "https://images.indianexpress.com/2022/11/nuts-759.jpg", alt: "A handful of nuts", text: "Snack: A handful of nuts (almonds, walnuts)" },
    { img: "https://www.theculinarycompass.com/wp-content/uploads/2021/01/Balsamic-Grilled-Chicken-Salad-2.jpg.webp", alt: "Grilled chicken salad", text: "Lunch: Grilled chicken salad with mixed greens, cherry tomatoes, cucumber, and a light vinaigrette" },
    { img: "https://blog-images-1.pharmeasy.in/2018/07/02113415/Image-_2.jpg", alt: "Dark chocolate", text: "Snack: A small piece of dark chocolate (70% cocoa or higher)" },
    { img: "https://cdn11.bigcommerce.com/s-5ljyj9oebs/images/stencil/600x600/products/3307/27081/P111522192842_1__31988.1708093467.jpg?c=2", alt: "Boiled eggs and fruit", text: "Post-work Snack: Boiled eggs and a small piece of fruit" },
    { img: "https://www.walderwellness.com/wp-content/uploads/2022/09/Honey-Garlic-Salmon-Parcels-Walder-Wellness-7.jpg", alt: "Grilled fish with steamed vegetables", text: "Dinner: Grilled fish with steamed vegetables (broccoli, carrots, zucchini)" },
    { img: "https://healthyfitnessmeals.com/wp-content/uploads/2018/07/HFM-Berry-Fruit-Salad-683x1024.png", alt: "Mixed berries", text: "Late Snack: A small bowl of mixed berries" }
  ],
  Tuesday: [
    { img: "https://emeals-menubuilder.s3.amazonaws.com/v1/recipes/799224/pictures/large_mediterranean-scrambled-eggs.jpg", alt: "Scrambled eggs with spinach and tomatoes", text: "Breakfast: Scrambled eggs with spinach and tomatoes" },
    { img: "https://www.lottaveg.com/wp-content/uploads/2017/05/Apple-Peanut-Butter-1030x687.jpg", alt: "Apple slices with peanut butter", text: "Snack: Apple slices with peanut butter" },
    { img: "https://www.slenderkitchen.com/sites/default/files/styles/gsd-1x1/public/recipe_images/southwest-quinoa-salad-4.jpg", alt: "Quinoa bowl", text: "Lunch: Quinoa bowl with black beans, corn, avocado, and a squeeze of lime" },
    { img: "https://www.verywellfit.com/thmb/B6eyh4PJPOmBNhegNDEOlxsjktA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/veggies-and-dip-1d96c27db1244efeab577ead84f3698a.jpg", alt: "Celery sticks with almond butter", text: "Snack: Celery sticks with almond butter" },
    { img: "https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_4:3/k%2FPhoto%2FRecipes%2F2019-07-recipe-balsamic-berries-honey-yogurt%2FBalsamic-Berries-Honey-Yogurt_061", alt: "Greek yogurt with berries", text: "Post-work Snack: Greek yogurt with berries" },
    { img: "https://rainbowplantlife.com/wp-content/uploads/2023/01/tofu-stir-fry-cover-photo-1-of-1.jpg", alt: "Stir-fry tofu with mixed vegetables and brown rice", text: "Dinner: Stir-fry tofu with mixed vegetables and a side of brown rice" },
    { img: "https://www.womansworld.com/wp-content/uploads/2022/09/Almond-black-tea.jpg", alt: "Herbal tea and almonds", text: "Late Snack: Herbal tea and a few almonds" }
  ],
  Wednesday: [
    { img: "https://www.keepingthepeas.com/wp-content/uploads/2022/06/banana-spinach-smoothie-4.jpg", alt: "Smoothie", text: "Breakfast: Smoothie (banana, spinach, protein powder, almond milk)" },
    { img: "https://www.verywellfit.com/thmb/B6eyh4PJPOmBNhegNDEOlxsjktA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/veggies-and-dip-1d96c27db1244efeab577ead84f3698a.jpg", alt: "Carrot sticks with hummus", text: "Snack: Carrot sticks with hummus" },
    { img: "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2020/04/Tuna-Salad-4.jpg", alt: "Tuna salad", text: "Lunch: Tuna salad with lettuce, red onions, and a light mayo dressing" },
    { img: "https://blog-images-1.pharmeasy.in/2018/07/02113415/Image-_2.jpg", alt: "Dark chocolate", text: "Snack: A small piece of dark chocolate (70% cocoa or higher)" },
    { img: "https://cdn11.bigcommerce.com/s-5ljyj9oebs/images/stencil/600x600/products/3307/27081/P111522192842_1__31988.1708093467.jpg?c=2", alt: "Boiled eggs and fruit", text: "Post-work Snack: Boiled eggs and a small piece of fruit" },
    { img: "https://www.walderwellness.com/wp-content/uploads/2022/09/Honey-Garlic-Salmon-Parcels-Walder-Wellness-7.jpg", alt: "Grilled fish with steamed vegetables", text: "Dinner: Grilled fish with steamed vegetables (broccoli, carrots, zucchini)" },
    { img: "https://healthyfitnessmeals.com/wp-content/uploads/2018/07/HFM-Berry-Fruit-Salad-683x1024.png", alt: "Mixed berries", text: "Late Snack: A small bowl of mixed berries" }
  ],
  Thursday: [
    { img: "https://www.jessicagavin.com/wp-content/uploads/2015/05/chia-seed-pudding-with-yogurt-14-1200.jpg", alt: "Greek yogurt with fresh fruits and chia seeds", text: "Breakfast: Greek yogurt with fresh fruits and a tablespoon of chia seeds" },
    { img: "https://images.indianexpress.com/2022/11/nuts-759.jpg", alt: "A handful of nuts", text: "Snack: A handful of nuts (almonds, walnuts)" },
    { img: "https://www.slenderkitchen.com/sites/default/files/styles/gsd-1x1/public/recipe_images/southwest-quinoa-salad-4.jpg", alt: "Quinoa bowl", text: "Lunch: Quinoa bowl with black beans, corn, avocado, and a squeeze of lime" },
    { img: "https://www.verywellfit.com/thmb/B6eyh4PJPOmBNhegNDEOlxsjktA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/veggies-and-dip-1d96c27db1244efeab577ead84f3698a.jpg", alt: "Celery sticks with almond butter", text: "Snack: Celery sticks with almond butter" },
    { img: "https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_4:3/k%2FPhoto%2FRecipes%2F2019-07-recipe-balsamic-berries-honey-yogurt%2FBalsamic-Berries-Honey-Yogurt_061", alt: "Greek yogurt with berries", text: "Post-work Snack: Greek yogurt with berries" },
    { img: "https://rainbowplantlife.com/wp-content/uploads/2023/01/tofu-stir-fry-cover-photo-1-of-1.jpg", alt: "Stir-fry tofu with mixed vegetables and brown rice", text: "Dinner: Stir-fry tofu with mixed vegetables and a side of brown rice" },
    { img: "https://www.womansworld.com/wp-content/uploads/2022/09/Almond-black-tea.jpg", alt: "Herbal tea and almonds", text: "Late Snack: Herbal tea and a few almonds" }
  ],
  Friday: [
    { img: "https://emeals-menubuilder.s3.amazonaws.com/v1/recipes/799224/pictures/large_mediterranean-scrambled-eggs.jpg", alt: "Scrambled eggs with spinach and tomatoes", text: "Breakfast: Scrambled eggs with spinach and tomatoes" },
    { img: "https://www.lottaveg.com/wp-content/uploads/2017/05/Apple-Peanut-Butter-1030x687.jpg", alt: "Apple slices with peanut butter", text: "Snack: Apple slices with peanut butter" },
    { img: "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2020/04/Tuna-Salad-4.jpg", alt: "Tuna salad", text: "Lunch: Tuna salad with lettuce, red onions, and a light mayo dressing" },
    { img: "https://blog-images-1.pharmeasy.in/2018/07/02113415/Image-_2.jpg", alt: "Dark chocolate", text: "Snack: A small piece of dark chocolate (70% cocoa or higher)" },
    { img: "https://cdn11.bigcommerce.com/s-5ljyj9oebs/images/stencil/600x600/products/3307/27081/P111522192842_1__31988.1708093467.jpg?c=2", alt: "Boiled eggs and fruit", text: "Post-work Snack: Boiled eggs and a small piece of fruit" },
    { img: "https://www.walderwellness.com/wp-content/uploads/2022/09/Honey-Garlic-Salmon-Parcels-Walder-Wellness-7.jpg", alt: "Grilled fish with steamed vegetables", text: "Dinner: Grilled fish with steamed vegetables (broccoli, carrots, zucchini)" },
    { img: "https://healthyfitnessmeals.com/wp-content/uploads/2018/07/HFM-Berry-Fruit-Salad-683x1024.png", alt: "Mixed berries", text: "Late Snack: A small bowl of mixed berries" }
  ],
  Saturday: [
    { img: "https://www.keepingthepeas.com/wp-content/uploads/2022/06/banana-spinach-smoothie-4.jpg", alt: "Smoothie", text: "Breakfast: Smoothie (banana, spinach, protein powder, almond milk)" },
    { img: "https://www.verywellfit.com/thmb/B6eyh4PJPOmBNhegNDEOlxsjktA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/veggies-and-dip-1d96c27db1244efeab577ead84f3698a.jpg", alt: "Carrot sticks with hummus", text: "Snack: Carrot sticks with hummus" },
    { img: "https://www.theculinarycompass.com/wp-content/uploads/2021/01/Balsamic-Grilled-Chicken-Salad-2.jpg.webp", alt: "Grilled chicken salad", text: "Lunch: Grilled chicken salad with mixed greens, cherry tomatoes, cucumber, and a light vinaigrette" },
    { img: "https://www.verywellfit.com/thmb/B6eyh4PJPOmBNhegNDEOlxsjktA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/veggies-and-dip-1d96c27db1244efeab577ead84f3698a.jpg", alt: "Celery sticks with almond butter", text: "Snack: Celery sticks with almond butter" },
    { img: "https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_4:3/k%2FPhoto%2FRecipes%2F2019-07-recipe-balsamic-berries-honey-yogurt%2FBalsamic-Berries-Honey-Yogurt_061", alt: "Greek yogurt with berries", text: "Post-work Snack: Greek yogurt with berries" },
    { img: "https://rainbowplantlife.com/wp-content/uploads/2023/01/tofu-stir-fry-cover-photo-1-of-1.jpg", alt: "Stir-fry tofu with mixed vegetables and brown rice", text: "Dinner: Stir-fry tofu with mixed vegetables and a side of brown rice" },
    { img: "https://www.womansworld.com/wp-content/uploads/2022/09/Almond-black-tea.jpg", alt: "Herbal tea and almonds", text: "Late Snack: Herbal tea and a few almonds" }
  ],
  Sunday: [
    { img: "https://www.jessicagavin.com/wp-content/uploads/2015/05/chia-seed-pudding-with-yogurt-14-1200.jpg", alt: "Greek yogurt with fresh fruits and chia seeds", text: "Breakfast: Greek yogurt with fresh fruits and a tablespoon of chia seeds" },
    { img: "https://images.indianexpress.com/2022/11/nuts-759.jpg", alt: "A handful of nuts", text: "Snack: A handful of nuts (almonds, walnuts)" },
    { img: "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2020/04/Tuna-Salad-4.jpg", alt: "Tuna salad", text: "Lunch: Tuna salad with lettuce, red onions, and a light mayo dressing" },
    { img: "https://blog-images-1.pharmeasy.in/2018/07/02113415/Image-_2.jpg", alt: "Dark chocolate", text: "Snack: A small piece of dark chocolate (70% cocoa or higher)" },
    { img: "https://cdn11.bigcommerce.com/s-5ljyj9oebs/images/stencil/600x600/products/3307/27081/P111522192842_1__31988.1708093467.jpg?c=2", alt: "Boiled eggs and fruit", text: "Post-work Snack: Boiled eggs and a small piece of fruit" },
    { img: "https://www.walderwellness.com/wp-content/uploads/2022/09/Honey-Garlic-Salmon-Parcels-Walder-Wellness-7.jpg", alt: "Grilled fish with steamed vegetables", text: "Dinner: Grilled fish with steamed vegetables (broccoli, carrots, zucchini)" },
    { img: "https://healthyfitnessmeals.com/wp-content/uploads/2018/07/HFM-Berry-Fruit-Salad-683x1024.png", alt: "Mixed berries", text: "Late Snack: A small bowl of mixed berries" }
  ],
};

const imageStyle = {
  width: '200px',
  height: '200px',
  objectFit: 'cover',
  marginRight: '10px',
};

const mealPlanForDayStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
};

const dayContainerStyle = {
  flex: '1 0 48%',
  marginBottom: '20px',
};

const mealItemStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginBottom: '20px',
  maxWidth: '300px',
};

const mealTextStyle = {
  marginTop: '10px',
  textAlign: 'center',
};

const MealItem = ({ img, alt, text }) => (
  <li style={mealItemStyle}>
    <img src={img} alt={alt} style={imageStyle} />
    <span style={mealTextStyle}>{text}</span>
  </li>
);

const MealPlanForDay = ({ day, meals }) => (
  <div style={dayContainerStyle}>
    <h3>{day}</h3>
    <ul style={mealPlanForDayStyle}>
      {meals.map((meal, index) => (
        <MealItem key={index} {...meal} />
      ))}
    </ul>
  </div>
);

const MealPlan = () => {
  const [selectedDay, setSelectedDay] = useState(null);

  const toggleDay = (day) => {
    setSelectedDay(selectedDay === day ? null : day);
  };

  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  return (
    <div>
      <h2>Meal Plan</h2>
      <div>
        {daysOfWeek.map((day) => (
          <button key={day} onClick={() => toggleDay(day)}>
            {day}
          </button>
        ))}
      </div>
      {daysOfWeek.map((day) => (
        selectedDay === day && (
          <MealPlanForDay
            key={day}
            day={day}
            meals={meals[day]} 
          />
        )
      ))}
    </div>
  );
};

export default MealPlan;
