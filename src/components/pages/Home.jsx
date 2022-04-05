import React, { useEffect, useState } from 'react'
import NavBar from './../NavBar';
import Article from './../Article';
import { useDispatch, useSelector } from 'react-redux';
import fecthAllProductData from './../../redux/actions';
import MuiSkeleton from '../MuiSkeleton';

function Home() {


    let dispatch = useDispatch();
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(json=>{

                dispatch(fecthAllProductData(json))
                setLoading(false)
            })
    })

    let articles = useSelector(state => state.articles);

  return (
    <div>
      <NavBar />

      {loading === false ? (
        <div className="ms-2 mt-2">
          <div className="row">
            {articles.map((article) => (
              <div className="col-md-3  mb-2" key={article.id}>
                <Article article={article} />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <div className="ms-2 mt-2">
            <div className="row">
              <div className="col-md-3 mb-2">
                <MuiSkeleton />
              </div>

              <div className="col-md-3">
                <MuiSkeleton />
              </div>

              <div className="col-md-3">
                <MuiSkeleton />
              </div>

              <div className="col-md-3">
                <MuiSkeleton />
              </div>

              <div className="col-md-3">
                <MuiSkeleton />
              </div>

              <div className="col-md-3">
                <MuiSkeleton />
              </div>

              <div className="col-md-3">
                <MuiSkeleton />
              </div>

              <div className="col-md-3">
                <MuiSkeleton />
              </div>
            </div>
          </div>
          

         
        </div>
      )}
      {/* <div className="spinner-box"><div className='spinner-border spinner' role='status'><span className='visually-hidden'>Loading...</span></div></div>  */}
    </div>
  );
}

export default Home

