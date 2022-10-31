import axios from "axios";

export async function getAddressByQuery(query: string) {
  const result = await axios.get(
    `https://api.dataforsyningen.dk/adresser?q=${query}`
  );

  return result.data;
}

export async function getAddressById(id: string) {
  const result = await axios.get(
    `https://api.dataforsyningen.dk/adresser?id=${id}`
  );

  return result;
}
