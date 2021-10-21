import { IssueModel } from "../../domain/entities/issue.model";
import { SprintModel } from "../../domain/entities/sprint.model";

export interface JiraData {
  issues: Issue[];
  rankCustomFieldId: number;
  sprints: Sprint[];
  supportsPages: boolean;
  projects: Project[];
  canManageSprints: boolean;
  complexQuery: boolean;
  canCreateIssue: boolean;
  versionData: VersionData;
  hasBulkChangePermission: boolean;
  isIssueLimitExceeded: boolean;
  issueParentAssociations: any[];
}

export interface Issue {
  id: number;
  key: string;
  hidden: boolean;
  typeName: TypeName;
  typeId: string;
  summary: string;
  typeUrl: string;
  priorityUrl: string;
  priorityName: PriorityName;
  done: boolean;
  assignee?: string;
  assigneeKey?: string;
  assigneeAccountId?: string;
  assigneeName?: string;
  avatarUrl?: string;
  hasCustomUserAvatar: boolean;
  flagged: boolean;
  estimateStatisticRequired: boolean;
  estimateStatistic: EstimateStatistic;
  statusId: string;
  statusName: Name;
  statusUrl: string;
  status: Status;
  fixVersions: any[];
  projectId: number;
  linkedPagesCount: number;
  epic?: string;
  epicField?: EpicField;
}

export interface EpicField {
  id: string;
  label: string;
  editable: boolean;
  renderer: string;
  issueId: number;
  epicKey: string;
  epicColor: string;
  text: string;
  canRemoveEpic: boolean;
}

export interface EstimateStatistic {
  statFieldId: StatFieldID;
  statFieldValue: StatFieldValue;
}

export enum StatFieldID {
  Customfield10023 = "customfield_10023",
}

export interface StatFieldValue {
  text: string;
  value?: number;
}

export enum PriorityName {
  Media = "Media",
}

export interface Status {
  id: string;
  name: Name;
  description: string;
  iconUrl: string;
  statusCategory: StatusCategory;
}

export enum Name {
  EnProgreso = "En Progreso",
  Finalizado = "Finalizado",
  NoIniciado = "No Iniciado",
  ReadyForTest = "Ready for Test",
  Test = "Test",
}

export interface StatusCategory {
  id: string;
  key: Key;
  colorName: ColorName;
}

export enum ColorName {
  BlueGray = "blue-gray",
  Green = "green",
  Yellow = "yellow",
}

export enum Key {
  Done = "done",
  Indeterminate = "indeterminate",
  New = "new",
}

export enum TypeName {
  Error = "Error",
  Historia = "Historia",
  Mejora = "Mejora",
  Tarea = "Tarea",
}

export interface Project {
  id: number;
  key: string;
  name: string;
  isSimplified: boolean;
}

export interface Sprint {
  id: number;
  sequence: number;
  name: string;
  state: string;
  linkedPagesCount: number;
  goal: string;
  startDate: string;
  endDate: string;
  isoStartDate: string;
  isoEndDate: string;
  completeDate: string;
  isoCompleteDate: string;
  canUpdateSprint: boolean;
  remoteLinks: any[];
  daysRemaining: number;
  timeRemaining?: TimeRemaining;
  issuesIds: number[];
}

export interface TimeRemaining {
  text: string;
  isFuture: boolean;
}

export interface VersionData {
  versionsPerProject: VersionsPerProject;
  canCreateVersion: boolean;
}

export interface VersionsPerProject {}

export class TransforJira {
  static transfor(dto: JiraData): SprintModel[] {
    try {
      const sprints: SprintModel[] = [];
      dto.sprints.forEach(({ id, name, issuesIds }) => {
        const data = new SprintModel(id, name);
        dto.issues
          .filter((issue) => issuesIds.includes(issue.id))
          .forEach((issue) => {
            const newIssue = new IssueModel(issue.id, issue.key, issue.summary);
            data.addIssue(newIssue);
          });

        sprints.push(data);
      });
      return sprints;
    } catch (error) {
        throw error;
    }
  }
}
