import Hosts from './Host';
import HostIterator from './HostIterator';
import * as ping from 'ping';
const HOSTS = require('./data/hosts.json');

class DoPings{

    private _iterator : HostIterator;

    constructor(){
        this.init();
    }

    public ping(){
        while(this._iterator.hasNext){
            ping.promise.probe(this._iterator.next().url)
            .then((res) => {
                console.log(res);
            });
        }
    }

    init(){
        this._iterator = HOSTS['hosts'];
    }
}

export default DoPings;