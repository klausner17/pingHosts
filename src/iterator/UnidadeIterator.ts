import Unidade from "../models/Unidade";

class UnidadeIterator implements IIterator{

    private _listUnidades: Array<IHost>;
    private _index : number;

    constructor(listHosts: Array<Unidade> ){
        this._listUnidades = new Array<Unidade>();
        for (var i = 0; i < listHosts.length; i++) {
            let unidade = new Unidade(
                listHosts[i].sq
                ,listHosts[i].tag
                ,listHosts[i].nome
                ,listHosts[i].url);
            this._listUnidades.push(unidade);
        }
        this._index = 0;
    }

    next(): IHost {
        let unidade = this._listUnidades[this._index];
        this._index++;
        return unidade;
    }

    hasNext(): Boolean {
        return (this._index < this._listUnidades.length);
    }
}

export default UnidadeIterator;