import axios from 'axios';
export default async method => {
  return new Promise((resolve, reject) => {
    setTimeout(async () => {
      return resolve(await getApiWithoutAuthCall(method));
    }, 100);
  });
};

export async function getApiWithoutAuthCall(method: any) {
  console.log('request_data', method);
  try {
    let apiName = `${method?.type}?page=${method?.payload?.page}&results=${method?.payload?.limit}`;
    let response = axios.get(apiName, {headers: {}});

    let responseJson = await (await response).data;
    console.log('response>>>>>>>>>>', responseJson);
    return responseJson;
  } catch (error) {
    console.error(error);
  }
}