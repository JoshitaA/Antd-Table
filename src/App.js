import './App.css';
import 'antd/dist/antd.css'
import { Table, Popconfirm} from 'antd';



const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  onSelect: (record, selected, selectedRows) => {
    console.log(record, selected, selectedRows);
  },
  onSelectAll: (selected, selectedRows, changeRows) => {
    console.log(selected, selectedRows, changeRows);
  },
};
function App() {
  

  const data=[
         {
            key: 0,    
            name: 'Kim Woo-Bin',        
            age: 32,    
            address: 'Myeongdong',
            kdrama: 'Uncontrollably fond',
            
            
            
          },
          {
            key: 1311,    
            name: 'Lee Jong-Suk',   
            age: 25,      
            address: 'Yeouido Park',
            kdrama: 'While you were sleeping'
          },
          {
            key: 1312,    
            name: 'Kim Young-kwang', 
            age: 18,      
            address: 'Insadong-gil',
            kdrama: 'On Your Wedding Day'
          },
          {
            key: 1,
            name: "Kim Seon-ho",
            age: 23,
            address: "Ihwa Mural Village",
            kdrama: 'Waikiki 2'
          },
          {
            key: 13,    
            name: 'Lee Yi-kyung', 
            age: 28,      
            address: 'Dumulmeori',
            kdrama: 'Waikiki'
          },
          {
            key: 57,    
            name: 'Nam Joo-hyuk', 
            age: 25,      
            address: 'Bussan',
            kdrama: 'Start-up'
          },
          {
            key: 59,    
            name: 'Bae Suzy', 
            age: 28,      
            address: 'seoul',
            kdrama: 'Start-up',
            
          },
        ]

        const columns =[
          {
            title: "Name",
            dataIndex: "name",
            key: 'name', 
            width:'40%',
            filters: [{text: 'Kim Woo-Bin',    value: 'Kim Woo-Bin'}, {text: 'Park Shin-hye',    value: 'Park Shin-hye'}],
          onFilter: (value, record) => record.name.indexOf(value) === 0,
            render: name=>{
              return <a>{name}</a>
            }
            
          },
          {
            title: "Age",
            dataIndex: "age",
            key: 'age',
            sorter:(a,b)=> a.age-b.age
           
          },
          {
            title: "Address",
            dataIndex: "address", 
            key: 'address',
            input: [{text:''}],
          
          },
          { 
            title: 'Kdrama', 
            dataIndex: 'kdrama', 
            key: 'kdrama', 
            width:'40%',
          
        },
        
      
        
      ]
       
   
      
  
  return (
    <div className="App">
      <header className="App-header">
        <Table
        dataSource={data}
        columns={columns}
        rowSelection={rowSelection}>
          
        </Table>
        
      </header>
    </div>
  );

 }
export default App;
