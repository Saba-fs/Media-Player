import React, { useEffect, useState } from 'react'
import { Button, Col, FloatingLabel, Form, Modal, Row } from 'react-bootstrap'
import { addCategoryAPI, deleteCategoryAPI, getAVideoAPI, getCategoryAPI, updateCategoryAPI } from '../services/allAPI'
import VideoCard from './VideoCard'

function Category({dropVideoResponse}) {

const[show,setShow]=useState(false)

const handleClose=()=>setShow(false)
const handleShow=()=>setShow(true)


const[categoryName,setCategoryName]=useState("") // to get inputs 

const[allCategories,setAllCategories]=useState([])



const handleAdd = async()=>{
  if(categoryName){
    const result =await addCategoryAPI( {categoryName,allVideos:[]}) // allVideos:[] is used to stor the videos which is draggede and dropped
   // console.log(result)
    if(result.status>=200  && result.status<300){// to get items ontime without refreshing the page
      handleClose()
      setCategoryName("")
      getCategories()
    }else{
      console.log(result.message);
    }
  }else{
    alert("please fill the missing fields")
  }

}
// console.log(categoryName)

const getCategories =async()=>{
  const {data} = await getCategoryAPI()
  setAllCategories(data)
}
// console.log(allCategories)

const removeCategory=async(id)=>{
  await deleteCategoryAPI(id)
  getCategories()
}

const dragOver=(e)=>{
  console.log("video drag over the category")
  e.preventDefault()
}

const videoDrop=async(e,categoryId)=>{
  // console.log("video dropped",categoryId)
  const videoId= e.dataTransfer.getData('videoId')
  console.log(videoId,'dropped into the category id:',categoryId)

  const {data}=await getAVideoAPI(videoId)
  // console.log(data)
  const selectedCategory= allCategories.find(item=>item.id==categoryId)// this stmt is used to decide which the category is selected for pushing the video
  selectedCategory.allVideos.push(data)// here the "allVideos" is a empty array given in the category in json server
  // console.log(selectedCategory)

  await updateCategoryAPI(categoryId,selectedCategory)
  getCategories()
}

useEffect( ()=>{
  getCategories()
},[dropVideoResponse])

 const videoDragStarted=(e,videoId,categoryId)=>{
  let dataShare={videoId,categoryId}
  e.dataTransfer.setData("data",JSON.stringify(dataShare))
 }

  return (
    <>
       <div className="d-grid">
        <Button onClick={handleShow} className='btn btn-primary'>Add Category</Button>
       </div>

       <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Category Details</Modal.Title>
        </Modal.Header>
        <Modal.Body className='bg-info'>
          <Form>
          <FloatingLabel
        controlId="floatingInput"
        label="Category Name"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Enter the Category Name" onChange={e=>setCategoryName(e.target.value)} />
      </FloatingLabel>
      </Form>
      </Modal.Body>
      <Modal.Footer>
          <Button variant="warning" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="info" onClick={handleAdd}>
            Add
            </Button>
       </Modal.Footer>   
      </Modal>

      {
        allCategories?.length>0?allCategories.map(category=>(
          <div className="border border-3 m-3 p-3" droppable="true" onDragOver={e=>dragOver(e)} onDrop={e=>videoDrop(e,category?.id)}>
            <div className="d-flex justify-content-between align-items-center">
              <h3>{category?.categoryName}</h3>
              <button className="text-danger btn" onClick={()=>removeCategory(category?.id)}><i class="fa-solid fa-trash"></i></button>  
            </div>

            {/* to display */}
            <Row>
              {
                category?.allVideos.length>0?category?.allVideos.map(card=>(
                  <Col sm={12}  className='mt-2' draggable onDragStart={e=>videoDragStarted(e,card.id,category.id)}>
                   <VideoCard video={card} insideCategory={true}/>
                  </Col>
                )):null
              }
            </Row>
          </div>
        )):<p className='text-danger'>No categories created</p>
      }
    </>
  )
}

export default Category
