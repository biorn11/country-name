 import { create } from 'domain'
import fs from 'fs'

import fsp from 'fs/promises'



  const file=
  `albanian.txt,nje fjali shqipe
  italian.txt,una frase italiana
  spanish.txt,una frasa espanol
  englisht.txt,one english word`
  
  let fileArray=file.split('\n')
   async function createFiles(file){
console.log(file)
file.forEach(element => {
  //console.log(element)
const seperatedCountriesArray=element.split(',')
const  [country,word]=seperatedCountriesArray;
    await filesCreated(country,word)
});
  }
  async function filesCreated(file1,file2,){
    return fsp.createFile(file1,file2,err=>{
      if (err){
        console.log (err)
      }
    })
  }

await createFiles(fileArray)
