const  chartSingleDb=(id,quantity)=>{
    //  check if the key exiest in local-stroge
     if(localStorage.getItem(id)){
        let quantity=JSON.parse(localStorage.getItem(id))+1;
        localStorage.setItem(id,quantity)
    }
    else{
        localStorage.setItem(id,1)
    }
}

const  chartMultiDb=(id,value)=>{
    
    

    if(localStorage.getItem(id)){
       const oldData=JSON.parse(localStorage.getItem(id));
       let chart=oldData;
       if(chart[value]){
        chart[value]=chart[value]+1;
        
       }
       else{
        chart[value]=1;
       }
       const newData=JSON.stringify(chart);
        localStorage.setItem(id,newData)
       
    }
    else{
        let chart={};
        chart[value]=1;
        const data=JSON.stringify(chart);
        localStorage.setItem(id,data)
    }
}
const  addToSingleDb=(id)=>{
   
}

const  addToMultiDb=(id,value)=>{

}
