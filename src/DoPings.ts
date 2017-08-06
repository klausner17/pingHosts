import * as ping from 'ping';

class DoPings{

    private _iterator : IIterator;

    constructor(iterator: IIterator){
        this._iterator = iterator;
    }

    public pingAll(){
        console.log('Pingando em todas os hosts.');
        console.log('===========================');
        while(this._iterator.hasNext()){
            let host = this._iterator.next();
            ping.promise.probe(host.url)
            .then((res) => {
                console.log(host.description + ' is ' + (res.alive ? 'alive' : 'dead'));
            });
        }
    }
}

export default DoPings;