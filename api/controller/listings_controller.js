import mongoose from "mongoose";
import listings from "../models/listings_models.js";
import { errorHandler } from "../utils/errorHandler.js";

export const addListings = async (req, res, next) => {
    try {
        const {
            name, category, price, quantity, image, description
        } = req.body;

        const listing = await listings.create({
            name, category, price,
            quantity, image, description
        });

        await listing.save();

        res.status(201).json('Listing has been create!');

    } catch (error) {
        next(error);
    }
}

export const allListings = async (req, res, next) => {
    try {
        const listing = await listings.find({}).sort({ createdAt : -1});

        res.status(200).json(listing);
    } catch (error) {
        next(error);
    }
}

export const singleLIsting = async (req, res, next) => {
    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return next(errorHandler(404, 'Product Not Found!'));
        }

        const listing = await listings.findOne({ _id: id});
        
        if (!listing) {
            return next(errorHandler(404, 'Product Not Found!'));
        }

        res.status(200).json(listing);
    } catch (error) {
        next(error);
    }
}

export const deleteListing = async (req, res, next) => {
    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return next(errorHandler(404, 'Product Not Found!'));
        }

        const listing = await listings.findByIdAndDelete({ _id: id});
        
        if (!listing) {
            return next(errorHandler(404, 'Product Not Found!'));
        }

        res.status(200).json('Product has been deleted!');
    } catch (error) {
        next(error);
    }
}
export const updateListing = async (req, res, next) => {
    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return next(errorHandler(404, 'Product Not Found!'));
        }

        const listing = await listings.findByIdAndUpdate({ _id: id}, {...req.body});
        
        if (!listing) {
            return next(errorHandler(404, 'Product Not Found!'));
        }

        res.status(200).json('Product has been updated!');
    } catch (error) {
        next(error);
    }
}