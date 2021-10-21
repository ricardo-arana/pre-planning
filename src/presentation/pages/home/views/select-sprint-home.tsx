import React from 'react';
import { Text, Link } from "@chakra-ui/react"
import { List, ListItem, ListIcon } from "@chakra-ui/react"
import { MdCheckCircle} from "react-icons/md";
import { SprintModel } from '../../../../domain/entities/sprint.model';


export default function SelectSprintHome({ sprints ,onSelect}: Props) {

    return (
        <div className="form">
                    <Text mb="15px">Selecione el sprint</Text>
                    <List spacing={3}>
                    { sprints.map((sprint: SprintModel) => (
                        <ListItem key={sprint.id}>
                        <ListIcon as={MdCheckCircle} color="green.500" />
                          <Link onClick={ () => onSelect(sprint)}>{ sprint.name }</Link>
                        </ListItem>
                    ))}
                    </List>
                </div>
    );
}

interface Props {
    sprints: SprintModel[];
    onSelect: Function;
}