import React, { useState } from 'react';
import { Textarea, Text } from "@chakra-ui/react"
import { Button } from "@chakra-ui/react"
import { SprintModel } from '../../../../domain/entities/sprint.model';
import { TransforJira } from '../../../../infrastructure/dto/json.dto';


export default function FormHomeView({onChange}: any) {

    let [value, setValue] = useState('');
    const handleValue = (e: any) => {
        let inputValue = e.target.value
        setValue(inputValue)
    }

    const handleContinue = () => {
        const data = JSON.parse(value);
        const sprintsDto: SprintModel[] = TransforJira.transfor(data);
        onChange(sprintsDto)
    }

    return (
        <div className="form">
             <Text mb="15px">Ingrese el json de jira:</Text>
              <Textarea placeholder="Ingresa aqui tu json" rows={10}
              value={value}
              onChange={handleValue}
              />
              <Button colorScheme="blue" size="lg" style={ {marginTop: 20}} onClick={handleContinue} >
                Continuar
            </Button>
          </div>
    );
}