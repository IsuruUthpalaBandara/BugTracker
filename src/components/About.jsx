import React from 'react'
import {Col,Row} from 'antd'

const About=()=>{

    return(
        <>
        <body style={{backgroundColor:'white'}}>

        <h1>Hello there,</h1>

<Row>
    <Col span={8}>
    <h4 style={{margin:20}}>
    My name is Isuru Uthpala Bandara and I'm a full stack developer.
    I designed this bug tracker using React.Js and Ant Design UI library.
    The server was written using Node.Js and Express.Js. Hope you find this interesting.
    And I'm happy to know your comments and new ideas to develop this more.
    If you are interested in working with me, you may find details here:
    </h4>
    <h5><a href="https://isuru999-git-master-isuruuthpalabandara.vercel.app/">Portfolio</a></h5>
    </Col>
    <Col span={16}>
    </Col>
</Row>




        </body>
        
        

        </>
    )

}

export default About;
