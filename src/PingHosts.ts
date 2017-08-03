import * as ping from 'ping';

class PingHosts{
    private _hosts : JSON;
    /**
     * Construtor.
     * @param host JSON com os hosts a serem pingados
     */
    constructor(host: JSON) {
        this._hosts = host;
    }

    /**
     * pingAllHosts
     */
    public pingAllHosts() {
        for(var host in this._hosts){
            ping.promise.probe(this._hosts[host].url)
                .then((res) => {
                    console.log(res);
                });
        } 
    }
}

export default PingHosts;