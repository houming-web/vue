import Item from "../todu/myproject/src/components/item/item"


const obj1={
    name:1,
    age:'laozhao',
    do:{
        wan:'qiu'
    }
}

const obj2={
    name:1,
    age:'laozhao',
    do:{
        wan:'qiu'
    }
}

function qianchenduibi (obj1,obj2){
    if(obj1.lenght!==obj2.lenght)return true

    Object.keys(obj2).forEach(item=>{
       if(obj1.hasOwnProperty(item)) return true
       else 
    })
}