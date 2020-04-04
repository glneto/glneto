const get = () => {
  if (window.matchMedia("(min-width: 1281px)").matches) {
    return "large";
  } else if (window.matchMedia("(min-width: 729px)").matches) {
    return "medium";
  } else {
    return "small";
  }
};

const context = () => ({
  isSmall: isSmall(),
  isMedium: isMedium(),
  isLarge: isLarge(),
});

const isSmall = () => get() === "small";
const checkSmall = (value) => value === "small";

const isMedium = () => get() === "medium";
const checkMedium = (value) => value === "medium";

const isLarge = () => get() === "large";
const checkLarge = (value) => value === "large";

const breakpoint = {
  get,
  context,
  isSmall,
  checkSmall,
  isMedium,
  checkMedium,
  isLarge,
  checkLarge,
};

export default breakpoint;
