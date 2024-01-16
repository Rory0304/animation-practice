import React from "react";
import "../../../styles/LayoutAnimation/styles.css";
import { motion } from "framer-motion";

/**
 * Animation Layout: Layout props를 true로 설정하면 컴포넌트의 layout이 변할 때 그 모습을 부드럽게 이어준다.
 * - 리스트의 순서가 바뀌었을 때
 * - width 나 position이 변했을 때
 * - 부모의 레이아웃이 변할 때 ( flex 혹은 grid 로 변할 때)
 * - 이외의 컴포넌트의 레이아웃이 변할 때
 */
const spring = {
  type: "spring",
  stiffness: 700, // Stiffness of the spring. Higher values will create more sudden movement
  damping: 70, // Strength of opposing force. If set to 0, spring will oscillate indefinitely. Set to 10 by default.
};

/**
 * Layout Transition
 * data-isOn(true): justify-content flext-end
 * data-isOn(false): justify-content flex-start
 */
const LayoutAnimation: React.FC = () => {
  const [isToggleOn, setIsToggleOn] = React.useState(false);

  return (
    <div
      className="switch"
      data-isOn={isToggleOn}
      onClick={() => setIsToggleOn((current) => !current)}
    >
      <motion.div className="handle" layout transition={spring} />
    </div>
  );
};

export default LayoutAnimation;
