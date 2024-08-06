// src/components/MealPlan.jsx
import React from 'react';

const imageStyle = {
  width: '200px',
  height: '200px',
  objectFit: 'cover',
  marginRight: '10px',
};

const MealPlan = () => (
  <div>
    <h2>Meal Plan</h2>
    
    <h3>Monday</h3>
    <ul>
      <li>
        <img src="https://www.jessicagavin.com/wp-content/uploads/2015/05/chia-seed-pudding-with-yogurt-14-1200.jpg" alt="Greek yogurt with fresh fruits and chia seeds" style={imageStyle} />
        Breakfast: Greek yogurt with fresh fruits and a tablespoon of chia seeds
      </li>
      <li>
        <img src="https://images.indianexpress.com/2022/11/nuts-759.jpg" alt="A handful of nuts" style={imageStyle} />
        Snack: A handful of nuts (almonds, walnuts)
      </li>
      <li>
        <img src="https://www.theculinarycompass.com/wp-content/uploads/2021/01/Balsamic-Grilled-Chicken-Salad-2.jpg.webp" alt="Grilled chicken salad" style={imageStyle} />
        Lunch: Grilled chicken salad with mixed greens, cherry tomatoes, cucumber, and a light vinaigrette
      </li>
      <li>
        <img src="https://blog-images-1.pharmeasy.in/2018/07/02113415/Image-_2.jpg" alt="Dark chocolate" style={imageStyle} />
        Snack: A small piece of dark chocolate (70% cocoa or higher)
      </li>
      <li>
        <img src="https://cdn11.bigcommerce.com/s-5ljyj9oebs/images/stencil/600x600/products/3307/27081/P111522192842_1__31988.1708093467.jpg?c=2" alt="Boiled eggs and fruit" style={imageStyle} />
        Post-work Snack: Boiled eggs and a small piece of fruit
      </li>
      <li>
        <img src="https://www.walderwellness.com/wp-content/uploads/2022/09/Honey-Garlic-Salmon-Parcels-Walder-Wellness-7.jpg" alt="Grilled fish with steamed vegetables" style={imageStyle} />
        Dinner: Grilled fish with steamed vegetables (broccoli, carrots, zucchini)
      </li>
      <li>
        <img src="https://healthyfitnessmeals.com/wp-content/uploads/2018/07/HFM-Berry-Fruit-Salad-683x1024.png" alt="Mixed berries" style={imageStyle} />
        Late Snack: A small bowl of mixed berries
      </li>
    </ul>

    <h3>Tuesday</h3>
    <ul>
      <li>
        <img src="https://emeals-menubuilder.s3.amazonaws.com/v1/recipes/799224/pictures/large_mediterranean-scrambled-eggs.jpg" alt="Scrambled eggs with spinach and tomatoes" style={imageStyle} />
        Breakfast: Scrambled eggs with spinach and tomatoes
      </li>
      <li>
        <img src="https://www.lottaveg.com/wp-content/uploads/2017/05/Apple-Peanut-Butter-1030x687.jpg" alt="Apple slices with peanut butter" style={imageStyle} />
        Snack: Apple slices with peanut butter
      </li>
      <li>
        <img src="https://www.slenderkitchen.com/sites/default/files/styles/gsd-1x1/public/recipe_images/southwest-quinoa-salad-4.jpg" alt="Quinoa bowl" style={imageStyle} />
        Lunch: Quinoa bowl with black beans, corn, avocado, and a squeeze of lime
      </li>
      <li>
        <img src="https://www.verywellfit.com/thmb/B6eyh4PJPOmBNhegNDEOlxsjktA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/veggies-and-dip-1d96c27db1244efeab577ead84f3698a.jpg" alt="Celery sticks with almond butter" style={imageStyle} />
        Snack: Celery sticks with almond butter
      </li>
      <li>
        <img src="https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_4:3/k%2FPhoto%2FRecipes%2F2019-07-recipe-balsamic-berries-honey-yogurt%2FBalsamic-Berries-Honey-Yogurt_061" alt="Greek yogurt with berries" style={imageStyle} />
        Post-work Snack: Greek yogurt with berries
      </li>
      <li>
        <img src="https://rainbowplantlife.com/wp-content/uploads/2023/01/tofu-stir-fry-cover-photo-1-of-1.jpg" alt="Stir-fry tofu with mixed vegetables and brown rice" style={imageStyle} />
        Dinner: Stir-fry tofu with mixed vegetables and a side of brown rice
      </li>
      <li>
        <img src="https://www.womansworld.com/wp-content/uploads/2022/09/Almond-black-tea.jpg" alt="Herbal tea and almonds" style={imageStyle} />
        Late Snack: Herbal tea and a few almonds
      </li>
    </ul>

    <h3>Wednesday</h3>
    <ul>
      <li>
        <img src="https://www.keepingthepeas.com/wp-content/uploads/2022/06/banana-spinach-smoothie-4.jpg" alt="Smoothie" style={imageStyle} />
        Breakfast: Smoothie (banana, spinach, protein powder, almond milk)
      </li>
      <li>
        <img src="https://www.verywellfit.com/thmb/B6eyh4PJPOmBNhegNDEOlxsjktA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/veggies-and-dip-1d96c27db1244efeab577ead84f3698a.jpg" alt="Carrot sticks with hummus" style={imageStyle} />
        Snack: Carrot sticks with hummus
      </li>
      <li>
        <img src="https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2020/04/Tuna-Salad-4.jpg" alt="Tuna salad" style={imageStyle} />
        Lunch: Tuna salad with lettuce, red onions, and a light mayo dressing
      </li>
      <li>
        <img src="https://blog-images-1.pharmeasy.in/2018/07/02113415/Image-_2.jpg" alt="Dark chocolate" style={imageStyle} />
        Snack: A small piece of dark chocolate (70% cocoa or higher)
      </li>
      <li>
        <img src="https://cdn11.bigcommerce.com/s-5ljyj9oebs/images/stencil/600x600/products/3307/27081/P111522192842_1__31988.1708093467.jpg?c=2" alt="Boiled eggs and fruit" style={imageStyle} />
        Post-work Snack: Boiled eggs and a small piece of fruit
      </li>
      <li>
        <img src="https://www.walderwellness.com/wp-content/uploads/2022/09/Honey-Garlic-Salmon-Parcels-Walder-Wellness-7.jpg" alt="Grilled fish with steamed vegetables" style={imageStyle} />
        Dinner: Grilled fish with steamed vegetables (broccoli, carrots, zucchini)
      </li>
      <li>
        <img src="https://healthyfitnessmeals.com/wp-content/uploads/2018/07/HFM-Berry-Fruit-Salad-683x1024.png" alt="Mixed berries" style={imageStyle} />
        Late Snack: A small bowl of mixed berries
      </li>
    </ul>

    <h3>Thursday</h3>
    <ul>
      <li>
        <img src="https://www.jessicagavin.com/wp-content/uploads/2015/05/chia-seed-pudding-with-yogurt-14-1200.jpg" alt="Greek yogurt with fresh fruits and chia seeds" style={imageStyle} />
        Breakfast: Greek yogurt with fresh fruits and a tablespoon of chia seeds
      </li>
      <li>
        <img src="https://images.indianexpress.com/2022/11/nuts-759.jpg" alt="A handful of nuts" style={imageStyle} />
        Snack: A handful of nuts (almonds, walnuts)
      </li>
      <li>
        <img src="https://www.slenderkitchen.com/sites/default/files/styles/gsd-1x1/public/recipe_images/southwest-quinoa-salad-4.jpg" alt="Quinoa bowl" style={imageStyle} />
        Lunch: Quinoa bowl with black beans, corn, avocado, and a squeeze of lime
      </li>
      <li>
        <img src="https://www.verywellfit.com/thmb/B6eyh4PJPOmBNhegNDEOlxsjktA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/veggies-and-dip-1d96c27db1244efeab577ead84f3698a.jpg" alt="Celery sticks with almond butter" style={imageStyle} />
        Snack: Celery sticks with almond butter
      </li>
      <li>
        <img src="https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_4:3/k%2FPhoto%2FRecipes%2F2019-07-recipe-balsamic-berries-honey-yogurt%2FBalsamic-Berries-Honey-Yogurt_061" alt="Greek yogurt with berries" style={imageStyle} />
        Post-work Snack: Greek yogurt with berries
      </li>
      <li>
        <img src="https://rainbowplantlife.com/wp-content/uploads/2023/01/tofu-stir-fry-cover-photo-1-of-1.jpg" alt="Stir-fry tofu with mixed vegetables and brown rice" style={imageStyle} />
        Dinner: Stir-fry tofu with mixed vegetables and a side of brown rice
      </li>
      <li>
        <img src="https://www.womansworld.com/wp-content/uploads/2022/09/Almond-black-tea.jpg" alt="Herbal tea and almonds" style={imageStyle} />
        Late Snack: Herbal tea and a few almonds
      </li>
    </ul>

    <h3>Friday</h3>
    <ul>
      <li>
        <img src="https://emeals-menubuilder.s3.amazonaws.com/v1/recipes/799224/pictures/large_mediterranean-scrambled-eggs.jpg" alt="Scrambled eggs with spinach and tomatoes" style={imageStyle} />
        Breakfast: Scrambled eggs with spinach and tomatoes
      </li>
      <li>
        <img src="https://www.lottaveg.com/wp-content/uploads/2017/05/Apple-Peanut-Butter-1030x687.jpg" alt="Apple slices with peanut butter" style={imageStyle} />
        Snack: Apple slices with peanut butter
      </li>
      <li>
        <img src="https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2020/04/Tuna-Salad-4.jpg" alt="Tuna salad" style={imageStyle} />
        Lunch: Tuna salad with lettuce, red onions, and a light mayo dressing
      </li>
      <li>
        <img src="https://blog-images-1.pharmeasy.in/2018/07/02113415/Image-_2.jpg" alt="Dark chocolate" style={imageStyle} />
        Snack: A small piece of dark chocolate (70% cocoa or higher)
      </li>
      <li>
        <img src="https://cdn11.bigcommerce.com/s-5ljyj9oebs/images/stencil/600x600/products/3307/27081/P111522192842_1__31988.1708093467.jpg?c=2" alt="Boiled eggs and fruit" style={imageStyle} />
        Post-work Snack: Boiled eggs and a small piece of fruit
      </li>
      <li>
        <img src="https://www.walderwellness.com/wp-content/uploads/2022/09/Honey-Garlic-Salmon-Parcels-Walder-Wellness-7.jpg" alt="Grilled fish with steamed vegetables" style={imageStyle} />
        Dinner: Grilled fish with steamed vegetables (broccoli, carrots, zucchini)
      </li>
      <li>
        <img src="https://healthyfitnessmeals.com/wp-content/uploads/2018/07/HFM-Berry-Fruit-Salad-683x1024.png" alt="Mixed berries" style={imageStyle} />
        Late Snack: A small bowl of mixed berries
      </li>
    </ul>

    <h3>Saturday</h3>
    <ul>
      <li>
        <img src="https://www.keepingthepeas.com/wp-content/uploads/2022/06/banana-spinach-smoothie-4.jpg" alt="Smoothie" style={imageStyle} />
        Breakfast: Smoothie (banana, spinach, protein powder, almond milk)
      </li>
      <li>
        <img src="https://www.verywellfit.com/thmb/B6eyh4PJPOmBNhegNDEOlxsjktA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/veggies-and-dip-1d96c27db1244efeab577ead84f3698a.jpg" alt="Carrot sticks with hummus" style={imageStyle} />
        Snack: Carrot sticks with hummus
      </li>
      <li>
        <img src="https://www.theculinarycompass.com/wp-content/uploads/2021/01/Balsamic-Grilled-Chicken-Salad-2.jpg.webp" alt="Grilled chicken salad" style={imageStyle} />
        Lunch: Grilled chicken salad with mixed greens, cherry tomatoes, cucumber, and a light vinaigrette
      </li>
      <li>
        <img src="https://www.verywellfit.com/thmb/B6eyh4PJPOmBNhegNDEOlxsjktA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/veggies-and-dip-1d96c27db1244efeab577ead84f3698a.jpg" alt="Celery sticks with almond butter" style={imageStyle} />
        Snack: Celery sticks with almond butter
      </li>
      <li>
        <img src="https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_4:3/k%2FPhoto%2FRecipes%2F2019-07-recipe-balsamic-berries-honey-yogurt%2FBalsamic-Berries-Honey-Yogurt_061" alt="Greek yogurt with berries" style={imageStyle} />
        Post-work Snack: Greek yogurt with berries
      </li>
      <li>
        <img src="https://rainbowplantlife.com/wp-content/uploads/2023/01/tofu-stir-fry-cover-photo-1-of-1.jpg" alt="Stir-fry tofu with mixed vegetables and brown rice" style={imageStyle} />
        Dinner: Stir-fry tofu with mixed vegetables and a side of brown rice
      </li>
      <li>
        <img src="https://www.womansworld.com/wp-content/uploads/2022/09/Almond-black-tea.jpg" alt="Herbal tea and almonds" style={imageStyle} />
        Late Snack: Herbal tea and a few almonds
      </li>
    </ul>

    <h3>Sunday</h3>
    <ul>
      <li>
        <img src="https://www.jessicagavin.com/wp-content/uploads/2015/05/chia-seed-pudding-with-yogurt-14-1200.jpg" alt="Greek yogurt with fresh fruits and chia seeds" style={imageStyle} />
        Breakfast: Greek yogurt with fresh fruits and a tablespoon of chia seeds
      </li>
      <li>
        <img src="https://images.indianexpress.com/2022/11/nuts-759.jpg" alt="A handful of nuts" style={imageStyle} />
        Snack: A handful of nuts (almonds, walnuts)
      </li>
      <li>
        <img src="https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2020/04/Tuna-Salad-4.jpg" alt="Tuna salad" style={imageStyle} />
        Lunch: Tuna salad with lettuce, red onions, and a light mayo dressing
      </li>
      <li>
        <img src="https://blog-images-1.pharmeasy.in/2018/07/02113415/Image-_2.jpg" alt="Dark chocolate" style={imageStyle} />
        Snack: A small piece of dark chocolate (70% cocoa or higher)
      </li>
      <li>
        <img src="https://cdn11.bigcommerce.com/s-5ljyj9oebs/images/stencil/600x600/products/3307/27081/P111522192842_1__31988.1708093467.jpg?c=2" alt="Boiled eggs and fruit" style={imageStyle} />
        Post-work Snack: Boiled eggs and a small piece of fruit
      </li>
      <li>
        <img src="https://www.walderwellness.com/wp-content/uploads/2022/09/Honey-Garlic-Salmon-Parcels-Walder-Wellness-7.jpg" alt="Grilled fish with steamed vegetables" style={imageStyle} />
        Dinner: Grilled fish with steamed vegetables (broccoli, carrots, zucchini)
      </li>
      <li>
        <img src="https://healthyfitnessmeals.com/wp-content/uploads/2018/07/HFM-Berry-Fruit-Salad-683x1024.png" alt="Mixed berries" style={imageStyle} />
        Late Snack: A small bowl of mixed berries
      </li>
    </ul>
  </div>
);

export default MealPlan;
