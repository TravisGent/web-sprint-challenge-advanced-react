import { useState } from "react";

const useFormHandleSubmit = () => {
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowSuccessMessage(true);
      };

    return [showSuccessMessage, handleSubmit];
}

export default useFormHandleSubmit;