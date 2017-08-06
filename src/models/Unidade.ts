
class Unidade implements IHost{

    public description: string;

    constructor(public sq: number, public tag: string, public nome: string, public url: string){
        this.description = tag;
    }
}

export default Unidade;