
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import {useParams} from "react-router-dom"
import { getProductsDetails } from '../../redux/actions/productAction'

const DetailView = () => {

    const dispatch =useDispatch()
    const {id} =useParams()

    useEffect(()=>{
        dispatch(getProductsDetails(id))
    },[dispatch,id])
  return (
    <div>
      Hello
    </div>
  )
}

export default DetailView
