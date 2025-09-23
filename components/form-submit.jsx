'use client'; 
import { useFormStatus } from "react-dom";
// needs to be used inside of a form
export default function FormSubmit() {
    const status = useFormStatus();
    if (status.pending) {
        return <p>creating post...</p>;
    } 
        return (
            <>
                <button type="reset">Reset</button>
                <button>Create Post</button>
            </>
        )
    
}