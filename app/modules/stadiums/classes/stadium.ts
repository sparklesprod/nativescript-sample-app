export class Stadium {
    id: string;
    name: string;
    openingDate: string;
    desc: string;
    imagepath: string;

    constructor(data?: any) {
        this.id = data ? data.id : null;
        this.name = data ? data.name : null;
        this.openingDate = data ? data.openingDate : null;
        this.desc = data ? data.desc : null;
        this.imagepath = data ? data.imagepath : null;
    }

    public static create(data: {id, name, openingDate, desc, imagepath}): Stadium {
        const stadium = new Stadium();
        stadium.id = data.id;
        stadium.name = data.name;
        stadium.openingDate = data.openingDate;
        stadium.desc = data.desc;
        stadium.imagepath = data.imagepath;
        return stadium;
    }
}