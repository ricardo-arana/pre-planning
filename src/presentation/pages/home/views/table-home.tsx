import React, { useState } from 'react';
import { Text, Link, Table, Tbody, Td, Th, Thead, Tr, Select } from "@chakra-ui/react"
import { IssueModel } from '../../../../domain/entities/issue.model';
import { SprintModel } from '../../../../domain/entities/sprint.model';

export default function TableHome({issues, sprints}: Props) {

    const [ selectedIssues, setIssues] = useState(issues);
    const handlerChange = (e:any) => {
        const id = +e.target.value;
        const sprint = sprints.find(sprint => sprint.id === id)?.getIssues() || [];
        setIssues(sprint);
    }
    return (
        <div className="table">
                    <div style={{ width: 200}}>
                        <Select placeholder="cambiar de sprint" onChangeCapture={handlerChange}>
                            { sprints.map( sprint => <option key={sprint.id} value={sprint.id}>{sprint.name}</option>) }
                        </Select>
                    </div>
                    <Text mb="15px">Historias del sprint</Text>
                    <Text mb="8px">Total de HU: { selectedIssues.length }</Text>
                    <Table variant="simple" id="table">
                        <Thead>
                            <Tr>
                            <Th>Tipo</Th>
                            <Th>Historia</Th>
                            <Th>Descripción</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            { selectedIssues.map(issue => (
                                <Tr key={ issue.id}>
                                    <Td><Link href={issue.url}><img src={issue.icon}  alt={issue.type}/></Link></Td>
                                    <Td><Link href={issue.url}>{issue.key}</Link></Td>
                                    <Td>{issue.summary}</Td>
                                </Tr>
                            ))}
                        </Tbody>
                        </Table>
                </div>
    );
}


interface Props {
    issues: IssueModel[];
    sprints: SprintModel[];
}