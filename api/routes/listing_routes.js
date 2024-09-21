import express from 'express';
import { 
    addListings, allListings, 
    deleteListing, 
    singleLIsting,
    updateListing
} from '../controller/listings_controller.js';

const app = express();

app.post('/create-listings', addListings);
app.get('/all-listings', allListings);
app.get('/single-listings/:id', singleLIsting);
app.delete('/delete-listings/:id', deleteListing);
app.patch('/update-listings/:id', updateListing);

export default app;