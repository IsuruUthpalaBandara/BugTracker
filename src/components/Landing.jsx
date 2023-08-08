import React from 'react'
import { Outlet } from 'react-router-dom'
import { Layout } from 'antd'

const {Footer} = Layout;

const footerStyle = {
  textAlign: 'center',
  color:"white",
  backgroundColor: 'black',
  lineHeight:'10px',
  minHeight:20
};

export default function Landing() {
  return (
    
    <>

      <Outlet/>
      
    
    
    </>
  )
}
