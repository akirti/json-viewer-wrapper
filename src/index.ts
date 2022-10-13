//import JsonView from "JsonViewer";
const JsonViewer = require('JsonViewer')
console.log(JsonViewer);
const self1 = this;
const testJson = `{
    "example1": [
        {
            "name": "test01",
            "age": 18,
            "gender": 0,
            "student": true,
            "children": null
        },
        {
            "name": "test02",
            "age": 19,
            "gender": 1,
            "student": true,
            "children": null
        }
    ],
    "example2": {
        "friuts": ["apple", "grape", "jujube", "pear"],
        "transport": ["taxi", "bus", "metro", "plane", "train"]
    }
  }`
  

  const btnClicked = (event:any)=>{
    event.preventDefault();
    event.stopPropagation();
    const textAr  = document.getElementById("jsonInpId") as HTMLInputElement;
    console.log(textAr);
    if(textAr == null) return;
    const jsond = textAr.value;
    const containerDom = document.getElementById("jsonid");
    console.log(containerDom);
    console.log(jsond);
    const av = new JsonViewer({
        container: containerDom, 
        data: jsond, 
        theme: 'dark', 
        expand: false
    });
    console.log(av);
  }
  var counter =0;

  function bindForm() {
       const btn = document.getElementById("submitid") as HTMLInputElement;
       console.log(btn);
       if(btn == null) return;
       btn.addEventListener('click', (event)=>{
        counter++;
        console.log(counter);
        console.log(btnClicked);
        btnClicked(event);
       });
       console.log('button binding done', btn);
  }  


  
  function bindFileInput(){
    const fileInp = document.getElementById("fileinputId") as HTMLElement;
       console.log(fileInp);
       if(fileInp == null) return;
       fileInp.addEventListener('change', (event: any)=>{
        counter++;
        console.log(counter);
        //console.log(btnClicked);
        const fileList = event.target?.files;
        console.log(fileList[0]);
        //readFile(fileList);
        const reader = new FileReader();
        reader.addEventListener('load',function(){
            //console.log(reader.result);
            if(reader.result){
                let ab: string = reader.result as string;
                var result = JSON.parse(ab);
                console.log(result);
                const containerDom = document.getElementById("jsonid");
                const wrapperDom = document.createElement("div");
                wrapperDom.setAttribute("id","wrapper_"+counter);
                const deleteButton = document.createElement("button");
                deleteButton.appendChild(document.createTextNode("X REMOVE X"));
                deleteButton.addEventListener('click', function (event:any) {
                    console.log(event.target.parentNode);
                    event.target.parentNode.remove();

                })
                wrapperDom.appendChild(deleteButton);
                const av = new JsonViewer({
                    container: wrapperDom, 
                    data: ab, 
                    theme: 'dark', 
                    expand: false
                });
                containerDom?.appendChild(wrapperDom);
                console.log(av);
            }
           
        });
        reader.readAsText(fileList[0]);
       });
       console.log('File Input binding done', fileInp);
  }
  bindForm();
  bindFileInput();
  
