import {AppModel} from "../Model/AppModel";
import {AvailableModel} from "../Model/AvailableModel";

class DataService {

    getResource = async (url) => {
        let res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }

        return await res.json();
    }


    getData = async () => {
        const res = await this.getResource(`http://localhost:3001/records`);
        let values = res.map(v => {
            return new AppModel(v.data, v.time, v.clinicName, v.address, v.doctorName, v.profile, v.doctorImg)
        });
        return new AvailableModel(values);
    }
}
export default DataService;