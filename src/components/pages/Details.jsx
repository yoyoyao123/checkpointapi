import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { getSingleProduct } from '../../redux/actions';
import { useNavigate } from 'react-router-dom';


function Details() {



let id = useParams().id;
let dispatch= useDispatch();
const [loading, setLoading] = useState(true)

useEffect(() => {
    console.log('try')
    fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res=>res.json())
            .then(json=>{
                dispatch(getSingleProduct(json));
                setLoading(false)
            })
}, [dispatch, id])

let article = useSelector(state => state.article);

const navigate = useNavigate();
const returnBack = () => {

    navigate('/')
}




    return (
        <div>
            {loading === false ? 
             <div>
                 <img src={article.image} alt="" /> 
    
                 <button onClick={returnBack}>Retour</button>
             </div>
             :  <div className="spinner-box"><div className='spinner-border spinner' role='status'><span className='visually-hidden'>Loading...</span></div></div> }
        </div>
      )


}

export default Details 
