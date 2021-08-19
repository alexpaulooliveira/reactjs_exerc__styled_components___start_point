import React from 'react'
type TProps = { active:boolean, content:Object };

const Debug = (props:TProps) => {
  const { active, content } = props  

  if (!active)
    return null  
  
  let fragments: JSX.Element [] = []
  let key: keyof typeof content
  for ( key in content )
    fragments.push( 
                    <tr> 
                      <td style={{fontWeight:'bold', textAlign:'right', color:'blue'}}> 
                        {key} 
                      </td> 
                      <td style={{textAlign:'center'}}>
                        :
                      </td>                       
                      <td style={{textAlign:'left'}}> 
                        {content[key]} 
                      </td> 
                    </tr> 
                  )

  return <div style={{paddingTop:25, width:'100%'}}>
           <table style={{      
                          margin: '0 auto', // To Center Tabel on DIV
                          fontSize:'12px',                           
                          color:'black', 
                          padding:10,
                          paddingLeft:20, 
                          paddingRight:20, 
                          border:'2px dashed RED', 
                          borderRadius:'20px', 
                          borderCollapse:'separate'}}> 
            <thead>
              <tr>
                <th style={{fontSize:'20px', color:'red'}} colSpan={Object.keys(content).length}>D E B U G</th>
              </tr>
            </thead>                         
            <tbody>
              {fragments} 
            </tbody>
          </table>
         </div>
}


{/*
                    USO:

 Parametrizando apenas um objeto literal:
 <Debug active={true} content={state}/> 

 Combinando propriedades de um objeto literal com uma variável do tipo string:
 <Debug active={true} content={{...state, error}}/> 

 Combinando propriedades de dois objetos literais:
 <Debug active={true} content={{...state, ...error}}/>  
*/}

export default Debug;