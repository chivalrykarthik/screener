import axios from 'axios';


const loadData = async (yr, index) => {
    try {
        const reqIndex = index || 'n50';
        const res = await axios.get(`/screener/points/${reqIndex}/${yr}`);
        return res;
    } catch (e) {
        alert('Failed to load');
    }
}

export default loadData;