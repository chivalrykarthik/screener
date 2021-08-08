import { TextArea, Button, Header, Avg } from './Styles/Txt'
import action from './store/action';
import { useStore } from './store';
const Txt = () => {
    const [store, dispatch] = useStore();
    const { txt, } = store;
    const handleChange = (e) => {
        const txt = e.target.value;
        const type = action.ADD_TEXT;
        dispatch({ data: { txt }, type });
    }
    const handleAvg = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        //const type = name === 'highAvg' ? action.UPD_HIGH_AVG : action.UPD_LOW_AVG;
        let type;
        if (name === 'highAvg') {
            type = action.UPD_HIGH_AVG
        } else if (name === 'maxPer') {
            type = action.UPD_MAX_PER;
        } else {
            type = action.UPD_LOW_AVG;
        }
        dispatch({ data: { value }, type });
    }
    const handleSubmit = () => {
        dispatch({ type: action.ADD_STOCKS });
        dispatch({ type: action.ADD_FILTERS });
        dispatch({ type: action.ADD_AVG });
    }
    return (
        <>
            <Header>
                <TextArea value={txt} onChange={handleChange} placeholder='Enter your JSON' />
                <Avg>
                    <label>HighAvg</label><input type='text' name='highAvg' value={store.highAvg} onChange={handleAvg} />
                    <label>LowAvg</label><input type='text' name='lowAvg' value={store.lowAvg} onChange={handleAvg} />
                    <label>Diff</label><input type='text' name='maxPer' value={store.maxPer} onChange={handleAvg} />
                </Avg>
                <Button onClick={handleSubmit} >Add</Button>
            </Header>
        </>
    )
};
export default Txt;