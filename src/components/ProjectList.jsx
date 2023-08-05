import React from 'react';
import { Space, Table, Tag ,Button} from 'antd';

const openProject=()=>{
  alert("Ok")
}


const columns = [
  {
    title: 'Project Name',
    dataIndex: 'projectName',
    key: 'projectName',
    render: (text) =>{
      return(

        <Button onClick={openProject}> {text} </Button>

    )} ,
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
  },
  {
    title: 'Author',
    dataIndex: 'author',
    key: 'author',
  },
  {
    title: 'Added Date',
    key: 'addedDate',
    dataIndex: 'addedDate',

  },

];
const data = [
  {
    key: '1',
    projectName: 'Bug Tracker',
    description: 'An app to track and monitor bugs of a project',
    author: 'isuru',
    addedDate: '05-08-2023'
  }

];
const ProjectList = () => <Table columns={columns} dataSource={data} />;
export default ProjectList;