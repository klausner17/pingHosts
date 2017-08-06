class Host implements IHost{

    public description: string;
    
    constructor(public tag: string, public url: string){
          this.description = tag;
    }
}

export default Host;