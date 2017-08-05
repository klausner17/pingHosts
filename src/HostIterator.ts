import Host from './Host';

class HostIterator implements IIterator {
    
    private _listHosts: Array<Host>;
    private _index: number;

    constructor(listHost: Array<Host>) {
        this._listHosts = listHost;
        this._index = 0;
    }

    next(): IHost {
        return this._listHosts[this._index];
    }
    hasNext(): Boolean {
        if(this._index > this._listHosts.length - 1)
            return true
        return false;
    }
}