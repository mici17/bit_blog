class Author {
    constructor(authorObject) {
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
        this.latitude = authorObject.address.geo.lat;
        this.longitude = authorObject.address.geo.lng;

    }
}

export { Author }