const SEPARATOR = ",";

const customThousandSeparator = (number, separator = SEPARATOR) => {
  if (number < 1000) return number.toString();

  const dividedOnThouzand = number / 1000;
  const withoutDecimals = Math.trunc(dividedOnThouzand);

  return customThousandSeparator(withoutDecimals).concat(
    separator,
    (number - withoutDecimals * 1000).toString().padStart(3, "0")
  );
};

export default customThousandSeparator;
