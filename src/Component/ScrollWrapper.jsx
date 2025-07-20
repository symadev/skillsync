import useLenis from "../Data/useLenis";

const ScrollWrapper = ({ children }) => {
  useLenis(); 

  return <>{children}</>;
};

export default ScrollWrapper;
