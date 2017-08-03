"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ping = require("ping");
class PingHosts {
    /**
     * Construtor.
     * @param host JSON com os hosts a serem pingados
     */
    constructor(host) {
        this._hosts = host;
    }
    /**
     * pingAllHosts
     */
    pingAllHosts() {
        for (var host in this._hosts) {
            ping.promise.probe(this._hosts[host].url)
                .then((res) => {
                console.log(res);
            });
        }
    }
}
exports.default = PingHosts;
