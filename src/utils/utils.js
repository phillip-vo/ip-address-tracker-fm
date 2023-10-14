import axios from "axios";

const baseUrl =
  "https://geo.ipify.org/api/v2/country,city?apiKey=at_in38uMgiVQs1VkmDWu47nwzohkVu9";

export const checkIfIpAddressOrDomain = (userInput) => {
  const ipAddressPattern = new RegExp(/\b\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\b/);
  const domainPattern = new RegExp(
    /^(?!-)[A-Za-z0-9-]+([\-\.]{1}[a-z0-9]+)*\.[A-Za-z]{2,6}$/
  );

  const url = new URL(baseUrl);
  const params = new URLSearchParams(url.search);

  if (ipAddressPattern.test(userInput)) {
    params.append("ipAddress", userInput);
    return `${url.origin}${url.pathname}?${params}`;
  }

  if (domainPattern.test(userInput)) {
    params.append("domain", userInput);
    return `${url.origin}${url.pathname}?${params}`;
  }

  return "";
};

export const isEmpty = (data) => {
  if (Object.keys(data).length === 0) {
    return true;
  }

  return false;
};
