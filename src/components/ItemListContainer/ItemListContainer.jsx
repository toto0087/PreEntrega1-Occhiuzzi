import "./greeting.css"
import { useEffect, useState } from 'react'
import ItemList from "../items/ItemList"
import { useParams } from "react-router-dom"
// import CircleLoader from "react-spinners/CircleLoader";

import {getDocs,collection,query,where} from "firebase/firestore"
import {db} from "../../firebaseConfig"

const ItemListContainer = () => {

  const {categoryName} = useParams()

  const [items,setItems] = useState([])

  // const [isLoading,setIsLoading] = useState(false)

  useEffect( ()=> {  

    const itemCollection = collection( db, "products" )

  if(categoryName) {

    const q = query(itemCollection, where("category","==",categoryName))

    getDocs(q)
    .then( (res) => {
      const products = res.docs.map( product => {
        return {
          id: product.id,
          ...product.data()
        }
      })
      setItems(products)
    })
    .catch( (err) => console.log(err) )

  } else {

    getDocs(itemCollection)
    .then( (res) => {
      const products = res.docs.map( product => {
        return {
          id: product.id,
          ...product.data()
        }
      })
      setItems(products)
    })
    .catch( (err) => console.log(err) )
  }

}, [categoryName])


  return ( 
    <>
      {
     
        <div className="container-cards">
          <ItemList items={items}/>
        </div>
      }

    </>
  )
}

export default ItemListContainer
