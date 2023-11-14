import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function Listing() {
    const [listing, setListing] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const params = useParams();

    useEffect(()=>{
        const fetchListing=async()=>{
            try {
                setLoading(true);
                const res= await fetch(`/api/listing/get/${params.listingId}`);
                const data = await res.json();

                if(data.success === false){
                    setError(true);
                    setLoading(false);
                    return;
                }

                setListing(data);
                
                setLoading(false);
                setError(false);
            } catch (error) {
                setError(true);
                setLoading(false);
            }
            
        }
        fetchListing();
    },[params.listingId])
    console.log(listing)
  return (
    <div>Listing</div>
  )
}
