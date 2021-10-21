import React from 'react';
import { Text, Link, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react"
import { IssueModel } from '../../../../domain/entities/issue.model';


export default function TableHome({issues}: Props) {

    return (
        <div className="table">
                    <Text mb="15px">Historias del sprint</Text>
                    <Text mb="8px">Total de HU: { issues.length }</Text>
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
    );
}


interface Props {
    issues: IssueModel[];
}