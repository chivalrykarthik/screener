import axios from 'axios';


const loadData = async (yr) => {
    try {
        const res = await axios.get(`/screener/points/${yr}`);
        return res;
    } catch (e) {
        alert('Failed to load');
    }
}

export default loadData;