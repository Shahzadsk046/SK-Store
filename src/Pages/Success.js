import {useLocation} from "react-router-dom";

const Success = () => {
  const location = useLocation()
  console.log(location)
  return (
    <div>Successfully</div>
  )
}

export default Success