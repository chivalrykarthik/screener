import { TextArea, Button, Header } from './Styles/Txt'
const Txt = ({ value, setVal, onSubmit }) => {
    return (
        <>
            <Header>
                <TextArea value={value} onChange={(e) => setVal(e.target.value)} placeholder='Enter your JSON' />
                <Button onClick={onSubmit} >Add</Button>
            </Header>
        </>
    )
};
export default Txt;