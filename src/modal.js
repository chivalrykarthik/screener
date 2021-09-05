import { useStore } from './store';
import { ModalContainer, ModalContent } from './Styles/Modal';
import TblView from './view/TblView';

const Modal = ({ showModal }) => {
    const [store, dispatch] = useStore();
    const stocks = store.stocks.filter((stock, key) => {
        return store.compare.indexOf(key) > -1 ? true : false;
    })
    return (
        <>
            <ModalContainer>
                <ModalContent>
                    <button onClick={showModal}>Close</button>
                    <TblView
                        average={store.average}
                        stocks={stocks}
                        dispatch={dispatch}
                        filtersCnt={store.filtersCnt}
                        searchParams={store.searchParams}
                        compare={store.compare}
                    />

                </ModalContent>
            </ModalContainer>
        </>
    );
}

export default Modal;