//your JS code here. If required.
// })
document.querySelector("#userform").addEventListener("submit",(e)=>{
  e.preventDefault();
  let age=document.querySelector("#age").value;
  let name=document.querySelector("#name").value;
  if(!age || !name){
    alert("All filds are Required!!");
    return;
  }
  age=parseInt(age);
  let p=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(age>=18){
          resolve(`Welcome, ${name}. You can vote`);
        }
        else{
          reject(`Oh sorry ${name}. You aren't old enough.`)
        }
    },4000);
  });
  p.then((message)=>{
    alert(message);
  });
  p.catch((message)=>{
    alert(message);
  })
});