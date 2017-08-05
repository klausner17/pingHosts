import Host from './Host';

class HostIterator implements IIterator {
    
    private _listHosts: Array<Host>;
    private _index: number;

    constructor(listHost: Array<Host>) {
        this._listHosts = listHost;
        this._index = 0;
    }

    public next(): IHost {
        let host = this._listHosts[this._index];
        this._index++;
        return host;
    }
    
    public hasNext(): Boolean {
        if(this._index < this._listHosts.length){
            return true
        }
        return false;
    }
}

export default HostIterator;