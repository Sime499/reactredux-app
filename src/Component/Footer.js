import react from 'react'
import React, {useState, useEffect} from 'react';



export default function Footer() {

    const [date , setDate] = useState();

    const getYear = () =>  setDate(new Date().getFullYear())


    useEffect(() => {
        getYear();
    }, [])
  return (
    <div className="Footer">
    <p>Traveling Is the Ultimate drug.The More You Travels,the more addictive it becomes</p>

     &copy; Sime - {date}
    </div>
  );
}
