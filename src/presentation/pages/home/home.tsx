import React, { useState } from "react";
import Navbar from "../../../design/components/atoms/navbar/navbar";
import "./home.scss";
import { Textarea, Text, Link } from "@chakra-ui/react"
import { Button } from "@chakra-ui/react"
import { SprintModel } from "../../../domain/entities/sprint.model";
import { TransforJira } from "../../../infrastructure/dto/json.dto";
import { List, ListItem, ListIcon } from "@chakra-ui/react"
import { MdCheckCircle} from "react-icons/md";

import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
  } from "@chakra-ui/react"
import { IssueModel } from "../../../domain/entities/issue.model";

export enum Step {
    form,
    selectSprint,
    table
}

export default function Home() {

    let [value, setValue] = useState('');
    let [step, setStep] = useState(Step.form);
    let [sprints, setSprints] = useState<SprintModel[]>([]);
    let [issues, setIssues] = useState<IssueModel[]>([]);



    const handleValue = (e: any) => {
        let inputValue = e.target.value
        setValue(inputValue)
    }

    const handleContinue = () => {
        const data = JSON.parse(value);
        const sprintsDto: SprintModel[] = TransforJira.transfor(data);
        setSprints(sprintsDto);
        setStep(Step.selectSprint);
    }

    const handleSelectSprint = (sprint: SprintModel) => {
        setIssues(sprint.getIssues());
        setStep(Step.table);

    }
  return (
    <>
      <div className="home">
        <div className="home__navbar">
          <Navbar></Navbar>
        </div>

        <div className="home__content">
          {
              (step === Step.form &&
                <div className="form">
             <Text mb="15px">Ingrese el json de jira:</Text>
              <Textarea placeholder="Ingresa aqui tu json" rows={10}
              value={value}
              onChange={handleValue}
              />
              <Button colorScheme="blue" size="lg" style={ {marginTop: 20}} onClick={handleContinue} >
                Continuar
            </Button>
          </div>) ||
               ( step === Step.selectSprint &&
                <div className="form">
                    <Text mb="15px">Selecione el sprint</Text>
                    <List spacing={3}>
                    { sprints.map(sprint => (
                        <ListItem key={sprint.id}>
                        <ListIcon as={MdCheckCircle} color="green.500" />
                          <Link onClick={ () => handleSelectSprint(sprint)}>{ sprint.name }</Link>
                        </ListItem>
                    ))}
                    </List>
                </div>
                ) 
         
                ||
               ( step === Step.table &&
                <div className="form">
                    <Text mb="15px">Historias del sprint</Text>
                    <Table variant="simple">
                        <Thead>
                            <Tr>
                            <Th>HU</Th>
                            <Th>Nombre HU</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            { issues.map(issue => (
                                <Tr key={ issue.id}>
                                    <Td><Link href={issue.url}>{issue.key}</Link></Td>
                                    <Td>{issue.summary}</Td>
                                </Tr>
                            ))}
                        </Tbody>
                        </Table>
                </div>
                ) 
          }
        </div>
      </div>
    </>
  );
}
