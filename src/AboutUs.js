import { Typography } from 'antd';
const { Title, Paragraph } = Typography;

export function AboutUs() {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: 24 }}>
      <Title>About Our Fitness App</Title>
      <Paragraph>
        Our fitness app is designed to help you achieve your fitness goals by providing personalized workout plans and tracking your progress.
      </Paragraph>
      <Paragraph>
        With our app, you can easily create a workout plan that fits your schedule and preferences. You can also track your workouts, set goals, and see your progress over time.
      </Paragraph>
      <Paragraph>
        Our app also provides a variety of workout routines and exercises, from strength training to cardio, to help you reach your fitness goals. Whether you're a beginner or an experienced athlete, our app has something for you.
      </Paragraph>
      <Paragraph>
        Download our app today and start your fitness journey!
      </Paragraph>
    </div>
  );
}