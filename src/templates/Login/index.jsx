import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Form, Wrapper, Input , Button} from './styles'
import { data } from '../../data/data'
import {provisionalData} from '../../data/provisionalData'
import api from '../../services/api'

export const Login = ()=>{
    // const [courses, setData] = useState(data)
    const [isLoading, setIsLoading] = useState(true)
    const [cursos, setCursos] = useState([])

    useEffect(()=>{

      PostData(provisionalData)
      setIsLoading(false)
      console.log(ArrayCursos)

    },[])
    let ArrayCursos = [];

    const PostData = async (provisionalData) => {

      await Promise.all(provisionalData.courses.map((curso)=>{
        api.post('/courses', curso).then(resp =>{
          ArrayCursos.push(resp)
        })
         return ArrayCursos
      }))


    }


    if(isLoading) {
      return (
        <div style={{width: '100%', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'black', color: 'white'}}>
          Loading...
        </div>
      )
    }



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
