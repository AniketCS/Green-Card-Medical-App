import axios from 'axios';

export const PsychotropicMonitoringUpdate = async (name, column, value) => {
  try {
    const response = await axios.post('https://gpgc-server.vercel.app/api/PsychotropicMonitoringSection/update', {
      name,
      column,
      value
    });
    console.log(response.data); // log response from server
    return response.data;
  } catch (error) {
    console.error(error);
    throw error; // throw error to be handled by calling function
  }
};


export const submitDrug = async (drugName, Antipsychotics, Lithium, Valproate) => {
  try {
    const response = await axios.post('https://gpgc-server.vercel.app/api/add/PsychotropicMonitoringSection', {
      drugName, Antipsychotics, Lithium, Valproate
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
