import React from 'react'
import { Form, Wrapper, Input , Button} from './styles'


export const Login = ()=>{



    return (
      <Wrapper>
        <Form>
          <Input placeholder='nome'/>
          <Input placeholder='e-mail'/>
          <Button> ACESSAR TRILHAS </Button>
        </Form>

      </Wrapper>

    )

}
