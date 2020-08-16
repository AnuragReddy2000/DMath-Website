class PersonInfo{
    name: string;
    designation: string;
    areas: string;
    email: string;
    roomNo: string;
    image: string;
    link: string;

    constructor(name: string, designation: string, image: string,areas: string, email: string, roomNo: string, link: string){
        this.name = name;
        this.designation = designation;
        this.areas = areas;
        this.email = email;
        this.roomNo = roomNo;
        this.link = link;
        this.image = image;
    }
}

export default PersonInfo;