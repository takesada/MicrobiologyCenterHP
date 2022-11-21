
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import moment from 'moment';


export const  useLatestNews = () =>{
    const URL = `https://resource-center-information.herokuapp.com/getInformations`;
    const [informations,setInformations] = useState([])

    useEffect(()=>{
    axios
        .post(URL)
        .then((res) => {
            let informationsArray = []
            for (let i=0;i<res.data.length;i++){
            var infoObject = {"id":res.data[i].id,"info":res.data[i].info,"date":moment(res.data[i].updatedat).format("YYYY-MM-DD"),"title":res.data[i].title}
            informationsArray[informationsArray.length] = infoObject
            }
            setInformations(informationsArray)
        })
        .catch((err) => console.log(err));
},[])


    return{informations}
    
}