import Listing from "../models/listing.module.js"
import { errorHandler } from "../utils/error.js";




export const createListing = async(req,res,next)=>{
    try {
        const listing = Listing.create(req.body);
        return res.status(201).json(listing);
    } catch (error) {
        next(error)
    }
}
export const deleteLstings = async(req,res,next)=>{
   const listing = await Listing.findById(req.params.id);
if(!listing){
    return next(errorHandler(404,'Listing not found1'));
}
if(req.user.id !== listing.userRef){
    return next(errorHandler(401,'You can only delete your own listings!'));
}
try {

    await Listing.findByIdAndDelete(req.params.id);
res.status(200).json('listings has been deleleted!')
} catch (error) {
    next(error);
}
}
export const updateListing = async (req, res, next) => {
    const listing = await Listing.findById(req.params.id);
    if (!listing) {
      return next(errorHandler(404, 'Listing not found!'));
    }
    if (req.user.id !== listing.userRef) {
      return next(errorHandler(401, 'You can only update your own listings!'));
    }
  
    try {
      const updatedListing = await Listing.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      res.status(200).json(updatedListing);
    } catch (error) {
      next(error);
    }
  };

  export const getListing = async (req, res, next) => {
    try {
      const listing = await Listing.findById(req.params.id);
      if (!listing) {
        return next(errorHandler(404, 'Listing not found!'));
      }
      res.status(200).json(listing);
    } catch (error) {
      next(error);
    }
  };
  