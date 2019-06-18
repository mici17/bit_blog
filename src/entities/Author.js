class Author {
    constructor (authorObject) {
        this.name = authorObject.name;
        this.id = authorObject.id;
        this.username = authorObject.username;
        this.email = authorObject.email;
        this.street = authorObject.address.street;
        this.zipcode = authorObject.address.zipcode;
        this.city = authorObject.address.city;
        this.phone = authorObject.phone;
        this.website = authorObject.website;
        this.companyName = authorObject.company.name;
        this.slogan = authorObject.company.catchPhrase;

    }
}

export { Author}