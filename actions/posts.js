'use server'; 

import { uploadImage } from "@/lib/cloudinary";
import { storePost } from "@/lib/posts";
import { redirect } from "next/navigation";
export async function createNewPost(prevState , formData) {
    let errors = [];
    const title = formData.get('title');
    const image = formData.get('image');
    const content = formData.get('content');
    if(!title || title.trim().length === 0){
      errors.push('title is required');
    }
    if(!content || content.trim().length === 0){
      errors.push('content is required');
    }
    if(!image || image.size === 0){
      errors.push('image is required');
    }
    if (errors.length > 0) {
      return ({ errors });
  }
  let imageUrl;
  try {
     imageUrl = await uploadImage(image);
  } catch (e) {
    console.log(e);
    throw new Error('Image upload failed, post was not created , please try agian later');
  }
    await storePost({
      imageUrl: imageUrl,
      title: title,
      content: content, 
      userId : 1 
      
    })
    redirect('/feed');
   }