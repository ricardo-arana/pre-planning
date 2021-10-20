
export class IssueModel {

    constructor(
        public id: number,
        public key: string,
        public summary: string,
    ) {}


    get url(): string {
        return `https://alicorpdigital.atlassian.net/browse/${this.key}`;
    }
}