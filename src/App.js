import logo from './logo.svg';
import './App.css';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

function App() {
  const [colors, setColors] = useState([]);
  const [showPicker, setShowPicker] = useState(false);
  const [colorpicked, setColorpicked] = useState(0);
  const [caption, setcaption] = useState('Write caption');
  const [clr, setClr] = useState('black');
  const [cta, setcta] = useState('Action');

  const closePicker = () => {
    setShowPicker(false);
  };

  const selectColor = (color) => {
    if (colors.length === 5) {
      colors.shift();
    }
    setColors([...colors, color]);
    closePicker(); // Close the picker after selecting a color
  };
  const openColorInput = () => {
      document.getElementById('ColorInput').click();
  }
  const openFileInput = () => {
      document.getElementById('fileInput').click();
  };
  return (
    <div className="App">
      <div style={{display:'flex', flexDirection:'row', justifyContent:'center', marginTop:'50px'}}>
        <div style={{ backgroundImage:'url(/lines.jpg)',zIndex:'2', backgroundSize: 'cover', height:'540px', width:'550px', borderRadius:'5px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <div style={{backgroundColor:'white', width:'300px', height:'300px', borderRadius:'5px', boxShadow: '0 5px 5px rgba(0, 0, 0, 0.3)', position:'relative', overflow: 'hidden'}}>
            <div style={{backgroundImage:'url(/style.jpg)', backgroundSize: 'cover', position:'absolute', width:'120px', height:'120px', top:'60px', left:'-50px', borderRadius:'50%'}}>

            </div>
            <div style={{position:'absolute', border: '2px solid black', width:'180px', height:'220px', top:'10px', right:'10px', borderRadius:'25px'}}>

            </div>
            <div style={{position:'absolute', zIndex:'1', width:'235px', height:'200px', background:'skyblue', top:'15px', left:'30px', borderRadius:'25px', backgroundSize:'cover', overflow:'hidden'}}>
              <img src="/cake.jpg" alt="" width='235px' height='200px'/>
            </div>
            <div>
              <button style={{position:'absolute', minHeight:'30px', minWidth:'80px', margin:'10px', top:'220px', left:'150px', borderRadius:'10px', zIndex:'1', cursor:'pointer'}}><p style={{fontWeight:'bold', fontSize:'12px', fontFamily:'cursive', color:`${clr}`}}>{cta}</p></button>
            </div>
            <div style={{
              
              position:'absolute',
              top:'-70px',
              left:'100px',
              backgroundColor:`${clr}`,
              width: '200px',
              height: '450px',
              transform: 'skewX(28deg) scaleY(' + Math.cos(45 * Math.PI / 180) + ')'
            }}>
              {/* Content goes here */}
            </div>
          </div>
        </div>
        <div style={{backgroundColor:'white', height:'540px', width:'550px', borderRadius:'5px', boxShadow: '0 2px 2px rgba(0, 0, 0, 0.8)',alignItems: 'center', justifyContent:'center', position:'relative'}}>
          <div style={{position:'absolute', top:'10px', right:'10px'}}><CancelOutlinedIcon/></div>
          <div style={{marginTop:'50px'}}>
            <h3 style={{margin:'5px', fontWeight:'bolder'}}>Add customization</h3>
            <p style={{margin:'5px', fontWeight:'bolder', color:'#949392', fontSize:'12px'}}>Customize your add and get the templates accordingly</p>
            
            <center>
              <div style={{margin:'5px', borderRadius:'15px', width:'450px', height:'50px', boxShadow: '0 2px 2px rgba(0, 0, 0, 0.3)', display:'flex'}}>
                <img src="/image.png" alt="photo" height='40px' width='40px' style={{margin:'3px'}}/>
                <p style={{fontWeight:'bolder', color:'#bfbaba', fontSize:'15px'}}>Change the image of the add </p>
                <div>
                    <label htmlFor="fileInput" id="fileInputLabel" onClick={openFileInput} >
                        <p style={{margin:'15px', textDecoration: 'underline', cursor: 'pointer', fontWeight:'bolder', color:'blue'}}>Select File</p>
                        
                    </label>
                    <input type="file" id="fileInput" style={{ display: 'none' }} />
                </div>
              </div>
            </center>
            <p style={{justifyContent:'center', margin:'30px', fontWeight:'bold', color:'#bfbaba', display:'flex'}}>_______________________<p style={{margin:'5px'}}>Edit content</p>________________________</p>
            <TextField
              style={{margin:'5px', width:'450px', boxShadow: '0 2px 2px rgba(0, 0, 0, 0.3)'}}
              id="filled-number"
              label="Add Content"
              type="text"
              InputLabelProps={{
                shrink: true,
              }}
              variant="filled"
              
            />
            <TextField
              style={{margin:'5px', width:'450px', boxShadow: '0 2px 2px rgba(0, 0, 0, 0.3)'}}
              id="filled-number"
              label="CTA"
              type="text"
              InputLabelProps={{
                shrink: true,
              }}
              variant="filled"
              value={cta}
              onChange={(e)=>{setcta(e.target.value)}}
            />

            <p style={{display:'flex', marginLeft:'50px', fontWeight:'bold', color:'gray'}}>Choose your color</p>
            <div style={{display:'flex', marginLeft:'50px'}}>
                  
              {colors.map((color, index) => (
                
                  <div key={index} style={{backgroundColor:`${color}`, height:'30px', width:'30px', borderRadius:'50%', margin:'1px', border: colorpicked === index ? '2px solid #09beeb' : 'none',cursor:'pointer'}} onClick={()=>{setColorpicked(index); setClr(color)}}></div>
                
              ))}
                  
              <label htmlFor="ColorInput" id="ColorInputLabel" onClick={openColorInput} >
                <img src="/add.png" alt="add image" style={{cursor:'pointer'}}/>
                </label>
                <input type="color" id="ColorInput" style={{ display: 'none' }} onChange={(e) => selectColor(e.target.value)}/>
              </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
