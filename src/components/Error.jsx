const Error = ({ errorMessage, handleError, buttonText }) => {
    return ( 
        <div>
            <p>{errorMessage}</p>
            <button onClick={() => handleError()}>{buttonText}</button>
        </div>
    );
}
 
export default Error;