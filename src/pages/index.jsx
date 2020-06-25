import React, { Fragment } from "react"
import SEO from "../components/seo"
import { /* useDispatch, */ useSelector } from "react-redux";
//import { sampleFunction } from "../actions/sampleAction";

export default function Home() {

  //const dispatch = useDispatch();

  const { isDarkMode } = useSelector(reducers => reducers.data);
  console.log('isDarkMode:',isDarkMode)

  return <Fragment>
    <SEO title='Inicio' description='Presentación de mi sitio web' />
    <div className='text-3xl text-red-700'>Hello world!</div>
  </Fragment>
}
