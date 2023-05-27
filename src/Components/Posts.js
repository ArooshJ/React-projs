import React, { useState } from 'react'
import { useEffect } from 'react';
import './Styless/Posts.css'

 
export default function Posts(props) {
      
    const[newPoststyle, setNewPoststyle] = useState({
        display: 'none',
    })
    const [selectedImage, setSelectedImage] = useState(null);
    const[postcontent,setPostcontent] = useState("");
    const[comContent,setComContent] = useState("");
    const[repContent,setRepContent] = useState("");

    const HandleContent =(e)=>{
        setPostcontent(e.target.value);
    }
    const HandleFileChange = (e)=>{
        const file =e.target.files[0];
        if(file){
            const url = URL.createObjectURL(file)
            setSelectedImage(url)
        }
        
    }
    const HandleCommentChange =(e)=>{
         setComContent(e.target.value)
    }
    const HandleReplyChange = (e)=>{
        setRepContent(e.target.value)
    }
 
    

    

//     let  [props.postobjs,props.setpostobjs] = useState(
//         [
//             {
//         id:1,
//         name: "Name",
//         content:"Content",
//         Media : "3608226.jpg",
//         Likes: 0,
//         Shares: 0,
//         Comments: [
            
//             ],
//             //noComs: `${this.Comments.length}`,

//     },
//             {
//         id:2,
//         name: "Name2",
//         content:"Content2",
//         Media : "3608226.jpg",
//         Likes: 0,
//         Shares: 0,
//         Comments: [
           
//             ],
//             //noComs: `${this.Comments.length}`,

//     },
//             {
//         id:3,
//         name: "Name3",
//         content:"Content3",
//         Media : "3608226.jpg",
//         Likes: 0,
//         Shares: 0,
//         Comments: [
//             ],
//             //noComs: `${this.Comments.length}`,

//     },
// ]
//     )

 const UpdateAccpost =(newp) =>{
    props.setAccs(
        props.Accs.map(a=>{
            if(a.AccId ===  props.loggedAcc.AccId){
                   const newacc ={...a, Posts: [...a.Posts,
                   newp]};
                        props.setLoggedinAcc(newacc);
                        return newacc;
            }else{
                return a;
            }
        }
            
        )
            )
 }

    const createnewPost =()=>{
        const p ={
            id:`${props.postobjs.length+1}`,
            name: `${props.loggedAcc.UserId}`,
            content:postcontent,
            Media : selectedImage,
            Likes: 0,
            Shares: 0,
            Comments: [
               
                ],
           
            }
        props.setpostobjs([...props.postobjs, p])
        UpdateAccpost(p);
       
                setPostcontent("");

        return props.postobjs
        }
    

  
    
    const PostComment =(i)=>{
        props.setpostobjs(
            props.postobjs.map(p=>{
                if(p.id === i){
                 const updatedComs = [...p.Comments,{
                    ComId: (p.Comments.length + 1),
                    Content: comContent,
                        Likes: 0,
                        by: `${props.loggedAcc.UserId}`,
                        Replies:[],
                       
                 }]
                 p.Comments = updatedComs
                //  UpdateAccpost(p);
                 return p
                 // end if
                }
                else{
                    return p
                }
            }
                
            )
        )
    }

    const PostReply = (pi,ci) =>{
        props.setpostobjs(
            props.postobjs.map(p =>{
                if(p.id === pi){
                   p.Comments.map(c =>{
                    if(c.ComId === ci){
                       const updatedReplies = [...c.Replies,{
                        RepId: c.Replies.length+1,
                        content: repContent,
                        likes: 0,
                        by: `${props.loggedAcc.UserId}`
                       }]
                       c.Replies = updatedReplies;
                      

                       return {...c,Replies:updatedReplies}
                    }else{
                        return c
                    }
                    
                   })
                  
                   return p
                }else{
                    return p
                }
            }
            )
        )
    }

    const Like = (i) =>{
        // console.log("liking")
        props.setpostobjs(
            
            props.postobjs.map(post => {
                if(post.id === i){
                    return {...post, Likes: post.Likes+1}
                }
                else{
                    return post
                }
            })
            
        )
        // console.log("liked")
    }
    const LikeCom =(pi,ci)=>{
        props.setpostobjs(
            props.postobjs.map(p=>{
                if(p.id === pi){
                    p.Comments.map(
                        c=>{
                            if(c.ComId === ci){
                                // console.log("updating likes")
                                c.Likes = c.Likes+1;
                                p.Comments[ci-1] = c
                                return c
                                
                                
                            }else{
                                return c 
                            }
                          
                        }
                        
                    )
                    // console.log(p)

                    return p
                }
                else{
                    return p
                }
               
            })
        )
    }
    const LikeRep =(pi,ci,ri)=>{
        props.setpostobjs(
            props.postobjs.map(p=>{
                if(p.id === pi){
                    p.Comments.map(
                        c=>{
                            if(c.ComId === ci){
                                  c.Replies.map(r =>{
                                    if(r.RepId === ri){
                                            r = {...r, likes: r.likes+1}
                                            c.Replies[ri-1]= r
                                            return r
                                    }else{
                                        return r
                                    }
                                  })
                                  p.Comments[ci-1] = c
                                  return c

                            }
                            else{
                                return c
                            }
                        }
                    )
                    return p
                }else{
                    return p
                }
            })
        )
    }
    const Share = (i) =>{
        // console.log("liking")
        props.setpostobjs(
            
            props.postobjs.map(post => {
                if(post.id === i){
                    return {...post, Shares: post.Shares+1}
                }
                else{
                    return post
                }
            })
            
        )
        // console.log("liked")
    }

    const DeletePost =(id) =>{
        props.setpostobjs(
            props.postobjs.filter(post => post.id !== id)
        )
    }
    
    // let posts;
    // useEffect(()=>{ posts = props.postobjs.map( post =>
    //     <div id="post" key={post.id} className="posts">
    //         Post {post.id}
    //         <button id='Delete' onClick={()=>{DeletePost(post.id)}}>Delete</button>
    //         <div className="by">
    //             By: {post.name}
    //         </div>
    //         <div className="media">
    //          <img src= {post.Media} alt="idk why doesnt this work" id ="postimage"/>
    //         </div>
    //         <div className="Content">
    //                {post.content}
    //         </div>
    //         <div className="Panel">
    //             <div id = {`post${post.id} likes`} onClick={() => {Like(post.id)}}>
    //                Post Like {post.Likes}
    //             </div>
    //             <div id ={`post${post.id}shares`} onClick={()=>{Share(post.id)}}>
    //                 Shares: {post.Shares}
    //             </div>
    //             <div>
    //                 Follow
    //             </div>
                 
    //         </div>
    //         {post.Comments.map( comment=>
    //           <div id={`p${post.id}c${comment.ComId}`} key={`p${post.id}c${comment.ComId}`} className="comments">
    //           {/* Comment {comment.ComId} */}
    //           <div className="comContent">
    //           {comment.Content}
    //           </div>
    //           <div className="Comment2">
    //              <div className="commentby">
    //                 {comment.by}
    //               </div>
    //              <div className="ComLikes" onClick={()=>{LikeCom(post.id,comment.ComId)}}>
    //                   Comment Likes: {comment.Likes}
    //              </div>
    //           </div>
              
    //           <div className="Replies">
    //           {
    //             comment.Replies.map(reply =>(
    //                 <div id= {`p${post.id}c${comment.ComId }r${reply.RepId}`} key={`p${post.id}c${comment.ComId }r${reply.RepId}`} className="Replies">
    //                 Reply {reply.RepId}
    //                 <div className="repContent">{reply.content}</div>
    //                 <div className="Reply2">
    //                    <div className="replyBy"> {reply.by}</div>
    //                    <div className="repLikes" onClick={()=>{LikeRep(post.id,comment.ComId,reply.RepId)}}> ReplyLikes: {reply.likes}</div>
    //                 </div>
                   
                    
                    
                   

    //              </div>
    //             )
                    
                
    //             )
    //           }
    //           </div> 
    //           {/* End reply div */}
    //            <div className="newReply">
    //             Reply this Comment:
    //             <textarea name="" id="" cols="30" rows="1" onChange={HandleReplyChange}></textarea>
    //             <button className="postReply" onClick={() =>{PostReply(post.id,comment.ComId)}}>Reply</button>
    //            </div>
              
    //          </div> // End Comment div
    //             // End comment object
    //         )}
    //         <div className="newComment">
    //             Comment on this post: 
    //             <textarea name="" id="" cols="30" rows="2"  onChange={HandleCommentChange}> </textarea>
    //             <button className='PostCom' onClick={()=>{PostComment(post.id)}}>Comment</button>
    //         </div>
    //     </div>
    // ) 
    // return posts }
    // ,[props.postobjs]
    // )
   
    const posts = props.postobjs.map(post =>
        <div id="post" key={post.id} className="posts">
            Post {post.id}
            <button id='Delete' onClick={()=>{DeletePost(post.id)}}>Delete</button>
            <div className="by">
                By: {post.name}
            </div>
            <div className="netContent">
            <div className="media">
             <img src= {post.Media} alt="idk why doesnt this work" id ="postimage"/>
            </div>
            <div className="Content">
                   {post.content}
            </div>
            </div>
            
            <div className="Panel">
                <div id = {`post${post.id} likes`} className='postLikes' onClick={() => {Like(post.id)}}>
                   Like {post.Likes}
                </div>
                <div id ={`post${post.id}shares`} className='postShares' onClick={()=>{Share(post.id)}}>
                    Share {post.Shares}
                </div>
                <div className='Follow'>
                    Follow
                </div>
                 
            </div>
            <div className='comContainer'> 
            <b>Comments</b>
            {post.Comments.map( comment=>
              <div id={`p${post.id}c${comment.ComId}`} key={`p${post.id}c${comment.ComId}`} className="comments">
              {/* Comment {comment.ComId} */}
              <div className="comContent">
              {comment.Content}
              </div>
              <div className="Comment2">
                 <div className="commentby">
                    {comment.by}
                  </div>
                 <div className="ComLikes" onClick={()=>{LikeCom(post.id,comment.ComId)}}>
                       Likes: {comment.Likes}
                 </div>
              </div>
              
              <div className="RepliesC">
                <b>Replies</b>
              {
                comment.Replies.map(reply =>(
                    <div id= {`p${post.id}c${comment.ComId }r${reply.RepId}`} key={`p${post.id}c${comment.ComId }r${reply.RepId}`} className="Replies">
                    {/* Reply {reply.RepId} */}
                    <div className="repContent">{reply.content}</div>
                    <div className="Reply2">
                       <div className="replyBy"> {reply.by}</div>
                       <div className="repLikes" onClick={()=>{LikeRep(post.id,comment.ComId,reply.RepId)}}> ReplyLikes: {reply.likes}</div>
                    </div>
                   
                    
                    
                   

                 </div>
                )
                    
                
                )
              }
              </div> 
              {/* End reply div */}
               <div className="newReply">
                Reply this Comment:
                <textarea name="" id="" cols="20" rows="1" onChange={HandleReplyChange}></textarea>
                <button className="postReply" onClick={() =>{PostReply(post.id,comment.ComId)}}>Reply</button>
               </div>
              
             </div> // End Comment div
                // End comment object
            )}
            <div className="newComment">
                Comment on this post: 
                <textarea name="" id="" cols="10" rows="2"  onChange={HandleCommentChange} className='CommentTB'> </textarea>
                <div className="PostComHolder">
                <button className='PostCom' onClick={()=>{PostComment(post.id)}}>Comment</button>
                </div>
                
            </div>
            </div>
        </div>
    )




  return (
    <div className="PostComp">

<div id="newPost" >
         <div id='NewPostbtn'> <h5>Post Something: </h5> </div>
   
        Enter Post Content: <br />
        <div  className='newpost'>
        <textarea name="content" id="" cols="30" rows="5" onChange={HandleContent}></textarea>
        </div>
        
        <br />
        Upload image: <br />
        <br />
        <div  className='newpost'>
        <input type="file" name="Post image, video" id="File Input" onChange={HandleFileChange} />
        </div>
        <br />
        
        <div className="newpost">
        <button onClick={()=>{createnewPost()}}>Post</button>
        </div>
        

    </div>
        <h2>Posts</h2>

        <div id ="Posts">
        {posts}   
        </div>
    
    </div>
       
  )
  }
