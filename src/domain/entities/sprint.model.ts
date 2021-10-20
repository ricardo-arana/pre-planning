import { IssueModel } from "./issue.model";



export class SprintModel {
    
    private issues: IssueModel[] = []; //TODO: colocar la verdadera instancia de issue

    constructor(
        public id:number,
        public name: string
    ) {}


    addIssue(issue: IssueModel) {
        this.issues.push(issue);
    }

    getIssues() {
        return this.issues;
    }
}