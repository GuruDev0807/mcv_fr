const shortAddress = (address) => {
  return address?.slice(0, 6) + "..." + address?.slice(-4);
};

const formatNumber = (number) => {
  return number.toLocaleString("en-US");
};

module.exports = {
  shortAddress,
  formatNumber,
};
