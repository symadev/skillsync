const BackgroundAnimation = () => {
  const animationClasses = [
    "float1", "float2", "float3", "float4", "float5",
    "float6", "float7", "float8", "float9", "float10"
  ];
  const sizes = [
    "w-20 h-20 left-[25%]",
    "w-5 h-5 left-[10%]",
    "w-5 h-5 left-[70%]",
    "w-16 h-16 left-[40%]",
    "w-5 h-5 left-[65%]",
    "w-28 h-28 left-[75%]",
    "w-36 h-36 left-[35%]",
    "w-6 h-6 left-[50%]",
    "w-4 h-4 left-[20%]",
    "w-36 h-36 left-[85%]"
  ];

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 bg-black overflow-hidden">
      <ul className="relative w-full h-full">
        {animationClasses.map((anim, index) => (
          <li
            key={index}
            className={`absolute bottom-[-150px] list-none bg-orange-300/20 rounded-full ${anim} ${sizes[index]}`}
          ></li>
        ))}
      </ul>
    </div>
  );
};

export default BackgroundAnimation;
