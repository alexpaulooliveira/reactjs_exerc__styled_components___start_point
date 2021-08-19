import React, { useState } from 'react'
import Debug from './Debug'
import { GlobalStyle, STitle, SForm, SInputRadio, SInput, STextArea, SButton, SFieldSet, SError } from './StyledComponents'

function App() {

  interface IState {
    [key: string]: string;
  }

  const [state, setState] = useState<IState>({ name: '', email: '', message: '', gender: ''})
  const [error, setError] = useState('')

  const errors : IState = { 
    name: 'Nome ausente!', 
    email: 'E-Mail ausente!', 
    message: 'Mensagem ausente!', 
    gender: 'Sexo não selecionado!', 
  }

  function setPartOfState( e:React.FormEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement> ){

  }

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {

  }  

  return <>  
           <GlobalStyle/>

           <SForm onSubmit={ e => handleSubmit(e) }>
             <STitle>Formulário de Contato</STitle>
             <SError><p> {error} </p></SError>

             <label htmlFor="name">Nome</label>
             <SInput type="text" name="name" value={state.name}  onChange={ e => setPartOfState(e) } />

             <label htmlFor="email">E-Mail</label>
             <SInput type="email" name="email" value={state.email} onChange={ e => setPartOfState(e) } />

             <SFieldSet>
               <legend>Sexo</legend>

               <label>
                 <SInputRadio type="radio" value="female" name="gender" checked={state.gender === 'female'} onChange={ e => setPartOfState(e) } />
                 Feminino
               </label>

               <label>
                 <SInputRadio type="radio" value="male" name="gender" checked={state.gender === 'male'} onChange={ e => setPartOfState(e) } />
                 Masculino
               </label>                 
             </SFieldSet>

             <label htmlFor="message">Mensagem</label>
             <STextArea name="message" value={state.message} onChange={ e => setPartOfState(e) } />                          
                          
             <SButton fontColor='#9A76B3' backgroundColor='#CCF' center={true}  type="submit"> Send Message </SButton>                           
             <Debug active={false} content={{...state, error}}/> 
           </SForm>                       
         </>  
}

export default App;