import React, { Component } from 'react';



class App extends Component {

     arr= [
        {
            name:'zohaib',
            age:20,
            email:'a@gmail.com',
        }
      ,  
        {
         name:'asif',
         age:21,
         email:'a@gmail.com',
     }
     ,
     {
         name:'zoo',
         age:22,
         email:'a@gmail.com',
     }



 ];
    render() {

    var response = this.arr.map((obj) =>{
        return (
             <ul key={obj.age}>
           <li>{Obj.name}</li>
            
           <li>{Obj.age}</li>
            
           <li>{Obj.email}</li>
            

            <hr />
             </ul>
            
            );

        
    });

        return (
            <div className="app">
            <div>Hello</div>
            <div>
                <ul>
                    <li>
                    {response}
                    </li>
                </ul>
           
            </div>
            </div>
        );
    }
}


export default App;