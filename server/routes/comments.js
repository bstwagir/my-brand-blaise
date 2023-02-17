const router = require("express").Router();
const Comment = require("../models/Comment");
const Post = require("../models/Post")
const mongoose=require('mongoose');
const jwt = require("jsonwebtoken")


const verify = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (authHeader) {
      const token = authHeader.split(" ")[1];
  
      jwt.verify(token, "mySecretKey", (err, user) => {
        if (err) {
          return res.status(403).json("Token is not valid!");
        }
  
        req.user = user;
        next();
      });
    } else {
      res.status(401).json("You are not authenticated!, Please login");
    }
  };

 

  /**
 * @swagger
 * components:
 *    
 *   schemas:
 *     Comment:
 *       type: object
 *       required:
 *         - postId
 *         - comment
 *
 *          
 *       properties:
 *         postId:
 *           type: string
 *           description: The auto-generated id of the post
 *         comment:
 *           type: string
 *           description: The subject of the message
 *       example:         
 *         postId: 6672449
 *         comment: wonderful
 *
 */


   // POST A COMMENT

/**
 * @swagger
 * components:
 *    
 *   schemas:
 *     Post:
 *       type: object
 *       required:
 *         - comment
 *         - postId
     
 *       properties:
 *         postId:
 *           type: string
 *           description: The id of the post that the user wants to comment on
 *         comment:
 *           type: string
 *           description: The comment
 * 
 *       example:         
 *         postId: 66889479930
 *         postId: Wonderful
 *
 */




/**
 * @swagger
 * /server/:postId/comments/:
 *   post:
 *     summary: Share a comment
 *     tags: [Comments]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Comment'
 *     responses:
 *       200:
 *         description: The post was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Post'
 *       500:
 *         description: Some server error
 */


router.post('/:postId/comments/', verify, async (req, res) => {

let postId=req.params.postId;
	if(!mongoose.Types.ObjectId.isValid(postId)){
		return res.status(400).send({
	  		message:'Invalid blog id',
	  		data:{}
	  	});
	}
    Post.findOne({_id:postId}).then(async (blog)=>{
		if(!blog){
			return res.status(400).send({
				message:'No blog found',
				data:{}
            });}
            else{   

                try{
                    
            let newCommentDocument= new Comment({
                comment:req.body.comment,
                postId:postId,
                userId:req.user.userId
            })
            let commentData=await newCommentDocument.save();

            await Post.updateOne(
                {_id:postId},
                {
                    $push: { comments:commentData._id  } 
                }
            )
        

    return res.status(200).send({
        message: 'comment added successfully',
        data:commentData})




                }catch(err){
                    return res.status(400).send({
                          message:err.message,
                          data:err
                      });
                }

            }
    })
})

router.delete('/:postId/comments/:id', verify, async (req, res) => {

    let comment_id=req.params.id;
	if(!mongoose.Types.ObjectId.isValid(comment_id)){
		return res.status(400).send({
	  		message:'Invalid comment id',
	  		data:{}
	  	});
	}

	Comment.findOne({_id:comment_id}).then(async (comment)=>{
		if(!comment){
			return res.status(400).send({
				message:'No comment found',
				data:{}
			});	
		}else{

			let current_user=req.user;

			if(comment.userId!=current_user.userId){
				return res.status(400).send({
					message:'Access denied',
					data:{}
				});	
			}else{
				try{
					await Comment.deleteOne({_id:comment_id})
					await Post.updateOne(
						{_id:comment.postId},
						{
							$pull:{comments:comment_id}
						}
					)

					return res.status(200).send({
						message:'Comment successfully deleted',
						data:{}
					});	
				}catch(err){
					return res.status(400).send({
				  		message:err.message,
				  		data:err
				  	});
				}


				
			}

		}
	}).catch((err)=>{
		return res.status(400).send({
	  		message:err.message,
	  		data:err
	  	});
	})


})

module.exports = router;