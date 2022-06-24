import React, { useState } from 'react';
import './App.css';


function App() {


  const sectors = ['sektor1','sektor2','sektor3','sektor4']


  const [newAnimal,setAnimal] = useState({
    vrsta:"",
    ime:"",
    datum_rodjenja:"",
    sector:sectors[0]
  })



  const animalList = [
    {
      vrsta: 'Pas',
      ime: 'Dzeki',
      datum_rodjenja:(new Date()),
    },

    {
      vrsta: 'Macka',
      ime: 'Mara',
      datum_rodjenja:""
    },

    {
      vrsta: 'Tigar',
      ime: 'Zivko',
      datum_rodjenja:(new Date()),
    },

    {
      vrsta: 'Slon',
      ime: 'Dusan',
      datum_rodjenja:""
    },

    {
      vrsta: 'Majmun',
      ime: 'Pera',
      datum_rodjenja:(new Date()),
    }
  ];

    const[list,setList] = useState(animalList)


    const removeItem = (index) => {
      const newAnimals = list.filter((animal,i) => i !== index)
      setList(newAnimals)
    }

  const moveToTop =(index) => {
    const newAnimals =list.filter((animal,i) => i !== index)
    const newMove = list[index]

    setList([newMove,...newAnimals])
  } 


  const handleSpecesChange = (e) => {
    setAnimal({
      ...newAnimal,
      vrsta:e.target.value
    })
  }

  const handleNameChange = (e) => {
    setAnimal({
      ...newAnimal,
      ime:e.target.value
    })
  }

  const handleDateChange = (e) => {
    setAnimal({
      ...newAnimal,
      datum_rodjenja: new Date (e.target.value)
    })
  }

  const handleSectorChange = (e) => {
    setAnimal({
      ...newAnimal,
      sector:e.target.value
    })
  }

  const addAnimal = (e) => {
    e.preventDefault();

    setList([...list,newAnimal])
    setAnimal({
      vrsta:"",
      ime:"",
      datum_rodjenja:"",
      sector:sectors[0]
      
    });
  }

  const checkAnimalsWithSector = (sector) => {
    const sectorAnimals = list.filter((animal) => animal.sector === sector)

    alert(JSON.stringify(sectorAnimals))
  }



return (
    <div>

      <form onSubmit={addAnimal}>
        <input required type="text" value={newAnimal.vrsta} onChange={handleSpecesChange}></input>
        <br></br>
        <input required type="text" value={newAnimal.ime} onChange={handleNameChange}></input>
        <br></br>
        <input type="date" value={newAnimal.datum_rodjenja ? newAnimal.datum_rodjenja.toISOString().substr(0, 10) : ''}  onChange={handleDateChange}></input>
        <select name="sector" onChange={handleSectorChange} value={newAnimal.sector}>
          {sectors.map((sector,index) => <option key={index} value={sector}>{sector}</option>)}
        </select>
        <button>add animal</button>
      </form>

      <br></br>
    <table>
      <thead>
      <tr>
        <th>vrsta</th>
        <th>ime</th>
        <th>datum</th>
        <th>setkor</th>
      </tr>
      </thead>
      <tbody>

      {list.map((animal,index) => (
        
        <tr  key={index}>
  
          <td>{animal.vrsta}</td> 
          <td>{animal.ime}</td> 
           <td>{animal.datum_rodjenja
            ? animal.datum_rodjenja.toLocaleDateString() : "nepoznati"}</td>
          <td>{animal.sector ? animal.sector : "nepoznat"}</td>
          <td><button onClick={() => removeItem(index)}>remove</button></td>
          <td><button onClick={() => moveToTop(index)}>move to top</button></td>
               
        </tr>
      
      ))}
      </tbody>

      </table>

       <br></br>
       
       <h3>Sektori</h3>

       <table>

        <thead>
          <tr>
            <th>sektor</th>
          </tr>
        </thead>
        <tbody>
        {sectors.map((sector, index) =>
         (<tr key={index}>
          <td>{sector}</td>
          <td><button onClick={() => checkAnimalsWithSector(sector)}>Check animals</button></td>
        </tr>
        ))}
      </tbody>
       </table>


    </div>




)

    




}

export default App;