const generateRandomNoArray = (min, max) => {
  let randomNoArray = [];

  const generateRandomNo = () => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  for (let i = 0; randomNoArray.length < 12; i += 1) {
    const randomNo = generateRandomNo();
    if (randomNoArray.includes(randomNo)) {
      // Do nothing
    } else {
      randomNoArray = [...randomNoArray, randomNo];
    }
  }

  return randomNoArray;
};

export default generateRandomNoArray;
