import { TextArea, Button, Header } from './Styles/Txt'
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
    const handleSubmit = () => {
        dispatch({ type: action.ADD_STOCKS });
        dispatch({ type: action.ADD_FILTERS });
        dispatch({ type: action.ADD_AVG });
    }
    return (
        <>
            <Header>
                <TextArea value={txt} onChange={handleChange} placeholder='Enter your JSON' />
                <Button onClick={handleSubmit} >Add</Button>
            </Header>
        </>
    )
};
export default Txt;