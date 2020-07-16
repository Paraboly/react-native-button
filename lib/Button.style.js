export const _container = (width, height, backgroundColor) => ({
  width,
  height,
  backgroundColor,
  borderRadius: 12,
  alignItems: "center",
  justifyContent: "center",
});

export default {
  shadowStyle: {
    shadowRadius: 5,
    shadowOpacity: 0.35,
    shadowColor: "#757575",
    shadowOffset: {
      width: 3,
      height: 3,
    },
  },
  textStyle: {
    color: "#fff",
  },
};
