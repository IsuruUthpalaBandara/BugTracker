import {  Button,
           Table , 
           Input,
           Form ,
           Drawer, 
           DatePicker,  
           Radio, 
           Typography,
           Progress,
           Layout,
           Space,
           List,
           Card
              } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import Axios from 'axios'
import React,{ useEffect, useState} from 'react'
const { Header, Footer, Sider, Content } = Layout;
const headerStyle = {
  textAlign: 'center',
  color: '#fff',
  height: 50,
  paddingInline: 0,
  lineHeight: '6px',
  backgroundColor: 'black',
};
const contentStyle = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#CBE095',
};
const siderStyle = {
  textAlign: 'center',
  lineHeight: '100px',
  color: '#fff',
  backgroundColor: '#001C0E',
  minHeight:550,
  
};
const footerStyle = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#96888C',
};
const projectBtnStyle={
  color:'white',
  textAlign:'center',
  marginTop:40

 
}



const {Text}=Typography



const Project = () => {



  const [currentProject,setCurrentProject]=useState({})
  const [openAddBug,setOpenAddBug]=useState(false)
  const [openEditBug,setOpenEditBug]=useState(false)


  const [bugNo,setBugNo]=useState(0)
  const [bugForm,setBugForm]=useState([])

  const [editBugNo,setEditBugNo]=useState('')

  const [currentProgress,setCurrentProgress]=useState(0)

  

  const [form]=Form.useForm()


  const addBug=()=>{setOpenAddBug(true)}
  const onClose=()=>{setOpenAddBug(false)}

  const openEdit=(values)=>{
    
    
    setOpenEditBug(true)

    setEditBugNo(values.bugNo)

    form.setFieldsValue({
      bugNo:values.bugNo,
      bugName:values.bugName,
      Status:values.Status,
      Description:values.Description,
      Responsibility:values.Responsibility,
      startTime:values.startTime,
      finishTime:values.finishTime,
      fixingMethod:values.fixingMethod
      
    })

    setEditBugNo(values.bugNo)
  
  
  }


  const onCloseEditBug=()=>{setOpenEditBug(false)}



  const saveBug=(values)=>{


    values.bugNo=bugNo+1
    bugForm.push(values)
    currentProject.bugReport=bugForm
    setBugNo(bugNo+1)
    setCurrentProject(currentProject)
    localStorage.setItem("project",JSON.stringify(currentProject))
    console.log("currentProject=>",currentProject)
   

    var bugTotal=currentProject.bugReport.length
    
   
    var i
    var fixedBugTotal=0

    for(i=0;i<bugTotal;i++){
      if(currentProject.bugReport[i].Status==="Fixed"){
        fixedBugTotal++
        
      }

    }

    
    setCurrentProgress(fixedBugTotal/bugTotal*100)
    
   }

   const editBug=(values)=>{

    
    bugForm[values.bugNo-1]=values
    currentProject.bugReport=bugForm
    setCurrentProject(currentProject)
    localStorage.setItem("project",JSON.stringify(currentProject))


    var bugTotal=currentProject.bugReport.length
    
   
    var i
    var fixedBugTotal=0

    for(i=0;i<bugTotal;i++){
      if(currentProject.bugReport[i].Status==="Fixed"){
        fixedBugTotal++
        
      }

    }

    
    setCurrentProgress(fixedBugTotal/bugTotal*100)
    
    
  
    

   }


 const showCurrentProject=()=>{

    
    console.log("savedAll as=>",localStorage.getItem("project"))

    Axios.post("http://localhost:3001/api/updateproject",{
      updateProject:currentProject
    })
    .then((res)=>(
      console.log(res)
    ))
    .catch((err)=>{
      console.log(err)
    })
    

 }


 useEffect(()=>{
  setCurrentProject(JSON.parse(localStorage.getItem('project')))
 })


   const columns = [
    {
      title: 'bugNo',
      dataIndex: 'bugNo',
      key: 'bugNo',
      render:(text,record,index)=>{
        return(
          <Button onClick={(e)=>openEdit(record)}>{text}</Button>
        )
        
      }
  

       
      
    },
    
    {
      title: 'bugName',
      dataIndex: 'bugName',
      key: 'bugName',
    },
    {
      title: 'Description',
      dataIndex: 'Description',
      key: 'Description',
    },
  
    {
      title: 'Status',
      key: 'Status',
      dataIndex: 'Status',
     
    },
    {
      title: 'Start Time',
      key: 'startTime',
      dataIndex:'startTime',
    },
    {
      title: 'Finish Time',
      key: 'finishTime',
      dataIndex:'finishTime',
    },
    
    {
      title: 'Fixing Method',
      dataIndex: 'fixingMethod',
      key: 'fixingMethod',
    },
    {
      title: 'Responsibility',
      dataIndex: 'Responsibility',
      key: 'Responsibility',
    },
  ];
 






 return(
  <>

<Space
    direction="vertical"
    style={{
      width: '100%',
    }}
    size={[0, 48]}
  >


    <Layout>
      <Sider style={siderStyle}>
        
        
        
        
        
        
<List>

  <div style={{color:'white', marginLeft:0, marginBottom:60,fontSize:20,marginTop:20}}>Bug Tracker</div>

      <div><Button style ={projectBtnStyle} ghost onClick={addBug}>Add Bug +</Button></div>

 

  <div><Button ghost htmlType="submit" style={projectBtnStyle} onClick={showCurrentProject}>Save All</Button></div>
      
    
  

 



  
    
  <Card size="large" title="Progress"  style={{ width: 180 ,backgroundColor:'#EFE8B9', marginTop:60, marginLeft:10}}>
  <Progress type="circle" percent={currentProgress} style={{marginTop:0, color:'white'}} trailColor='red' />
    </Card>
    




 


</List>


   

   
   <Form.Item>
   <Drawer title="Add New Bug" placement="left" onClose={onClose} open={openAddBug}>

     <Form onFinish={saveBug}>
      <Form.Item
       style={{width:300}}
       label="Bug Name : "
       name="bugName"
       rules={[
         {
           required: true,
           message: 'Enter bug name',
         },
             ]}
                 >
       <Input />
       

       </Form.Item>

       <Form.Item
       style={{width:300}}
       label="Description : "
       name="Description"
       rules={[
         {
           required: false,
           message: 'Bug Description Here',
         },
             ]}
                 >
       <TextArea rows={4} />
       

       </Form.Item>

       <Form.Item
       
                 label="Status: "
                 name="Status"
                
                 
                 
                 >
                   <Radio.Group >
                     <Radio value="Fixed">Fixed</Radio>
                     <Radio value="Not Fixed">Not Fixed</Radio>
                   </Radio.Group>

    
       </Form.Item>

       <Form.Item
       style={{width:300}}
       label="Start Time: "
       name="startTime"

       >
         <DatePicker picker='date' />

       </Form.Item>

                 <Form.Item
       style={{width:300}}
       label="Finish Time: "
       name="finishTime"

       >
         <DatePicker picker='date'/>

       </Form.Item>

       <Form.Item
       style={{width:300}}
       label="Fixing Method : "
       name="fixingMethod"
       
       rules={[
         {
           required: false,
           message: 'Add how to fix this',
         },
             ]}
                 >
       <TextArea rows={4} />
       

       </Form.Item>

       <Form.Item
         label="Responsibility : "
        name="Responsibility"
         >
          <Input/>

          </Form.Item>

          <Form.Item>
           <Button htmlType="submit">Save</Button>
          </Form.Item>


     </Form>

   </Drawer>

 </Form.Item>
        
        
        
        </Sider>
      <Layout>
        <Header style={headerStyle}>
          <div style={{marginTop:"10px"}}><h4>Project Name : {currentProject.projectName}</h4>
          </div></Header>
        <Content style={contentStyle}>
            
        <div  style={{marginTop:10, display:'flex'}}>
 

 



  
    

  


 <div>

    
       
     
         <Form>
         <Drawer title="Edit Bug" placement="right" onClose={onCloseEditBug} open={openEditBug}>
   
           <Form onFinish={editBug} form={form}>

             
             <Form.Item
             
             style={{width:300}}
             label="Bug No:"
             name="bugNo"
             rules={[
               {
                 required: false,
                 message: 'Enter bug No',
               },
                   ]}
                       >


            <Text>{editBugNo}</Text>
             
   
             </Form.Item>

             

            <Form.Item
             style={{width:300}}
             label="Bug Name : "
             name="bugName"
             rules={[
               {
                 required: true,
                 message: 'Enter bug name',
               },
                   ]}
                       >
             <Input />
             
   
             </Form.Item>
   
             <Form.Item
             style={{width:300}}
             label="Description : "
             name="Description"
             rules={[
               {
                 required: false,
                 message: 'Bug Description Here',
               },
                   ]}
                       >
             <TextArea rows={4} />
             
   
             </Form.Item>
   
             <Form.Item
             
                       label="Status: "
                       name="Status"
                      
                       
                       
                       >
                         <Radio.Group >
                           <Radio value="Fixed">Fixed</Radio>
                           <Radio value="Not Fixed">Not Fixed</Radio>
                         </Radio.Group>
   
          
             </Form.Item>
   
             <Form.Item
             style={{width:300}}
             label="Start Time: "
             name="startTime"
   
             >
               <DatePicker picker='date' />
   
             </Form.Item>
   
                       <Form.Item
             style={{width:300}}
             label="Finish Time: "
             name="finishTime"
   
             >
               <DatePicker picker='date'/>
   
             </Form.Item>
   
             <Form.Item
             style={{width:300}}
             label="Fixing Method : "
             name="fixingMethod"
             
             rules={[
               {
                 required: false,
                 message: 'Add how to fix this',
               },
                   ]}
                       >
             <TextArea rows={4} />
             
   
             </Form.Item>
   
             <Form.Item
               label="Responsibility : "
              name="Responsibility"
               >
                <Input/>
   
                </Form.Item>
   
                <Form.Item>
                 <Button htmlType="submit">Save</Button>
                </Form.Item>
   
   
           </Form>
   
         </Drawer>


   
   </Form>
   
      
     

  </div>


 </div>


 



 <Table 
 columns={columns} 
 dataSource={currentProject.bugReport} 
 pagination={false} 
 style={{marginTop:10}} 
 
 
/>













        </Content>

      </Layout>
    </Layout>
  </Space>










   

    </>

 )};

export default Project;