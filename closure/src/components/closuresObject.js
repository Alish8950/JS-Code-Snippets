export const closuresObject = () => {
  let count = 0;

  return {
    increament() {
      return ++count;
    },
    reset() {
      count = 0;
      return count;
    },

    
  };
};
