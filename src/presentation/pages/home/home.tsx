import React, { useState } from "react";
import Navbar from "../../../design/components/atoms/navbar/navbar";
import "./home.scss";
import { SprintModel } from "../../../domain/entities/sprint.model";
import { IssueModel } from "../../../domain/entities/issue.model";
import FormHomeView from "./views/form-home";
import SelectSprintHome from "./views/select-sprint-home";
import TableHome from "./views/table-home";

export enum Step {
    form,
    selectSprint,
    table
}

export default function Home() {

    let [step, setStep] = useState(Step.form);
    let [sprints, setSprints] = useState<SprintModel[]>([]);
    let [issues, setIssues] = useState<IssueModel[]>([]);

    const handleContinue = (sprintsDto: SprintModel[]) => {
        setSprints(sprintsDto);
        setStep(Step.selectSprint);
    }

    const handleSelectSprint = (sprint: SprintModel) => {
        setIssues(sprint.getIssues());
        setStep(Step.table);

    }
  return (
      <div className="home">
        <div className="home__navbar">
          <Navbar></Navbar>
        </div>
        <div className="home__content">
          {
              (step === Step.form && 
                <FormHomeView onChange={handleContinue}/>
              ) ||
              ( step === Step.selectSprint &&
                <SelectSprintHome sprints={sprints} onSelect={handleSelectSprint}/>
              ) ||
              ( step === Step.table &&
                <TableHome issues={issues} sprints={sprints}/>
              ) 
          }
        </div>
      </div>
  );
}
