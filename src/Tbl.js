import { useStore } from './store';
import TblView from './view/TblView';

const Tbl = () => {
    const [store, dispatch] = useStore();
    return (
        <>
            <TblView
                average={store.average}
                stocks={store.stocks}
                dispatch={dispatch}
                filtersCnt={store.filtersCnt}
                searchParams={store.searchParams}
            />
        </>
    )
}
export default Tbl;