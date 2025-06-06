function outerFunction() {
  let count = 0;

  return function () {
    return (count = count + 1);
  };
}

export const counter = outerFunction();

// Why closures allows private space - It is because the returned function holds the reference of its lexical environment of outerFunction, count remains alive even after outer function completes