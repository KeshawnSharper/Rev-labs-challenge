import React,{useEffect,useState} from 'react';
import Plot from 'react-plotly.js';
import axios from "axios"
import { object } from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import "./graph.css"


export default function Graph (props) {
  const {menu,h1} = props
  const useStyles = makeStyles((theme) => (
    {
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      position:"absolute",
      left: menu,
  top: 104
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));
  const [data,setData] = useState({})
  const classes = useStyles();
  const [selected,setSelected] = useState([])
  const [selectedObj,setSelectedObj] = useState({})
  const [company, setCompany] = React.useState('');
 
  const handleChange = (event) => {
if (selectedObj[event.target.value] === true ){
  setSelectedObj({...selectedObj,[event.target.value]:false}) 
  setSelected(selected.filter(select => 
    select.name != event.target.value
  )
  )
  return
}
if (selected.length == 3){
  alert("You may only select 3 companies")
  return
}
else{
  setSelectedObj({...selectedObj,[event.target.value]:true}) 
    setSelected([...selected,
      {
        x:data[`${event.target.value}`][0],
        y:data[`${event.target.value}`][1],
        type:'scatter',
        name:event.target.value
      }
     ])
    }
  };
  useEffect(
    () => {
      axios.get("http://127.0.0.1:8000/data").then(
        res => {
         
setData(res.data)
setSelectedObj({
  'autoindustry':true,
  'ford':true,
  'tesla':true,
})
setSelected([
  {
    x:res.data['autoindustry'][0],
    y:res.data['autoindustry'][1],
    type:'scatter',
    name:'autoindustry'
  },
  {
    x:res.data['ford'][0],
    y:res.data['ford'][1],
    type:'scatter',
    name:'ford'
  },
  {
    x:res.data['tesla'][0],
    y:res.data['tesla'][1],
    type:'scatter',
    name:'tesla'
  }
])
console.log(res.data)
        }
      )
    }
    ,[]
  )  
  
 let loops = []
  Object.keys(data).map(
    key => (
      loops.push({
        x:data[key][[0]],
        y:data[key][[1]],
        type:'scatter',
        name:key
      })
    )
  )
    return (
<div >
<div className="graph">
<h1 style={h1 ? {left:270} : {left:30}}>Trends</h1>     
<FormControl variant="filled" className={classes.formControl}>
        <InputLabel id="demo-simple-select-filled-label">Company</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={company}
          onChange={handleChange}
        >
           {Object.keys(data).map(company =>(
              <MenuItem value={company}>
              <em>{company}</em>
            </MenuItem>
           )
           )}
         
        </Select>
      </FormControl>
      </div>
      <div className="plot" style={h1 ? {left:270} : {left:30}}>
      <Plot
      data ={selected}
        
        layout={ {width: 700, height: 400, title: 'Headcount'} }
      />
      </div>
      </div>
    );
  }

