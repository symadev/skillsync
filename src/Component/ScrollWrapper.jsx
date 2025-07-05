import useLenis from "../Data/useLenis";

const ScrollWrapper = ({ children }) => {
  useLenis(); // 🔄 Lenis init

  return <>{children}</>;
};

export default ScrollWrapper;
