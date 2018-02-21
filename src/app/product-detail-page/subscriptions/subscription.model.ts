export class Subscription {
    public name: string;
    public data: string;
    public minutes: string;
    public fullPrice: string;
    public discountPrice: string;

    constructor(name: string, data: string, minutes: string, fullPrice: string, discountPrice: string) {
        this.name = name;
        this.data = data;
        this.minutes = minutes;
        this.fullPrice = fullPrice;
        this.discountPrice = discountPrice;
    }
}
