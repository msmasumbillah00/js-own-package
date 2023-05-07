//------------------------ function for single chart product  only------------- 
const  chartSingleDb=(id,quantity)=>{
    //  check if the key exiest in local-stroge

    // if exiest the value will update only
     if(localStorage.getItem(id)){
        let quantity=JSON.parse(localStorage.getItem(id))+1;
        localStorage.setItem(id,quantity)
    }

    // if not exiest the key and value will be added;
    else{
        localStorage.setItem(id,1)
    }
}

//------------------------- function for multi  chart products-------------------
const  chartMultiDb=(key,id)=>{

    if(localStorage.getItem(key)){ //------chect first if already exiest the key in local stroge
       const oldData=JSON.parse(localStorage.getItem(key)); 
       let chart=oldData;
       if(chart[id]){
        chart[id]=chart[id]+1;
        
       }
       else{
        chart[id]=1;
       }
       const newData=JSON.stringify(chart);
        localStorage.setItem(key,newData)
       
    }
    else{
        let chart={};
        chart[id]=1;
        const data=JSON.stringify(chart);
        localStorage.setItem(key,data)
    }
}



const  addToSingleDb=(id)=>{
   
}

const  addToMultiDb=(id,value)=>{

}

const getChartData = (key) => {
    let shoppingCart = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem(key);
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    }
    return shoppingCart;
}

export {
    chartSingleDb,
    chartMultiDb,
    getChartData

}