import React from "react";
import Typewriter from "typewriter-effect";
import TerrosoComputer from "../../../src/assets/terroso_imgs/terroso_computer.png";

const feedbacks: { [key: number]: { title: string; description: string } } = {
  [0]: {
    title: "Don't Give Up!",
    description:
      "I know it can be tough, but every step forward is progress! Keep practicing, and you’ll see improvement in no time. Believe in yourself and take this as a fresh start!",
  },
  [1]: {
    title: "Keep Going!",
    description:
      "You’re on the right track! Every effort counts, and with a bit more focus, you’ll surely get better. Don’t be discouraged—keep trying, and you’ll make it!",
  },
  [2]: {
    title: "You're Improving!",
    description:
      "You’ve made some progress, which is something to be proud of! Continue working hard and stay dedicated to your goals. Little by little, you’ll get there!",
  },
  [3]: {
    title: "Steady Progress!",
    description:
      "You’re making strides! Keep up the effort, and remember that improvement takes time. Stay motivated and continue pushing forward!",
  },
  [4]: {
    title: "Halfway There!",
    description:
      "Well done! You’ve reached halfway, and that’s no small achievement. Stay consistent in your studies, and great results will follow. Keep going!",
  },
  [5]: {
    title: "You're Doing Well!",
    description:
      "You’ve put in solid effort, and it shows! Continue honing your skills and aiming higher. Stay focused, and you’ll reach new heights!",
  },
  [6]: {
    title: "Great Job!",
    description:
      "You’ve done really well! Your hard work is paying off, and you’re on the path to success. Keep up the dedication and aim for even higher!",
  },
  [7]: {
    title: "Excellent Work!",
    description:
      "You’re so close to perfection! Your effort and determination are impressive, and with just a bit more, you’ll achieve even greater things. Keep shining!",
  },
  [8]: {
    title: "Outstanding!",
    description:
      "You’ve reached the top! Congratulations on an amazing achievement. Your hard work and perseverance have truly paid off—keep pushing yourself to maintain this excellence!",
  },
};

const FinishFeedback: React.FC<{ score: number; total: number }> = ({
  score,
  total,
}) => {
  return (
    <>
      <div className="p-16 flex flex-row justify-between">
        <div className="w-[75%]">
          <h1 className="text-4xl font-bold mb-8">{feedbacks[score].title}</h1>
          <span className="text-2xl">
            <Typewriter
              options={{
                strings: [
                  `You got ${score} from ${total} questions right! ${feedbacks[score].description}`,
                ],
                autoStart: true,
                loop: false,
                delay: 20,
                deleteSpeed: Infinity,
              }}
            />
          </span>
        </div>
        <div className="flex flex-col items-center justify-center ">
          {/* TODO - ADD CORRECT TERROSO */}
          <img src={TerrosoComputer} alt="" />
        </div>
      </div>
      <button
        className="ml-16 w-1/5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => window.location.reload()}
      >
        Quiz Menu
      </button>
    </>
  );
};

export default FinishFeedback;
