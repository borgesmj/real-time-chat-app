const SubmitBtn = ({btnText, handleSubmit}) => {

  const handleButton = (e) => {
    e.preventDefault()
    handleSubmit()
  }
  return (
    <button className="button" onClick={handleButton}>
      {btnText}
    </button>
  )
}

export default SubmitBtn
