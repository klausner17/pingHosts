import Host from './models/Host';
import HostIterator from './iterator/HostIterator';
import * as ping from 'ping';
const HOSTS = require('./data/hosts.json');

class DoPings{

    private _iterator : HostIterator;

    constructor(){
        this.init();
    }

    public ping(){
        console.log('Pingando em todas os hosts.');
        console.log('===========================');
        while(this._iterator.hasNext()){
            let host = this._iterator.next() as Host;
            ping.promise.probe(host.url)
            .then((res) => {
                console.log(host.tag + ' is ' + (res.alive ? 'alive' : 'dead'));
            });
        }
    }

    init(){
        this._iterator = new HostIterator(HOSTS['hosts']);
    }
}

export default DoPings;