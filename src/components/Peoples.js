import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PeopleAction } from '../actions/PeopleAction';
import {Table,Layout} from "antd";

import "antd/dist/antd.css";
const People = ()=>{
  const { Header, Content, Footer , Sider} = Layout;
  const people = useSelector((state) => state.peoples);
  const { peoples, loading} = people;
  const dispatch = useDispatch();
  console.log(peoples);
  React.useEffect(() => {
    if(loading){
     return dispatch(PeopleAction())
    } else {
      return {}
    }   
  }, [dispatch,loading]);
  // ant desing table
 const dataSource = peoples?.map((item,index)=>{
   return {
     key: index,
     name: item.name,
     gender: item.gender === "n/a" ? "others" : item.gender,
     hair_color: item.hair_color === "n/a" ? "none" : item.hair_color,
     eye_color: item.eye_color,
     mass: item.mass,
     height: item.height,
   };
 })


 const columns = [
   {
     title: "Name",
     dataIndex: "name",
     key: "name",
   },
   {
     title: "Gender",
     dataIndex: "gender",
     key: "gender",
   },
   {
     title: "Hair_color",
     dataIndex: "hair_color",
     key: "hair_color",
   },
   {
     title: "Eye_color",
     dataIndex: "eye_color",
     key: "eye_color",
   },
   {
     title: "Mass",
     dataIndex: "mass",
     key: "mass",
   },
   {
     title: "Height",
     dataIndex: "height",
     key: "height",
   },
 ];
  return (
    <div>
      <Layout>
        <Header>header</Header>
        <Layout>
          <Content>   
            <Table columns={columns} dataSource={dataSource} pagination={false}></Table>
          </Content>
        </Layout>
        <Footer>Copy right@2021</Footer>
      </Layout>
    </div>
  );
}
export default People;