"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
            console.log(host);
        }
    }
}
exports.default = PingHosts;
