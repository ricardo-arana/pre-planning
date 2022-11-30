
export class IssueModel {

    constructor(
        public id: number,
        public key: string,
        public summary: string,
        public type: string,
    ) {}


    get url(): string {
        return `https://jira.lima.bcp.com.pe/browse/${this.key}`;
    }

    get icon(): string {
        return `/images/${Icons[this.type]}`;
    }
}

export const Icons: { [name: string]: string }  = {
    'Tarea': 'tarea.svg',
    'Test Execution': 'test-execution.png',
    'Historia': 'story.svg',
    'Congelamiento': 'tarea.svg',
    'Ratificación': 'tarea.svg',
    'Business Story': 'business-story.svg',
    'Error': 'error.svg',
    'Error en producción': 'error.svg',
    'Spike': 'spike.svg',
    'Riesgo': 'riesgo.svg',
    'Incidente': 'incidente.svg',
    'Request': 'request.svg',
    'Feature': 'request.svg',
    'Test': 'test.png',
    'Test Set': 'test-set.png',
    'Pre-Condition': 'pre-condition.png',
    'Test Plan': 'test-plan.png',

};