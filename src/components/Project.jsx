import {  Button,
           Table , 
           Input,
           Form ,
           Drawer, 
           DatePicker,  
           Radio, 
           Tag,
           Typography,
           Space,
           Progress
              } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import Axios from 'axios'
import React,{ useEffect, useState} from 'react'




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

 // useEffect(()=>{
   // const bugTotal=currentProject.bugReport.length
    //console.length("bugTotal=>",bugTotal)

   

   
    
  //})

 
  const addBug=()=>{setOpenAddBug(true)}
  const onClose=()=>{setOpenAddBug(false)}

  const openEdit=(values)=>{
    
    console.log("bugEdit details=>", values)
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





   const LoadProject=(values)=>{


    
    setCurrentProject(JSON.parse(localStorage.getItem(values.projectName)))
    console.log(currentProject)
    
    
    
    /*Axios.post('http://localhost:3001/api/projects',{
      projectName:values.projectName    
    })
    .then((res)=>{
      
      setCurrentProject(res.data)
      console.log("currentProject=>",JSON.stringify(currentProject))
  
    })
    .catch((err)=>{
      console.log('error loading project =>',err)
    })
    .finally(
      
    
    
    )*/
  
  }


  const saveBug=(values)=>{


    values.bugNo=bugNo+1
    console.log(bugForm)
    bugForm.push(values)
    currentProject.bugReport=bugForm
    console.log("Project=>",JSON.stringify(currentProject))
    setBugNo(bugNo+1)
    setCurrentProject(currentProject)
    localStorage.setItem(currentProject.projectName,JSON.stringify(currentProject))
   
    
   }

   const editBug=(values)=>{

    
    bugForm[values.bugNo-1]=values
    console.log("bugForm after=>",bugForm)
    currentProject.bugReport=bugForm
    setCurrentProject(currentProject)
    localStorage.setItem(currentProject.projectName,JSON.stringify(currentProject))


    var bugTotal=currentProject.bugReport.length
    console.log("bugTotal=>",bugTotal)
   
    var i
    var fixedBugTotal=0

    for(i=0;i<bugTotal;i++){
      if(currentProject.bugReport[i].Status==="Fixed"){
        fixedBugTotal++
        
      }

    }

    console.log("fixedBugTotal=>",fixedBugTotal)
    setCurrentProgress(fixedBugTotal/bugTotal*100)
    console.log("currentProgress=>",currentProgress)
    

   }







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

  <div  style={{marginTop:10, display:'flex'}}>

<Form
    layout={'inline'}
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={LoadProject}
    
    autoComplete="off"
  >

<Form.Item
style={{width:300}}
      label="Project Name : "
      name="projectName"
      rules={[
        {
          required: true,
          message: 'Please input the project name to open!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit" style={{marginLeft:0}}>
        Load Project
      </Button>
    </Form.Item>

    </Form>

    <Form.Item
    style={{marginLeft:50}}>

      <Button onClick={addBug}>Add Bug +</Button>
      <Drawer title="Add New Bug" placement="right" onClose={onClose} open={openAddBug}>

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

   
<Form.Item style={{width:300, marginLeft:30}}>
<Progress  percent={currentProgress} />
</Form.Item>
     
       

     


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


    <div style={{marginTop:"10px"}}><h4>Currently Loaded : {currentProject.projectName}</h4></div>

  

    <Table 
    columns={columns} 
    dataSource={currentProject.bugReport} 
    pagination={false} 
    style={{marginTop:10}} 
    
   />
   

    </>

 )};

export default Project;